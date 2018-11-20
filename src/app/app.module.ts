import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmojiListComponent} from './emoji-list/emoji-list.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './http.service';
import { EmojiLikeComponent } from './emoji-like/emoji-like.component';
import { EmojiDelComponent } from './emoji-del/emoji-del.component';
import { EmojiAllComponent } from './emoji-all/emoji-all.component';

@NgModule({
    declarations: [
        AppComponent,
        EmojiListComponent,
        EmojiLikeComponent,
        EmojiDelComponent,
        EmojiAllComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [HttpService, Title],
    bootstrap: [AppComponent]
})
export class AppModule {
}
