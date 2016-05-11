import {Component} from "@angular/core";
import {AutoComplete, Panel} from "primeng/primeng";
import {CountryService} from "../country.service";
import {HTTP_PROVIDERS} from "@angular/http";

@Component({
    selector: 'tags',
    templateUrl: './app/tags/tags.html',
    directives: [AutoComplete, Panel],
    providers: [HTTP_PROVIDERS, CountryService]
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
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
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