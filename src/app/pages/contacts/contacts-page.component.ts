import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, throwError } from 'rxjs';
import { Contact } from 'src/app/_core/models/contact.model';
import { Mail } from 'src/app/_core/models/mail.model';
import { MailService } from 'src/app/_core/services/mail.service';
import { Globals } from 'src/app/_shared/helpers/models/globals';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss'],
})
export class ContactsPageComponent implements OnInit, OnDestroy {
  contact: Contact = new Contact();
  mailSubs: Subscription = new Subscription();
  submitted: boolean = false;
  constructor(
    public globals: Globals,
    private mailService: MailService,
    private router: Router
  ) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    if (this.mailSubs) {
      this.mailSubs.unsubscribe();
    }
  }

  public onSubmitContactForm() {
    this.submitted = true;
    this.mailSubs = this.mailService
      .sendEmail(this.createEmailBody())
      .subscribe(
        () => {
          this.sendMailSuccessfull();
        },
        (err) => {
          return throwError(err);
        }
      );
  }

  private sendMailSuccessfull() {
    this.submitted = false;
    this.contact = new Contact();
    Swal.fire(
      '😊',
      `Votre demande est envoyer avec success, merci ..`,
      'success'
    );
    this.router.navigate(['/home']);
  }

  private createEmailBody() {
    const mailBody = new Mail();
    mailBody.email_title = this.contact.object;
    mailBody.email_description = this.contact.message;
    mailBody.email_sender = this.contact.email;
    mailBody.email_reception = this.globals.CONTACT_PAGE.EMAIL_RECEPTION;
    return mailBody;
  }
}
