import {Component, OnInit} from "angular2/core";
import {NavBarComponent} from "./nav-bar/navbar.component";
import {TagsComponent} from "./tags/tags.component";
import {JavalabService} from "./javalab.service";
import {DescriptionComponent} from "./description/description.component";
import {FileManagerComponent} from "./filemanager/filemanager.component";
import {EditorComponent} from "./editor/editor.component";
import {ConsoleComponent} from "./console/console.component";

@Component({
    selector: 'javalab-app',
    templateUrl: './app/app.html',
    directives: [DescriptionComponent, FileManagerComponent, NavBarComponent, TagsComponent, EditorComponent, ConsoleComponent],
    providers: [JavalabService]
})
export class AppComponent implements OnInit {
    public title = 'Tour of Heroes';
    private data:any;

    constructor(private _javalabService:JavalabService) {
        //this.attachWindowEvents(); //not now

    }

    private attachWindowEvents() {
        window.onbeforeunload = function (e) {
            e = e || window.event;
            e.preventDefault();
            e.cancelBubble = true;
            e.returnValue = 'test';
        };
    };

    getHeroes() {
        this.data = this._javalabService.getHeroes();
        console.log("message from server:", JSON.stringify(this.data));
    }

    ngOnInit() {
        this.getHeroes();
    }

}
