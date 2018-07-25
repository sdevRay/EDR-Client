import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
// import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';

@Injectable()
export class DashGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate() {
            
            if (!localStorage.getItem('token')) {
                this.router.navigate(['/landingpage']);
                return false
            } else {
                return true
            }
        };
    }
    // canActivate(): Observable<boolean> {
    //     return new Observable<boolean>((observer) => {
    //         if (!localStorage.getItem('token')) {
    //             this.router.navigate(['/landingpage']);
    //             return observer.next(false);
    //         } else {
    //             return observer.next(true);
    //         }
    //     });
    // }
