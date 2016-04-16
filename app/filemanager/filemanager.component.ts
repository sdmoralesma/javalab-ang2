import {Component} from "angular2/core";
import {Tree, TreeNode, Panel} from "primeng/primeng";

@Component({
    selector: 'filemanager',
    templateUrl: './app/filemanager/filemanager.html',
    directives: [Tree, Panel]
})
export class FileManagerComponent {

    files:TreeNode[];

    selectedFile:TreeNode;

    debug:string;

    constructor() {
    }

    ngOnInit() {
        this.files = [
            {
                "label": "Documents",
                "data": "Documents Folder",
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": [
                    {
                        "label": "Work",
                        "data": "Work Folder",
                        "expandedIcon": "fa-folder-open",
                        "collapsedIcon": "fa-folder",
                        "children": [
                            {
                                "label": "Expenses.doc",
                                "icon": "fa-file-text-o",
                                "data": "Expenses Document"
                            },
                            {
                                "label": "Resume.doc",
                                "icon": "fa-file-text-o",
                                "data": "Resume Document"
                            }
                        ]
                    }
                ]
            }
        ];
    }

    nodeSelect(event) {
        this.debug = "nodeSelect";
    }

    nodeUnselect(event) {
        this.debug = "nodeUnSelect";
    }

    nodeExpand(event) {
        if (event.node) {
            this.debug = event.node.label;
            // this.nodeService.getLazyFiles().then(nodes => event.node.children = nodes);
        }
    }

}