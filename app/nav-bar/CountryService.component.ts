import {Http} from "angular2/http";
import {Injectable} from "angular2/core";

@Injectable()
export class CountryService {

    constructor(private http: Http) {}

    getCountries() {
        return this.http.get('showcase/resources/data/countries.json')
            .toPromise()
            .then(res => <any[]> res.json().data)
            .then(data => { return data; });
    }
}
