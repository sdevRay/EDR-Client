import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { StatCard } from '../models/StatCard';
import { Observable } from '../../../node_modules/rxjs';
import { EventCard } from "../models/EventCard";

const baseURL: string = "http://localhost:3000";

@Injectable()
export class DashboardService {

    constructor(private http: HttpClient, private router: Router){  }

    getAllCards(): Observable<StatCard[]>{
        return this.http.get<StatCard[]>(`${baseURL}/stat/getall`)
    }

    getOneCard(statId): Observable<StatCard[]>{
        return this.http.get<StatCard[]>(`${baseURL}/stat/getone/${statId}`)
    }

    getAllEvents(): Observable<EventCard[]>{
        return this.http.get<EventCard[]>(`${baseURL}/event/allevents`)
    }

    getMyEvents(): Observable<EventCard[]>{
        return this.http.get<EventCard[]>(`${baseURL}/event/myevents`)
    }

    postNewCard(newCard) {
        return this.http.post<any>(`${baseURL}/stat/create`, newCard)
    }

    updateCard(statId, updateCard){
        return this.http.put<any>(`${baseURL}/stat/update/${statId}`, updateCard)
    }
    
    deleteCard(statId){
        return this.http.delete(`${baseURL}/stat/delete/${statId}`)
    }

}