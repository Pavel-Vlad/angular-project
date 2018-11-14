import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    config = [];

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
        this.httpService
            .getData()
            .subscribe((data: any) => {
                console.log(this.config = data);
            });
    }
}
