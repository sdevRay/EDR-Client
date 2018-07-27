import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FitnessModalComponent } from '../fitness-modal/fitness-modal.component';
import { DashboardService } from "../../services/dashboard.service"
import { Observable } from '../../../../node_modules/rxjs';
import { StatCard } from '../../models/StatCard';

@Component({
  selector: 'app-base-fitness',
  templateUrl: './base-fitness.component.html',
  styleUrls: ['./base-fitness.component.css']
})
export class BaseFitnessComponent implements OnInit {

  public stats = [];
  public updateOneCardArray: any;

  constructor(public dialog: MatDialog, private dashboardService: DashboardService) { }

  openDialog(): void {

    let dialogRef = this.dialog.open(FitnessModalComponent, {
      height: '40em',
      width: '40em',
      data: {
        date: "",
        discipline: "",
        measurement: "",
        unit: "",
        currentDistance: "",
        currentHours: "",
        currentMinutes: "",
        currentSeconds: "",
        update: false
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dashboardService.postNewCard(result)
          .subscribe(() => this.getCards())
      }
    })
  }

  updateDialog(statId): void {
    this.dashboardService.getOneCard(statId).subscribe(returnedData => {
      this.updateOneCardArray = returnedData;
      this.launchUpdateDialog(statId, this.updateOneCardArray)
    })
  }

  launchUpdateDialog(statId, updateOneCardArray){

    let dialogRef = this.dialog.open(FitnessModalComponent, {
      height: '40em',
      width: '40em',
      data: {
        date: updateOneCardArray.date,
        discipline: updateOneCardArray.discipline,
        measurement: updateOneCardArray.measurement,
        unit: updateOneCardArray.unit,
        currentDistance: updateOneCardArray.currentDistance,
        currentHours: updateOneCardArray.currentHours,
        currentMinutes: updateOneCardArray.currentMinutes,
        currentSeconds: updateOneCardArray.currentSeconds,
        update: true
      }
    })

    // dialogRef.afterOpen().subscribe(() => console.log("HIHIHI"))

    dialogRef.afterClosed().subscribe(updateCard => {
      if (updateCard) {
        this.dashboardService.updateCard(statId, updateCard)
          .subscribe(() => this.getCards())
      }
    })
  }

  ngOnInit() {
    this.getCards();
  }

  getCards(): void {
    this.dashboardService.getAllCards().subscribe(returnedData => {
      this.stats = returnedData
      console.log(this.stats)
    });
  }

  onUpdate(statId) {
    this.updateDialog(statId);
  }

  onDelete(statId) {
    this.dashboardService.deleteCard(statId)
      .subscribe(() => this.getCards())
  }

}
