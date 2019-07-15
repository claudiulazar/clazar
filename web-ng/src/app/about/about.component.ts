import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    count = 0;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    accessLogin() {
        if (this.count == 10) {
            this.router.navigate(['/login']);
        }
        this.count++;
    }

}
