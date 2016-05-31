import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CountryService {

    private countriesURL = "assets/json/countries.json";

    constructor(private http:Http) {
    }

    getCountries() {
        return this.http.get(this.countriesURL)
            .map(res => <any[]> res.json().data)
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
