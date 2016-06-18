import {Component} from "@angular/core";
import {AutoComplete, Button, SplitButton, SplitButtonItem, Toolbar} from "primeng/primeng";
import {FileNode} from "../common";

@Component({
    selector: 'nav-bar',
    templateUrl: './app/nav-bar/nav-bar.html',
    styleUrls: ['./app/nav-bar/nav-bar.css'],
    directives: [AutoComplete, Toolbar, Button, SplitButton, SplitButtonItem]
})
export class NavBarComponent {
    selected:FileNode;
    suggestions:FileNode[];
    options:FileNode[];

    search(event) {
        let query = event.query;
        this.suggestions = this.filterOptions(query, this.options);
    }

    private filterOptions(query, options:FileNode[]):FileNode[] {
        let filtered:any[] = [];
        for (let i = 0; i < options.length; i++) {
            let option = options[i];
            if (option.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(option);
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
        alert("running code");
    }

    testCode() {
        alert("testing: " + this.selected);
    }
}