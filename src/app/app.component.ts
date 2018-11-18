import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';
import {Emoji} from './emoji';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    emojis: Emoji[] = [];

    constructor(private httpService: HttpService) {
    }

    ngOnInit(): void {
        this.httpService.getData()
            .subscribe((data: any) => {
                console.log(this.emojis = data);
                console.log(typeof this.emojis);
                console.log(this.emojis.length);
            });
    }
}
