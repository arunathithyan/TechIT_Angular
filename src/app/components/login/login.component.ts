import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
credentials = {};
successful = false;

  constructor(private router: Router,
    @Inject('DataService') private dataService: DataService,
  ) { }

  ngOnInit() {
  }

  onLogin(form: NgForm)
  {
    this.credentials = form.value;
    this.dataService.login(this.credentials)
    // this.router.navigate(['']);
    return false;
  }
}
