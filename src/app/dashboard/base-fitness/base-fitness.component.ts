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

  public isRunning: boolean = false;
  public isSwimming: boolean = false;
  public isCycling: boolean = false;

  // public setOneDiscipline: boolean[] = [this.isRunning, this.isSwimming, this.isCycling];

  constructor(public dialog: MatDialog, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getCards();
  }

  openDialog(): void {
    this.launchOpenDialog();
  }

  launchOpenDialog(): void {

    let dialogRef = this.dialog.open(FitnessModalComponent, {
      height: '25em',
      width: '30em',
      data: {
        update: false,
        isRunning: this.isRunning,
        isSwimming: this.isSwimming,
        isCycling: this.isCycling
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

  launchUpdateDialog(statId, updateOneCardArray) {

    let dialogRef = this.dialog.open(FitnessModalComponent, {
      height: '25em',
      width: '30em',
      data: {
        date: updateOneCardArray.date,
        discipline: updateOneCardArray.discipline,
        unit: updateOneCardArray.unit,
        currentDistance: updateOneCardArray.currentDistance,
        update: true,
        isRunning: this.isRunning,
        isSwimming: this.isSwimming,
        isCycling: this.isCycling
      }
    })

    dialogRef.afterClosed().subscribe(updateCard => {
      if (updateCard) {
        this.dashboardService.updateCard(statId, updateCard)
          .subscribe(() => this.getCards())
      }
    })
  }

  getCards(): void {
    this.dashboardService.getAllCards().subscribe(returnedData => {
      
      this.isRunning = false;
      this.isCycling = false;
      this.isSwimming = false;

      for (let data of returnedData) {
        if(data.discipline == "Running"){
          this.isRunning = true;
        } 
        if(data.discipline == "Cycling"){
          this.isCycling = true;
        } 
        if(data.discipline == "Swimming"){
          this.isSwimming = true;
        }
      }
      
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
