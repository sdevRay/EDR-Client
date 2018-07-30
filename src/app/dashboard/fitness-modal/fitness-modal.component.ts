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

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<FitnessModalComponent>, @Inject(MAT_DIALOG_DATA) public data: StatCard) {
    if(data.update){
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
      unit: new FormControl,
      currentDistance: new FormControl
    })
  }

  updateForm(): void {
    this.baseFitnessForm = this.fb.group({
      date: new FormControl(this.data.date),
      discipline: new FormControl(this.data.discipline),
      unit: new FormControl(this.data.unit),
      currentDistance: new FormControl(this.data.currentDistance)
    })
  }

  onSubmit():void {
    this.dialogRef.close(this.baseFitnessForm.value);
  }

  close():void {
    this.dialogRef.close()
  }

}
