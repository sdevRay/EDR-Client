import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-fitness-modal',
  templateUrl: './fitness-modal.component.html',
  styleUrls: ['./fitness-modal.component.css']
})

// export class SelectedValue {
//   selected = ''
// }

export class FitnessModalComponent implements OnInit {

  private baseFitnessForm: FormGroup;


  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<FitnessModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.createForm()
    
    
    
  }
  
  ngOnInit() {
    
  }
  timeSelected: boolean = false
  
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

  onSubmit():void {
    this.dialogRef.close(this.baseFitnessForm.value);
  }

  close():void {
    this.dialogRef.close()
  }

  time() {
    this.timeSelected = true
    console.log(this.timeSelected)

  }

  distance() {
    this.timeSelected =false
  }

}
