import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

/*import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

interface User {
    name: string;
    link: string;
}*/

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) {
    }

    getData()/*: Observable<User> */ {
        return this.http.get/*<User>*/('https://api.github.com/emojis')/* .pipe(map(data => {return data;}))*/;
    }
}
