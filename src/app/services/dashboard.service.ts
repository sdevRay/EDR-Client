import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { StatCard } from '../models/StatCard';
import { Observable } from 'rxjs';

const baseURL: string = "http://localhost:3000";

@Injectable()
export class DashboardService {

    constructor(private http: HttpClient, private rosuter: Router){  }

    getAllCards(): Observable<StatCard[]>{
        return this.http.get<StatCard[]>(`${baseURL}/stat/getall`)
    }

    postNewCard(newCard) {
        return this.http.post<any>(`${baseURL}/stat/create`, newCard)
        .subscribe()
    }
    
}