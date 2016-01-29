import {Component} from "angular2/core";

@Component({
    selector: 'nav-bar',
    templateUrl: './app/nav-bar/nav-bar.html'
})
export class NavBarComponent {
    height:number;

    onResize(event) {
        console.log("this.navBar.height.INNER=", this.height);
    }
}