import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EventModalComponent } from '../event-modal/event-modal.component';
import { DashboardService } from '../../services/dashboard.service'
import { PlanModalComponent } from '../plan-modal/plan-modal.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public events = [];
  public oneCardArray: any;
  myEventsSelected: boolean = false;

  constructor(private dialog: MatDialog, private dashBoardService: DashboardService) {
  }
  

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

  createPlanDialog(planId):void {
    this.dashBoardService.getOneEvent(planId)
    .subscribe(returnedData => {
      this.oneCardArray = returnedData;

      this.launchPlanDialog(this.oneCardArray)
    })
  }

  launchPlanDialog(planCardArray){
    let dialogRef = this.dialog.open(PlanModalComponent, {
      height: '40em',
      width: '40em',
      data: {
        eventDate: planCardArray.eventDate,
        eventName: planCardArray.eventName,
        eventCity: planCardArray.eventCity,
        eventState: planCardArray.eventState,
        eventType: planCardArray.eventType,
        unit: planCardArray.unit,
        eventDistance: planCardArray.eventDistance,
        update: true
      }
    })
  }

  updateDialog(eventId): void {
    this.dashBoardService.getOneEvent(eventId)
    .subscribe(returnedData => {
      this.oneCardArray = returnedData;
      this.launchUpdateDialog(eventId, this.oneCardArray)
    })
  }

  launchUpdateDialog(eventId, oneCardArray){
    let dialogRef = this.dialog.open(EventModalComponent, {
      height: '40em',
      width: '40em',
      data: {
        eventDate: oneCardArray.eventDate,
        eventName: oneCardArray.eventName,
        eventCity: oneCardArray.eventCity,
        eventState: oneCardArray.eventState,
        eventType: oneCardArray.eventType,
        unit: oneCardArray.unit,
        eventDistance: oneCardArray.eventDistance,
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

  onCreatePlan(planId){
    this.createPlanDialog(planId)
  }

  onDelete(eventId) {
    this.dashBoardService.deleteEvent(eventId)
      .subscribe(() => this.getMyEvents())
  }

}


