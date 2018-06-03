import { Component, OnInit, Input, Inject }  from '@angular/core';
import { Ticket } from '../../../models/Ticket';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.css']
})
export class ViewTicketsComponent implements OnInit {
  entries: Ticket[] = [];
  entrie:Ticket={};

  constructor(private router: Router,private route: ActivatedRoute,
    @Inject('DataService') private dataService: DataService) {}

  ngOnInit() {
    
    this.dataService.list().subscribe(entries => {
      this.entries = entries;
    });
  
  
  }


  detailEntry(id): boolean {
    console.log();
      this.router.navigate([`details/${id}`]);
    return false;
  }

  createEntry(): boolean {
      this.router.navigate(['create']);
    return false;
  }
}
