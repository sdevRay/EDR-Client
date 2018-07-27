import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { FitnessModalComponent } from '../fitness-modal/fitness-modal.component';
import { DashboardService } from "../../services/dashboard.service"
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-base-fitness',
  templateUrl: './base-fitness.component.html',
  styleUrls: ['./base-fitness.component.css']
})
export class BaseFitnessComponent implements OnInit {

  constructor(public dialog: MatDialog, private dashboardService: DashboardService) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(FitnessModalComponent, {
      height: '40em',
      width: '40em',
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dashboardService.postNewCard(result)
          .subscribe(() => this.getCards())
      }
    })
  }

  updateDialog(statId): void {
    let dialogRef = this.dialog.open(FitnessModalComponent, {
      height: '40em',
      width: '40em',
    })

    dialogRef.afterOpen().subscribe(() => console.log("HIHIHI"))

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

  public stats = [];

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
