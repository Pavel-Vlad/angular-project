import {Component, Input, OnInit} from '@angular/core';
import {Emoji} from '../emoji';
import {AppComponent} from '../app.component';

@Component({
    selector: 'app-emoji-list',
    templateUrl: './emoji-list.component.html',
    styleUrls: ['./emoji-list.component.scss']
})
export class EmojiListComponent implements OnInit {
    constructor(public appComponent: AppComponent) {
    }

    ngOnInit() {
    }

}
