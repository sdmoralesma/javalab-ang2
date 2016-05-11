import {Component, OnInit} from "@angular/core";
import {AutoComplete, Menubar, Button, SplitButton, SplitButtonItem} from "primeng/primeng";

@Component({
    selector: 'nav-bar',
    templateUrl: './app/nav-bar/nav-bar.html',
    directives: [AutoComplete, Menubar, Button, SplitButton, SplitButtonItem]
})
export class NavBarComponent implements OnInit {
    height:number;

    ngOnInit() {
        var vm = this;
        this.text = "my testing text";
    }

    text:string;

    results:string[];

    search(event) {
        this.results = ["asdf", "qwerty"];
    }

    handleDropdown(event) {
        //event.query = current value in input field
    }

    download() {
        console.log("download clicked!");
    }
}