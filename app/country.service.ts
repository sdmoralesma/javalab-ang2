import {Injectable} from "angular2/core";

@Injectable()
export class CountryService {

    constructor() {
        console.log("CountryService running")
    }

    getCountries() {
        console.log("get Countries");

/*
         return this.http.get('assets/json/countries.json')
         .toPromise()
         .then(res => <any[]> res.json().data)
         .then(data => {
         return data;
         });
    */


        return [
            {"name": "Sri Lanka", "code": "LK"},
            {"name": "Sudan", "code": "SD"},
            {"name": "Suriname", "code": "SR"},
            {"name": "Svalbard and Jan Mayen", "code": "SJ"},
            {"name": "Swaziland", "code": "SZ"},
            {"name": "Sweden", "code": "SE"},
            {"name": "Switzerland", "code": "CH"}
        ]

    }
}
