import { Component, OnInit } from '@angular/core';
import { DashboardService } from "../../services/dashboard.service"

@Component({
  selector: 'app-base-fitness',
  templateUrl: './base-fitness.component.html',
  styleUrls: ['./base-fitness.component.css']
})
export class BaseFitnessComponent implements OnInit {

  public stats = [];

  constructor(private dashboardService: DashboardService) { 
    
  }
  
  ngOnInit() {
    this.dashboardService.getAllCards().subscribe(returnedData => {
      this.stats = returnedData
      console.log(this.stats)
    });

  }

}
