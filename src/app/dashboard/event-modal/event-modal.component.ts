import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent implements OnInit {

  private eventForm: FormGroup

  constructor(private form: FormBuilder) { 

    this.createForm()

  }



  ngOnInit() {
  }


  createForm(): void {
    this.eventForm = this.form.group({
      date: new FormControl,
      disipline: new FormControl,
      measurement: new FormControl,
      unit: new FormControl,
      currentDistance: new FormControl,
      currentHours: new FormControl,
      currentMinutes: new FormControl,
      currentSeconds: new FormControl

    })
  }
}
