import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { RegComponent } from './reg/reg.component';
import { CabComponent } from './cab/cab.component';
import { TicketComponent } from './ticket/ticket.component'

import {FormsModule} from '@angular/forms';
import {CheckFormService} from './check-form.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthService} from './auth.service'
import {HttpModule} from '@angular/http';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    RegComponent,
    CabComponent,
    TicketComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpModule
  ],
  providers: [CheckFormService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
