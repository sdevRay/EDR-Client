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

    getOneEvent(eventId): Observable<EventCard[]>{
        return this.http.get<EventCard[]>(`${baseURL}/event/getone/${eventId}`)
    }

    postNewCard(newCard) {
        return this.http.post<any>(`${baseURL}/stat/create`, newCard)
    }

    postNewEvent(newEvent){
        return this.http.post<any>(`${baseURL}/event/create`, newEvent)
    }

    updateCard(statId, updateCard){
        return this.http.put<any>(`${baseURL}/stat/update/${statId}`, updateCard)
    }
    
    updateEvent(eventId, updateEvent) {
        return this.http.put<any>(`${baseURL}/event/update/${eventId}`, updateEvent)
    }

    deleteCard(statId){
        return this.http.delete(`${baseURL}/stat/delete/${statId}`)
    }

    deleteEvent(eventId) {
        return this.http.delete(`${baseURL}/event/delete/${eventId}`)
    }
}