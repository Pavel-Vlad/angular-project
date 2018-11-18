import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {Emoji} from './emoji';

@Injectable({
    providedIn: 'root'
})
export class ListService {
    emojis: Emoji[] = [];

    constructor(private httpService: HttpService) {
    }
    getAll(): void {
        this.httpService.getData()
            .subscribe((data: any) => {
                console.log(this.emojis = data);
                console.log(typeof this.emojis);
                console.log(this.emojis.length);
            });
    }
}
