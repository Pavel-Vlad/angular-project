import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Emoji} from './emoji';


@Injectable({
    providedIn: 'root'
})

export class HttpService {
    listAll: Emoji = {};
    listLike: Emoji = {};
    listDel: Emoji = {};

    constructor(private http: HttpClient) {
    }

    getData(): Observable<Emoji> {
        return this.http.get<Emoji>('https://api.github.com/emojis').pipe(
            map((data) => {
                return data;
            })
        );
    }

    addListLike(k, v) {
        this.listLike[k] = v;
    }

    addListDel(k, v) {
        this.listDel[k] = v;
        delete this.listAll[k];
        delete this.listLike[k];
    }

    recovEmoji(k, v) {
        this.listAll[k] = v;
        delete this.listDel[k];
    }
}
