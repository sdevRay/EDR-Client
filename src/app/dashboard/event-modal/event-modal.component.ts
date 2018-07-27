import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventCard } from '../../models/EventCard';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent implements OnInit {

  private eventForm: FormGroup
  timeSelected: boolean = false

  constructor(private form: FormBuilder, public dialogRef: MatDialogRef<EventModalComponent>, @Inject(MAT_DIALOG_DATA) public data: EventCard) { 
    
    if(data.update){
      if(data.measurement == "Time"){
        this.timeSelected = true;
      }
      this.updateForm()
    } else {
      this.createForm()
    }
  }

  ngOnInit() {
  }

  createForm(): void {
    this.eventForm = this.form.group({
      eventName: new FormControl,
      eventCity: new FormControl,
      eventState: new FormControl,
      eventDate: new FormControl,
      eventType: new FormControl,
      unit: new FormControl,
      eventDistance: new FormControl,
      goalHours: new FormControl,
      goalMinutes: new FormControl,
      goalSeconds: new FormControl,
      measurement: new FormControl

    })
  }
  
  updateForm(): void {
    this.eventForm = this.form.group({
      eventName: new FormControl(this.data.eventName),
      eventCity: new FormControl(this.data.eventCity),
      eventState: new FormControl(this.data.eventState),
      eventDate: new FormControl(this.data.eventDate),
      eventType: new FormControl(this.data.eventType),
      unit: new FormControl(this.data.unit),
      eventDistance: new FormControl(this.data.eventDistance),
      goalHours: new FormControl(this.data.goalHours),
      goalMinutes: new FormControl(this.data.goalMinutes),
      goalSeconds: new FormControl(this.data.goalSeconds),
      measurement: new FormControl(this.data.measurement)
    })
  }
  
  onSubmit():void {
    this.dialogRef.close(this.eventForm.value);
  }

  close():void {
    this.dialogRef.close()
  }

  time() {
    this.timeSelected = true
  }

  distance() {
    this.timeSelected = false
  }


}
