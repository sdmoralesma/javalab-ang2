import {Component, OnInit, ViewChild} from "angular2/core";
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
    private data:any;
    height:number;

    @ViewChild(ConsoleComponent)
    console:ConsoleComponent;

    @ViewChild(EditorComponent)
    editor:EditorComponent;

    @ViewChild(NavBarComponent)
    navBar:NavBarComponent;

    constructor(private _javalabService:JavalabService) {
        //this.attachWindowEvents(); //not now
    }

    private attachWindowEvents() {
        window.onbeforeunload = function (e) {
            e = e || window.event;
            e.preventDefault();
            e.cancelBubble = true;
            e.returnValue = 'Code not saved!';
        };
    };

    getHeroes() {
        this.data = this._javalabService.getHeroes();
        console.log("message from server:", JSON.stringify(this.data));
    }

    ngOnInit() {
        this.getHeroes();
    }

    onResize(event) {
        console.log("onResize: console=", this.console);


        var minWidthDesktop = 980;
        if (window.outerWidth < minWidthDesktop) {
            return;
        }

        //var windowHeight = window.outerHeight;
        //var extNavHeight = this.navBar.height;
        ////  Define height for each element based on %
        //var codeEditorHeight = (windowHeight * 75 / 100) - extNavHeight;
        //var consoleHeight = (windowHeight * 25 / 100) - extNavHeight;

        // resize elements
        //$('#code-editor').height(codeEditorHeight);
        //$('#console').height(consoleHeight);

        this.editor.height = 1000;
        this.console.height = 1000;

    }

}
