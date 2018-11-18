import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmojiLikeComponent} from './emoji-like/emoji-like.component';
import {EmojiDelComponent} from './emoji-del/emoji-del.component';
import {EmojiAllComponent} from './emoji-all/emoji-all.component';

const routes: Routes = [
    {path: 'all', component: EmojiAllComponent},
    {path: 'like', component: EmojiLikeComponent},
    {path: 'del', component: EmojiDelComponent},
    {path: '', redirectTo: '/all', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}