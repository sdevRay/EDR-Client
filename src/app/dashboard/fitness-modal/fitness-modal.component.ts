import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms"

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

  constructor(private fb: FormBuilder) {
    this.createForm()
   }

  ngOnInit() {
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

}
