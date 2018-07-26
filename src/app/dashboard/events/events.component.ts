import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EventModalComponent } from '../event-modal/event-modal.component';
import { DashboardService } from '../../services/dashboard.service'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private dialog: MatDialog, private dashBoardService: DashboardService) {

  }
  myEventsSelected: boolean = false;

  openDialog(): void {
    let dialogRef = this.dialog.open(EventModalComponent, {
      height: '40em',
      width: '40em'
    })
  }
  public events = [];

ngOnInit(){
  this.getAllEvents()
  // this.dashBoardService.getAllEvents().subscribe(returnedData => {
  //   this.events = returnedData
  //   console.log(this.events)
  // })
}
getAllEvents(){
  this.dashBoardService.getAllEvents().subscribe(returnedData => {
    this.events = returnedData
    console.log(this.events)
    this.myEventsSelected = false;
    console.log(this.myEventsSelected)
  })
}

getMyEvents(){
  this.dashBoardService.getMyEvents().subscribe(returnedData => {
    this.events = returnedData
    console.log(this.events)
    this.myEventsSelected = true;
    console.log(this.myEventsSelected)
  })
}
}


