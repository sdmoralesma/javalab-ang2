import {Component, ElementRef, OnInit} from "angular2/core";
import {Ruler, Rectangle} from "angular2/src/platform/browser/ruler";
import * as browser from "angular2/platform/browser";


@Component({
    selector: 'nav-bar',
    templateUrl: './app/nav-bar/nav-bar.html',
    providers: [ElementRef]
})
export class NavBarComponent implements OnInit {
    height:number;
    element:ElementRef;
    ruler:Ruler;
    rect:any;

    constructor(element:ElementRef) {
        this.element = element;
        this.ruler = new Ruler(new browser.BrowserDomAdapter());
        this.rect = {};
    }

    ngOnInit() {
        var vm = this;
        var measure = this.ruler.measure(this.element);
        measure.then((rect:Rectangle) => {
            this.height = rect.height;
            vm.rect = rect;
        });
    }

    onResize(rect:Rectangle) {
        var vm = this;
        var measure = this.ruler.measure(this.element);
        measure.then((rect:Rectangle) => {
            this.height = rect.height;
            vm.rect = rect;
        });
    }
}