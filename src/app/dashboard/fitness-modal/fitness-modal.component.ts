import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StatCard } from '../../models/StatCard';

@Component({
  selector: 'app-fitness-modal',
  templateUrl: './fitness-modal.component.html',
  styleUrls: ['./fitness-modal.component.css']
})

export class FitnessModalComponent implements OnInit {

  private baseFitnessForm: FormGroup;
  timeSelected: boolean = false

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<FitnessModalComponent>, @Inject(MAT_DIALOG_DATA) public data: StatCard) {
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
    this.baseFitnessForm = this.fb.group({
      date: new FormControl,
      discipline: new FormControl,
      measurement: new FormControl,
      unit: new FormControl,
      currentDistance: new FormControl,
      currentHours: new FormControl,
      currentMinutes: new FormControl,
      currentSeconds: new FormControl
    })
  }

  updateForm(): void {
    this.baseFitnessForm = this.fb.group({
      date: new FormControl(this.data.date),
      discipline: new FormControl(this.data.discipline),
      measurement: new FormControl(this.data.measurement),
      unit: new FormControl(this.data.unit),
      currentDistance: new FormControl(this.data.currentDistance),
      currentHours: new FormControl(this.data.currentHours),
      currentMinutes: new FormControl(this.data.currentMinutes),
      currentSeconds: new FormControl(this.data.currentSeconds)
    })
  }

  onSubmit():void {
    this.dialogRef.close(this.baseFitnessForm.value);
  }

  close():void {
    this.dialogRef.close()
  }

  time() {
    this.timeSelected = true
  }

  distance() {
    this.timeSelected =false
  }

}
