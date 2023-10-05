import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsPageComponent } from './contacts-page.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/_core/core.module';
import { SharedModule } from 'src/app/_shared/shared.module';

const DECLARATIONS: any[] = [
  ContactsPageComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    SharedModule,
    ContactsRoutingModule,
  ],
  declarations: [DECLARATIONS],
  exports: [DECLARATIONS],
  providers: [],
})
export class ContactsModule {}
