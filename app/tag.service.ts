import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TagService {

    private tagsURL = "assets/json/taglist.json";

    constructor(private http:Http) {
    }

    getTags() {
        return this.http.get(this.tagsURL)
            .map(res => <string[]> res.json().data)
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
