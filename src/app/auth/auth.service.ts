import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _userIsAuthenticated = true;

    constructor(private router: Router) {
    }


    get userIsAuthenticated(): boolean {
        return this._userIsAuthenticated;
    }

    login() {
        this._userIsAuthenticated = true;
        this.router.navigateByUrl('/places/tabs/discover')
    }

    logout() {
        this._userIsAuthenticated = false;
    }
}
