import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Ticket } from '../models/Ticket';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Injectable()
export class RemoteDataService implements DataService {
  

  constructor(private router: Router,private http: HttpClient) { }
  
  token="";
  userData={};
  userId="";
  

  list(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`/api/users/${this.userId}/tickets`,
    {headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8','Authorization': 'Bearer ' + this.token})});
  }
  details(id):Observable<Ticket> {

    return this.http.get<Ticket>(`/api/users/${this.userId}/tickets/${id}`,{headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})});
  }
  add(entry: Ticket): Observable<Ticket> {
    
    entry['userid']=this.userId;
    console.log(entry);
    return this.http.post<Ticket>('/api/tickets', entry,
    {headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8','Authorization': 'Bearer ' + this.token})});
  }

  login(credentials) {
    this.http.post('/api/login', credentials).subscribe(loginData=>{
      
      this.token = loginData['token'];
      this.userData= loginData['userData']
      this.userId = this.userData['id']
      console.log(this.token)
      console.log(this.userId)
      console.log(loginData)
      this.router.navigate(['view'])
    })
  }

  logout(){
    this.token="";
    this.userId="";
    this.userData={};
    this.router.navigate([''])
  }
}
