import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject('DataService') private dataService: DataService) { }

  ngOnInit() {
  }

  onLogout(){
    this.dataService.logout()
  }

}
