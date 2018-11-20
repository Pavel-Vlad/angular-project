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
    @Input() listLike: Emoji;
    @Input() showLikeButton = true;
    @Input() textButton = 'Удалить';
    @Input() state: string;

    srcIcon = 'assets/icons/ic_star_outline_128_28865.png';
    srcIconLike = 'assets/icons/ic_star_128_28867.png';

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
    }

    setLike(key, value) {
        if (this.listLike[key]) {
            delete this.listLike[key];
        } else {
            this.httpService.addListLike(key, value);
        }
    }

    delFunc(k, v) {
        if (this.state === 'del') {
            this.httpService.recovEmoji(k, v);
        } else {
            this.httpService.addListDel(k, v);
        }
    }
}
