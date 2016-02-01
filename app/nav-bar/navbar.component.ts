import {Component, ElementRef, OnInit} from "angular2/core";
//import {Rectangle, Ruler}  from "angular2/src/platform/browser/ruler";

//import {Ruler, Rectangle} from "https://raw.githubusercontent.com/angular/angular/master/modules/angular2/src/platform/browser/ruler.ts";
import * as browser from "angular2/platform/browser";


@Component({
    selector: 'nav-bar',
    templateUrl: './app/nav-bar/nav-bar.html',
    providers: [ElementRef]
})
export class NavBarComponent {
    //height:number;
    element:ElementRef;
    ruler:any;
    rect:any;

    constructor(element:ElementRef) {
        this.element = element;
        console.log("this.element", this.element);

        var domAdapter = new browser.BrowserDomAdapter();
        console.log("domAdapter", domAdapter);



            //new Ruler(domAdapter);
        this.ruler = null;
        console.log("this.ruler", this.ruler);

        this.rect = {};
        console.log("this.rect", this.rect);
    }

    ngOnInit() {
        //var vm = this;
        //var measure = this.ruler.measure(this.element);
        //measure.then((rect) => {
        //    console.log('Rect', rect);
        //    vm.rect = rect;
        //});
    }

    onResize(rect:any) {
        //console.log("this.navBar.height.INNER=", this.height);
        console.log("rect.height", rect.height);
    }
}