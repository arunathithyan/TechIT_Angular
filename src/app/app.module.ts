import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { ViewTicketsComponent } from './components/view-tickets/view-tickets.component';
import { DetailsTicketComponent } from './components/details-ticket/details-ticket.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { RemoteDataService } from './remote-data.service';
import { DataService } from './data.service';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateTicketComponent,
    ViewTicketsComponent,
    DetailsTicketComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
 
  ],
  providers: [
    {
      provide: 'DataService',
      useClass: RemoteDataService
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
