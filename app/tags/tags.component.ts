import {Component} from "@angular/core";
import {AutoComplete, Panel} from "primeng/primeng";
import {CountryService} from "../country.service";

@Component({
    selector: 'tags',
    templateUrl: './app/tags/tags.html',
    directives: [AutoComplete, Panel]
})
export class TagsComponent {

    countries:any[];
    filteredCountriesMultiple:any[];
    errorMessage:string;

    constructor(private countryService:CountryService) {
    }

    filterCountryMultiple(event) {
        let query = event.query;
        this.countryService.getCountries()
            .subscribe(
                countries => this.filteredCountriesMultiple = this.filterCountry(query, countries),
                error => this.errorMessage = <any>error);
    }

    filterCountry(query, countries:any[]):any[] {
        let filtered:any[] = [];
        for (let i = 0; i < countries.length; i++) {
            let country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        return filtered;
    }

}