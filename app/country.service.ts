import {Http} from "angular2/http";
import {Injectable} from "angular2/core";

@Injectable()
export class CountryService {

    constructor(private http:Http) {
        console.log("CountryService running")
    }

    getCountries() {
        return this.http.get('assets/json/countries.json')
            .toPromise()
            .then(res => <any[]> res.json().data)
            .then(data => {
                return data;
            });
    }
}
