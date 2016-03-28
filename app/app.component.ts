import {Component, OnInit, ViewChild} from "angular2/core";
import {NavBarComponent} from "./nav-bar/navbar.component";
import {TagsComponent} from "./tags/tags.component";
import {JavalabService} from "./javalab.service";
import {DescriptionComponent} from "./description/description.component";
import {FileManagerComponent} from "./filemanager/filemanager.component";
import {EditorComponent} from "./editor/editor.component";
import {ConsoleComponent} from "./console/console.component";
import {CodeMirrorComponent} from "./codemirror/codemirror.component";

@Component({
    selector: 'javalab-app',
    templateUrl: './app/app.html',
    directives: [DescriptionComponent, FileManagerComponent, NavBarComponent, TagsComponent, EditorComponent, ConsoleComponent, CodeMirrorComponent],
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
        //this.attachWindowEvents(); //TODO: activate on prod
    }

    private attachWindowEvents() {
        window.onbeforeunload = (e) => {
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
        var minWidthDesktop = 980;
        if (window.innerWidth < minWidthDesktop) {
            return;
        }

        var windowHeight = window.innerHeight;
        var extNavHeight = this.navBar.height;
        //  Define height for each element based on %
        var codeEditorHeight = (windowHeight * 0.75) - extNavHeight;
        var consoleHeight = (windowHeight * 0.25) - extNavHeight;

        // resize elements
        this.editor.updateHeight(codeEditorHeight);
        this.console.updateHeight(consoleHeight);
    }

}
