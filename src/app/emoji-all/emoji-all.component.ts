import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';

@Component({
    selector: 'app-emoji-all',
    templateUrl: './emoji-all.component.html',
    styleUrls: ['./emoji-all.component.scss']
})
export class EmojiAllComponent implements OnInit {
    listLike: object;
    list: object;

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
        this.list = this.httpService.listAll;
        this.listLike = this.httpService.listLike;
        console.log('this EmojiAllComponent OnInit');
    }
}
