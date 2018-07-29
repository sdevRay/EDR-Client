import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FitnessModalComponent } from '../fitness-modal/fitness-modal.component';
import { DashboardService } from "../../services/dashboard.service";

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
      height: '25em',
      width: '30em',
      data: {
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
      height: '25em',
      width: '30em',
      data: {
        date: updateOneCardArray.date,
        discipline: updateOneCardArray.discipline,
        unit: updateOneCardArray.unit,
        currentDistance: updateOneCardArray.currentDistance,
        update: true
      }
    })

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
