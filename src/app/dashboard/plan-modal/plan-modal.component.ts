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
  
  public statCard;
  public eventCard;
  distArray = [];
  dateArray = [];
  
    
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
        let deltaDist = this.eventCard.eventDistance - this.statCard.currentDistance
        if (this.statCard.unit == 'Kilometers' && this.eventCard.unit == 'Miles') {
          deltaDist = this.eventCard.eventDistance*1.609 - this.statCard.currentDistance
          console.log ('stat = KM, event = miles')
        } else if (this.statCard.unit == 'Miles'  && this.eventCard.unit == 'Kilometers'){
          deltaDist = this.eventCard.eventDistance*.621 - this.statCard.currentDistance
          console.log ( 'stat = miles,  event = KM')
        } 


        let deltaDate = Number(new Date(this.eventCard.eventDate)) - Number(new Date(this.statCard.date))
        let daysBetween = deltaDate / (1000*60*60*24)
        let intervals = Math.round(daysBetween / 14)
        let distPerInt = Math.round((deltaDist / intervals) * 10)/10
        
        
        
        
        
        
        for (let x = 1; x < intervals ; x++) {
          let distInt = this.statCard.currentDistance
          distInt = Math.round((x*distPerInt + distInt) * 10)/10
          this.distArray.push(distInt)
          let currentDate = new Date(this.statCard.date)
          currentDate.setDate(currentDate.getDate() + 14*x)
          this.dateArray.push(currentDate)

        }

        console.log(this.dateArray)
        console.log(this.distArray)
        
       
      }
    }

  }
}
