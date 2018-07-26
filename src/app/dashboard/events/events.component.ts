import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EventModalComponent } from '../event-modal/event-modal.component';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(EventModalComponent, {
      height: '40em',
      width: '40em'
    })
  }

  ngOnInit() {

  }
}


