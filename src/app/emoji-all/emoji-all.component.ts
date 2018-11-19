import {Component, Input, OnInit} from '@angular/core';
import {Emoji} from '../emoji';
import {HttpService} from '../http.service';

@Component({
    selector: 'app-emoji-all',
    templateUrl: './emoji-all.component.html',
    styleUrls: ['./emoji-all.component.scss']
})
export class EmojiAllComponent implements OnInit {
    state: string = 'all';
    list: Emoji;

    constructor(private service: HttpService) {
    }

    ngOnInit() {
        this.list = this.service.listAll;
    }

}
