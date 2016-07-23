import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {AppComponent} from "./app/app.component";

@Component({
    selector: 'javalab-app',
    templateUrl: 'app/main.html',
    directives: [ROUTER_DIRECTIVES],
    precompile: [AppComponent]
})
export class MainComponent {

}
