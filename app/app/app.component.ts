import {OnDestroy, OnInit, Component, ViewChild} from "@angular/core";
import {DescriptionComponent} from "../description/description.component";
import {FileManagerComponent} from "../filemanager/filemanager.component";
import {TagsComponent} from "../tags/tags.component";
import {CodeMirrorComponent} from "../codemirror/codemirror.component";
import {NavBarComponent} from "../nav-bar/navbar.component";
import {TerminalComponent} from "../terminal/terminal.component";
import {ActivatedRoute} from "@angular/router";
import {JavalabService} from "../javalab.service";
import {GlobalModel} from "../common";

@Component({
    selector: 'central-panel',
    templateUrl: './app/app/app.html',
    directives: [DescriptionComponent, FileManagerComponent, TagsComponent, CodeMirrorComponent, NavBarComponent, TerminalComponent]
})
export class AppComponent implements OnInit, OnDestroy {

    @ViewChild(DescriptionComponent)
    description:DescriptionComponent;

    @ViewChild(CodeMirrorComponent)
    editor:CodeMirrorComponent;

    @ViewChild(FileManagerComponent)
    filemanager:FileManagerComponent;

    @ViewChild(TagsComponent)
    tagsComponent:TagsComponent;

    @ViewChild(NavBarComponent)
    navBar:NavBarComponent;

    @ViewChild(TerminalComponent)
    terminal:TerminalComponent;

    errorMessage:any;
    model:GlobalModel;
    private routerSubscriber:any;

    constructor(private javalabService:JavalabService,
                private route:ActivatedRoute) {
    }

    ngOnInit() {
        this.routerSubscriber = this.route.params.subscribe(params => {
            let lang:string = params['lang'] == undefined ? '/java' : "/" + params['lang'];
            this.javalabService.initialize(lang)
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
        });

        setTimeout(() => {// hacky, I know :(
            this.initializeNavBar();
            this.initializeCentralPanel();
        }, 300);
    }

    ngOnDestroy() {
        this.routerSubscriber.unsubscribe();
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

    private initializeCentralPanel() {
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

    runCode() {
        this.javalabService.runCode(this.model)
            .then(data => {
                    this.terminal.addResponseToTerminal(data.output);
                    this.model.terminal = data.output;
                    this.navBar.displayDialog = false;
                }, error => this.errorMessage = error
            );
    }

    testCode() {
        this.javalabService.testCode(this.model)
            .then(data => {
                    this.terminal.addResponseToTerminal(data.output);
                    this.model.terminal = data.output;
                    this.navBar.displayDialog = false;
                }, error => this.errorMessage = error
            );
    }

    download() {
        this.javalabService.download(this.model);
    }

}
