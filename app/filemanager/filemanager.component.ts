import {Component} from "@angular/core";
import {Tree, TreeNode, Panel, Button, Toolbar} from "primeng/primeng";

@Component({
    selector: 'filemanager',
    templateUrl: './app/filemanager/filemanager.html',
    directives: [Tree, Panel, Toolbar, Button]
})
export class FileManagerComponent {

    files:TreeNode[];

    selectedFile:TreeNode;

    debug:string;

    constructor() {
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