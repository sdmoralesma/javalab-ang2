import {Component, OnInit, ViewChild} from "@angular/core";
import {NavBarComponent} from "./nav-bar/navbar.component";
import {TagsComponent} from "./tags/tags.component";
import {JavalabService} from "./javalab.service";
import {DescriptionComponent} from "./description/description.component";
import {FileManagerComponent} from "./filemanager/filemanager.component";
import {TerminalComponent} from "./terminal/terminal.component";
import {CodeMirrorComponent} from "./codemirror/codemirror.component";
import {Routes, ROUTER_DIRECTIVES} from "@angular/router";
import {HeroListComponent} from "./hero-list/hero-list.component";

@Component({
    selector: 'javalab-app',
    templateUrl: './app/app.html',
    directives: [DescriptionComponent, FileManagerComponent, NavBarComponent, TagsComponent, TerminalComponent, CodeMirrorComponent, ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/heroes', component: HeroListComponent}
])
export class AppComponent implements OnInit {

    errorMessage:any;
    
    @ViewChild(TerminalComponent)
    terminal:TerminalComponent;

    @ViewChild(CodeMirrorComponent)
    editor:CodeMirrorComponent;

    @ViewChild(NavBarComponent)
    navBar:NavBarComponent;

    @ViewChild(FileManagerComponent)
    filemanager:FileManagerComponent;

    constructor(private javalabService:JavalabService) {
        //this.attachWindowEvents(); //TODO: activate on prod
    }

    private attachWindowEvents() {
        window.onbeforeunload = (e) => {
            e = e || window.event;
            e.preventDefault();
            e.cancelBubble = true;
            e.returnValue = 'Code not saved!';
        };
    }

    ngOnInit() {
        this.javalabService.getMockResponse()
            .subscribe(
                data => {
                    this.filemanager.files = data.filesTree;
                    this.navBar.options = data.config.javaClasses;
                    // this.terminal.
                },
                error => this.errorMessage = <any>error
            );
    }

    showFileContent(event) {
        this.editor.updateCode(event.value);
    }

    updateFileContent(event) {
        this.filemanager.selectedNode.data = event.value;
    }
}
