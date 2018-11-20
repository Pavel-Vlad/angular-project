import {Component, Input, OnInit} from '@angular/core';
import {Emoji} from '../emoji';
import {HttpService} from '../http.service';

@Component({
    selector: 'app-emoji-all',
    templateUrl: './emoji-all.component.html',
    styleUrls: ['./emoji-all.component.scss']
})
export class EmojiAllComponent implements OnInit {
    listLike: Emoji;
    list: Emoji;

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
        this.list = this.httpService.listAll;
        this.listLike = this.httpService.listLike;
        console.log('this EmojiAllComponent OnInit');
    }
}
