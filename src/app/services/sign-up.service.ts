import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const baseURL: string = "http://localhost:3000";

@Injectable()
export class SignupService {

    constructor(private http: HttpClient, private router: Router) { }

    register(signupInfo) {
        return this.http.post<any>(`${baseURL}/user/create`, signupInfo)
    }

    login(loginInfo) {
        return this.http.post<any>(`${baseURL}/user/signin`, loginInfo)
            .subscribe((res) => {
                localStorage.setItem("token", res.sessionToken)
                this.router.navigate(["/dashboard"])
            },
                err => console.log(err)
            );

    }

    logoutUser() {
        localStorage.removeItem('token')
        this.router.navigate(['/landingpage'])
    }

    getToken() {
        return localStorage.getItem('token')
    }

    loggedIn() {
        return !!localStorage.getItem('token')
    }

}