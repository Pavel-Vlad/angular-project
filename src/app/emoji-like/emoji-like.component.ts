import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Emoji} from '../emoji';

@Component({
    selector: 'app-emoji-like',
    templateUrl: './emoji-like.component.html',
    styleUrls: ['./emoji-like.component.scss']
})
export class EmojiLikeComponent implements OnInit {
    list: Emoji;

    constructor(private service: HttpService) {
    }

    ngOnInit() {
        this.list = this.service.listLike;
    }
}
