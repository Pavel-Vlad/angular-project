import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmojiLikeComponent} from './emoji-like/emoji-like.component';
import {EmojiDelComponent} from './emoji-del/emoji-del.component';
import {EmojiAllComponent} from './emoji-all/emoji-all.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
    {path: 'all', component: EmojiAllComponent, data: {title: 'Все'}/*, resolve: {allList: httpService}*/},
    {path: 'like', component: EmojiLikeComponent, data: {title: 'Любимые'}},
    {path: 'del', component: EmojiDelComponent, data: {title: 'Удаленные'}},
    {path: '', redirectTo: '/all', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
