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

    @ViewChild(DescriptionComponent)
    description:DescriptionComponent;

    @ViewChild(TerminalComponent)
    terminal:TerminalComponent;

    @ViewChild(CodeMirrorComponent)
    editor:CodeMirrorComponent;

    @ViewChild(NavBarComponent)
    navBar:NavBarComponent;

    @ViewChild(FileManagerComponent)
    filemanager:FileManagerComponent;

    @ViewChild(TagsComponent)
    tagsComponent:TagsComponent;

    errorMessage:any;
    model:any;

    constructor(private javalabService:JavalabService) {
    }

    ngOnInit() {
        this.javalabService.initialize()
            .then(data => {
                    this.model = data;
                    this.filemanager.files = data.filesTree;
                    this.navBar.options = data.config.javaClasses;
                    this.description.text = data.description;
                    this.terminal.welcomeMessage = data.terminal;
                    this.tagsComponent.selectedTags = data.tags;
                    this.editor.config = data.config;
                },
                error => this.errorMessage = error
            );


        setTimeout(() => {// hacky, I know :(
            this.filemanager.selectedNode = this.javalabService.findNodeById(this.javalabService.model.config.initialNode, this.javalabService.model.filesTree);
            this.editor.editor.setValue(this.filemanager.selectedNode.data);
            this.editor.editor.setOption("mode", this.model.config.languageMode);
        }, 800);

    }

    showFileContent(event) {
        this.editor.updateCode(event.value);
    }

    updateFileContent(event) {
        if (this.filemanager.selectedNode === null) {
            return;
        }
        this.filemanager.selectedNode.data = event.value;
    }
}
