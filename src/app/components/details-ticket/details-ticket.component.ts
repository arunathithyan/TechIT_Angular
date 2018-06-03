import { Component, OnInit, Input, Inject }  from '@angular/core';
import { Ticket } from '../../../models/Ticket';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-ticket',
  templateUrl: './details-ticket.component.html',
  styleUrls: ['./details-ticket.component.css']
})
export class DetailsTicketComponent implements OnInit {
  entrie: Ticket = {};
  id:string;
  constructor(private router: Router,private route: ActivatedRoute,
    @Inject('DataService') private dataService: DataService
) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id=params['id']; // (+) converts string 'id' to a number

  // In a real app: dispatch action to load the details here.
});
    this.dataService.details(this.id).subscribe(entrie => {
      this.entrie = entrie;
    });
  }

  
  backHome(): boolean {
      this.router.navigate(['view']);
    
    return false;
  }

}
