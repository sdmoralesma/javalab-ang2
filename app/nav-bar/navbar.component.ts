import {Component, EventEmitter, Output, OnInit} from "@angular/core";
import {FileNode, MenuItem} from "../common";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'nav-bar',
    templateUrl: './app/nav-bar/nav-bar.html',
    styleUrls: ['./app/nav-bar/nav-bar.css']
})
export class NavBarComponent implements OnInit {
    selected: FileNode;
    suggestions: FileNode[];
    options: FileNode[];

    items: MenuItem[];

    displayDialog: boolean = false;

    @Output() runCodeClicked = new EventEmitter();
    @Output() testCodeClicked = new EventEmitter();
    @Output() downloadClicked = new EventEmitter();

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.items = [
            {label: 'Java', icon: 'fa-file-code-o', routerLink: ['/java']},
            {label: 'Scala', icon: 'fa-file-code-o', routerLink: ['/scala']},
            {label: 'Groovy', icon: 'fa-file-code-o', routerLink: ['/groovy']}
        ]
    }

    search(event) {
        let query = event.query;
        this.suggestions = this.filterOptions(query, this.options);
    }

    private filterOptions(query, options: FileNode[]): FileNode[] {
        let filtered: any[] = [];
        for (let i = 0; i < options.length; i++) {
            let option = options[i];
            if (option.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(option);
            }
        }
        return filtered;
    }

    handleDropdownClick($event) {
        this.suggestions = [];

        //won't work without this timeout
        setTimeout(() => {
            this.suggestions = this.options;
        }, 100);
    }

    runCode() {
        this.runCodeClicked.emit(this.selected);
    }

    testCode() {
        this.testCodeClicked.emit(this.selected);
    }

    download() {
        this.downloadClicked.emit("");
    }

    newWorkspace(lang: string) {
        this.route.params.subscribe(params => {
            let goTolang: string = params['lang'] == undefined ? 'java' : params['lang'];
            this.router.navigateByUrl('/' + goTolang);
        });
    }

}
