import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Все';

    constructor(private httpService: HttpService,
                private titleService: Title) {
    }

    ngOnInit() {
        this.httpService.getData().subscribe(
            data => {
                this.httpService.listAll = data;
            }
        );
        this.titleService.setTitle(this.title);
    }

    setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
        this.title = newTitle;
    }
}
