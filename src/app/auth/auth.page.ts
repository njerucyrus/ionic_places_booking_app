import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {LoadingController} from '@ionic/angular';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
    private isLogin = true;
    constructor(private authService: AuthService, private loadingCtrl:LoadingController) {
    }

    ngOnInit() {
    }

    onLogin() {
        this.loadingCtrl.create({keyboardClose:true,message: "Authenticating please wait..."})
            .then(loadingEl=> {
                loadingEl.present()
                setTimeout(() => {
                    loadingEl.dismiss()
                    this.authService.login();
                }, 1500)
            })


    }

    onLoginSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        console.log(email, password);
        this.onLogin()
        if (this.isLogin) {
            //make login request
        } else {
            //make signup request
        }
    }

    onSwitchAuthMode() {
        this.isLogin = !this.isLogin
    }

}
