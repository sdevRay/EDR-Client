import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { FitnessModalComponent } from '../fitness-modal/fitness-modal.component';
import { DashboardService } from "../../services/dashboard.service"

@Component({
  selector: 'app-base-fitness',
  templateUrl: './base-fitness.component.html',
  styleUrls: ['./base-fitness.component.css']
})
export class BaseFitnessComponent implements OnInit {

  constructor(public dialog: MatDialog, private dashboardService: DashboardService) { }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig;
    dialogConfig.data = {
      date: '',
      discipline: '',
      measurement: '',
      unit: '',
      currentDistance: Number,
      currentHours: Number,
      currentMinutes: Number,
      currentSeconds: Number,
    }
    let dialogRef = this.dialog.open(FitnessModalComponent, {
      height: '40em',
      width: '40em',
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dashboardService.postNewCard(result)
        this.getCards();
      }
    })
  }

  ngOnInit() {
    this.getCards();
  }

  public stats = [];

  getCards(){
    this.dashboardService.getAllCards().subscribe(returnedData => {
      this.stats = returnedData
      console.log(this.stats)
    });
  }

}
