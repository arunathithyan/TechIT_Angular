import { Injectable } from '@angular/core';
import { Ticket } from '../models/Ticket';
import { Observable } from 'rxjs/Observable';


export interface DataService {
  list(): Observable<Ticket[]>;
  add(entry: Ticket): Observable<Ticket>;
  details(id:string): Observable<Ticket>
  login(credentials);
  logout();

}
