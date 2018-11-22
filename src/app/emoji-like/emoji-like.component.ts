import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';

@Component({
    selector: 'app-emoji-like',
    templateUrl: './emoji-like.component.html',
    styleUrls: ['./emoji-like.component.scss']
})
export class EmojiLikeComponent implements OnInit {
    list: object;

    constructor(private service: HttpService) {
    }

    ngOnInit() {
        this.list = this.service.listLike;
    }
}
