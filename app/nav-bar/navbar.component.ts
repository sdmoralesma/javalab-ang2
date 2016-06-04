import {Component} from "@angular/core";
import {AutoComplete, Button, SplitButton, SplitButtonItem, Toolbar} from "primeng/primeng";

@Component({
    selector: 'nav-bar',
    templateUrl: './app/nav-bar/nav-bar.html',
    styleUrls: ['./app/nav-bar/nav-bar.css'],
    directives: [AutoComplete, Toolbar, Button, SplitButton, SplitButtonItem]
})
export class NavBarComponent {
    selected:string;
    suggestions:string[];
    options:string[];

    search(event) {
        let query = event.query;
        this.suggestions = this.filterOptions(query, this.options);
    }

    private filterOptions(query, countries:string[]):string[] {
        let filtered:any[] = [];
        for (let i = 0; i < countries.length; i++) {
            let country = countries[i];
            if (country.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        return filtered;
    }

    download() {
        alert("Downloading project!");
    }

    handleDropdownClick($event) {
        this.suggestions = this.options;
    }

    runCode() {
        alert("running: " + this.selected);
    }

    testCode() {
        alert("testing: " + this.selected);
    }
}