import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {Emoji} from './emoji';

@Injectable({
    providedIn: 'root'
})
export class ListService {
    allList: Emoji;
    listLike: Emoji;

    constructor(private httpService: HttpService) {
        this.httpService.getListAll();
    }



    addListLike(key, value) {
        /*if (this.listLike.length) {
            for (let i = 0; i <= this.listLike.length; i++) {
                if (this.listLike.includes([key])) {
                    return false;
                }
            }
        } else {
            this.listLike.push({name: key, link: value});
        }
        console.log(this.listLike);*/
    }
}
