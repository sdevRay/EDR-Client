import { Component, OnInit, Inject } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { MAT_DIALOG_DATA } from '../../../../node_modules/@angular/material';
import { EventCard } from '../../models/EventCard';
import { StatCard } from '../../models/StatCard';

@Component({
  selector: 'app-plan-modal',
  templateUrl: './plan-modal.component.html',
  styleUrls: ['./plan-modal.component.css']
})
export class PlanModalComponent implements OnInit {
  
  constructor(private dashboardService: DashboardService, @Inject(MAT_DIALOG_DATA) public planCardArray: EventCard) { }
  
    public statCard: StatCard[] = [];
    public eventCard: EventCard[] = [];

  ngOnInit() {
    this.getCards();
  }

  getCards(): void {
    this.dashboardService.getAllCards().subscribe(returnedData => {
      this.calculateData(this.planCardArray, returnedData)
    });
  }

  calculateData(planCardArray, returnedData) {

    for (let card of returnedData) {
      if(card.discipline == planCardArray.eventType){
        this.statCard = card;
        this.eventCard = planCardArray

        console.log(this.eventCard)
        console.log(this.statCard)
      }
    }

  }
}
