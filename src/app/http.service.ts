import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    listAll: object;
    listLike: object = {};
    listDel: object = {};

    constructor(private http: HttpClient) {
    }

    getData() {
        return this.http.get('https://api.github.com/emojis');
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
