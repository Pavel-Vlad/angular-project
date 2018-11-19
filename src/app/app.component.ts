import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';
import {Emoji} from './emoji';
import {Router, Event, NavigationStart, ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {Observable} from 'rxjs';
import {filter, map, mergeMap} from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Angular';

    constructor(private httpService: HttpService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private titleService: Title) {
    }

    ngOnInit(): void {
        this.httpService.getListAll();
    }
}
