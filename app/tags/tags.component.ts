import {Component} from "angular2/core";
import {AutoComplete} from "primeng/primeng";
import {CountryService} from "../country.service";

@Component({
    selector: 'tags',
    templateUrl: './app/tags/tags.html',
    directives: [AutoComplete],
    providers: [CountryService]
})
export class TagsComponent {

    countries:any[];

    filteredCountriesMultiple:any[];

    constructor(private countryService:CountryService) {
        console.log("countryService:", countryService);
    }

    filterCountryMultiple(event) {
        let query = event.query;
        this.countryService.getCountries().then(countries => {
            this.filteredCountriesMultiple = this.filterCountry(query, countries);
        });
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