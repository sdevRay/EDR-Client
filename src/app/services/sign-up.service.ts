import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

import { User } from "../models/user"
import { Token } from "../models/token"

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

const baseURL: string = "http://localhost:3000";

@Injectable()
export class SignupService {

    constructor(private http: HttpClient, private router: Router){  }

    register(userData: User){
        return this.http.post(`${baseURL}/user/create`, userData, httpOptions)     
    }

    login(loginInfo) {
        return this.http.post(`${baseURL}/user/signin`, loginInfo)
        .subscribe((token: Token) => {
            localStorage.setItem("token", token.sessionToken)
            this.router.navigate(["/dashboard"])
        })
    }
}