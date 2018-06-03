import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { ViewTicketsComponent } from './components/view-tickets/view-tickets.component';
import { DetailsTicketComponent } from './components/details-ticket/details-ticket.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [

    { path: '', component: LoginComponent },
  { path: 'view', component: ViewTicketsComponent },
  { path: 'create', component: CreateTicketComponent },
  { path: `details/:id`, component: DetailsTicketComponent },
  
  
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
