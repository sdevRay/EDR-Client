import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { StatCard } from '../models/StatCard';
import { Observable } from '../../../node_modules/rxjs';
import { EventCard } from "../models/EventCard";

const baseURL: string = "http://localhost:3000";

@Injectable()
export class DashboardService {

    constructor(private http: HttpClient, private rosuter: Router){  }

    getAllCards(): Observable<StatCard[]>{
        return this.http.get<StatCard[]>(`${baseURL}/stat/getall`)
    }

    getAllEvents(): Observable<EventCard[]>{
        return this.http.get<EventCard[]>(`${baseURL}/event/allevents`)
    }

    getMyEvents(): Observable<EventCard[]>{
        return this.http.get<EventCard[]>(`${baseURL}/event/myevents`)
    }


    postNewCard(newCard) {
        return this.http.post<any>(`${baseURL}/stat/create`, newCard)
        .subscribe()
    }

    postNewEvent(newEvent) {
        return this.http.post<any>(`${baseURL}/event/create`, newEvent)
        .subscribe()
    }
    
}