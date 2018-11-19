import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Emoji} from './emoji';


@Injectable({
    providedIn: 'root'
})
export class HttpService {
    listAll: Emoji[] = [];

    constructor(private http: HttpClient) {
    }

    getData(): Observable<Emoji[]> {
        return this.http.get('https://api.github.com/emojis').pipe(
            map((data: any) => {
                return data;
            })
        );
    }
}
