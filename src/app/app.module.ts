import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmojiListComponent} from './emoji-list/emoji-list.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './http.service';

@NgModule({
    declarations: [
        AppComponent,
        EmojiListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
