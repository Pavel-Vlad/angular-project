import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Emoji} from '../emoji';

@Component({
    selector: 'app-emoji-list',
    templateUrl: './emoji-list.component.html',
    styleUrls: ['./emoji-list.component.scss']
})
export class EmojiListComponent implements OnInit {
    @Input() list: Emoji;
    @Input() showLikeButton = true;
    @Input() textButton = 'Удалить';
    @Input() state: string;

    srcIcon = 'assets/icons/ic_star_outline_128_28865.png';

    constructor(private service: HttpService) {
    }

    ngOnInit() {
    }

    setLike(key, value) {
        this.service.addListLike(key, value);
        this.srcIcon = 'assets/icons/ic_star_128_28867.png';
    }

    delFunc(k, v) {
        if (this.state === 'del') {
            this.service.recovEmoji(k, v);
        } else {
            this.service.addListDel(k, v);
        }
    }
}
