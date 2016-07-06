import {Component, OnInit, ViewChild} from "@angular/core";
import {NavBarComponent} from "./nav-bar/navbar.component";
import {TagsComponent} from "./tags/tags.component";
import {JavalabService} from "./javalab.service";
import {DescriptionComponent} from "./description/description.component";
import {FileManagerComponent} from "./filemanager/filemanager.component";
import {TerminalComponent} from "./terminal/terminal.component";
import {CodeMirrorComponent} from "./codemirror/codemirror.component";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {GlobalModel} from "./common";

@Component({
    selector: 'javalab-app',
    templateUrl: './app/app.html',
    directives: [DescriptionComponent, FileManagerComponent, NavBarComponent, TagsComponent, TerminalComponent, CodeMirrorComponent, ROUTER_DIRECTIVES]
})
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
    model:GlobalModel;

    constructor(private javalabService:JavalabService) {
    }

    ngOnInit() {
        this.javalabService.initialize()
            .then(data => {
                    this.model = data;
                    this.filemanager.files = this.model.filesTree;
                    this.navBar.options = data.config.javaClasses;
                    this.description.text = this.model.description;
                    this.terminal.welcomeMessage = this.model.terminal;
                    this.tagsComponent.selectedTags = this.model.tags;
                    this.editor.config = this.model.config;
                },
                error => this.errorMessage = error
            );


        setTimeout(() => {// hacky, I know :(
            this.initializeEditor();
            this.initializeNavBar();
        }, 800);
    }

    private initializeEditor() {
        this.filemanager.selectedNode = this.javalabService.findNodeById(this.model.config.initialNode, this.model.filesTree);
        this.editor.editor.setValue(this.filemanager.selectedNode.data);
        this.editor.editor.setOption("mode", this.model.config.languageMode);
    }

    private initializeNavBar() {
        var optionsAsObjects = [];
        for (var suggestionId of this.model.config.javaClasses) {
            let found = this.javalabService.findNodeById(suggestionId, this.model.filesTree);
            optionsAsObjects.push(found);
        }
        this.navBar.options = optionsAsObjects;
        this.navBar.selected = this.navBar.options[0];
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

    runCode() {
        this.javalabService.runCode(this.model)
            .then(data => {
                    this.terminal.response = data.output;
                    this.model.terminal = data.output;
                    this.navBar.displayDialog = false;
                }, error => this.errorMessage = error
            );
    }

    testCode() {
        this.javalabService.testCode(this.model)
            .then(data => {
                    this.terminal.response = data.output;
                    this.model.terminal = data.output;
                    this.navBar.displayDialog = false;
                }, error => this.errorMessage = error
            );
    }

    download() {
        this.javalabService.download(this.model);
    }
}
