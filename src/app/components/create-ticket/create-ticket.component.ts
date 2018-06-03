import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { Ticket } from '../../../models/Ticket';


@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
entry = new Ticket();

constructor(
    private router: Router,
    @Inject('DataService') private dataService: DataService
) { }

  ngOnInit() {
  }

  addEntry(): boolean {
    this.dataService.add(this.entry).subscribe(entry => {
      this.router.navigate(['view']);
    });
    return false;
  }
  cancelEntry(): boolean {
      this.router.navigate(['view']);
    return false;
  }
}
