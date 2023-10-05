import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mail } from '../models/mail.model';

@Injectable()
export class MailService {
  constructor(private http: HttpClient) {}

  public sendEmail(body:Mail): Observable<Mail> {
    const path = `https://formsubmit.co/ajax/${body.email_reception}`;
    return this.http.post<Mail>(path,body);
  }
}