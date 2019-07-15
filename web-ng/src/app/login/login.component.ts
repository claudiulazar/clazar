import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    email: string = '';
    password: string = '';
    error = false;

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    async login() {
        if (this.email && this.password) {
            const result =  await this.authenticationService.login(this.email, this.password).catch(
                error => {
                    this.error = true;
                    return;
                }
            );
            if (result) {
                this.router.navigate(['/admin']);
            }
        }
    }
}
