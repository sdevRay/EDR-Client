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

  public events = [];
  public updateOneCardArray: any;


  constructor(private dialog: MatDialog, private dashBoardService: DashboardService) {

  }
  myEventsSelected: boolean = false;

  openDialog(): void {

    let dialogRef = this.dialog.open(EventModalComponent, {
      height: '40em',
      width: '40em',
      data: {
        update: false
      }
    })

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.dashBoardService.postNewEvent(data)
          .subscribe(() => this.getMyEvents())
      }
    })

  }

  updateDialog(eventId): void {
    this.dashBoardService.getOneEvent(eventId)
    .subscribe(returnedData => {
      this.updateOneCardArray = returnedData;
      this.launchUpdateDialog(eventId, this.updateOneCardArray)
    })
  }

  launchUpdateDialog(eventId, updateOneCardArray){
    let dialogRef = this.dialog.open(EventModalComponent, {
      height: '40em',
      width: '40em',
      data: {
        eventDate: updateOneCardArray.eventDate,
        eventName: updateOneCardArray.eventName,
        eventCity: updateOneCardArray.eventCity,
        eventState: updateOneCardArray.eventState,
        eventType: updateOneCardArray.eventType,
        measurement: updateOneCardArray.measurement,
        unit: updateOneCardArray.unit,
        eventDistance: updateOneCardArray.eventDistance,
        goalHours: updateOneCardArray.goalHours,
        goalMinutes: updateOneCardArray.goalMinutes,
        goalSeconds: updateOneCardArray.goalSeconds,
        update: true
      }
    })

    dialogRef.afterClosed().subscribe(updateCard => {
      if (updateCard) {
        this.dashBoardService.updateEvent(eventId, updateCard)
          .subscribe(() => this.getMyEvents())
      }
    })

  }

  ngOnInit() {
    this.getAllEvents()
  }
  getAllEvents() {
    this.dashBoardService.getAllEvents().subscribe(returnedData => {
      this.events = returnedData
      this.myEventsSelected = false;
    })
  }

  getMyEvents() {
    this.dashBoardService.getMyEvents().subscribe(returnedData => {
      this.events = returnedData
      this.myEventsSelected = true;
    })
  }

  onUpdate(eventId) {
    this.updateDialog(eventId)
  }

  onDelete(eventId) {
    this.dashBoardService.deleteEvent(eventId)
      .subscribe(() => this.getMyEvents())
  }


}


