import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CountryService {

    private countriesURL = "assets/json/countries.json";

    constructor(private http:Http) {
    }

    getCountries() {
        return this.http.get(this.countriesURL)
            .map(res => <any[]> res.json().data)
            //.do(data => console.log(data)) // eyeball results in the console
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
