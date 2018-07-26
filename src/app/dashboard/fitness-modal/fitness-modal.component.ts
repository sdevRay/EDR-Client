import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../node_modules/@angular/material';

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
    this.baseFitnessForm.valueChanges.subscribe(console.log)
  }

  createForm(): void {
    this.baseFitnessForm = this.fb.group({
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

  onSubmit():void {
    console.log(this.baseFitnessForm.value)
  }

  close():void {
    this.dialogRef.close()
  }

}
