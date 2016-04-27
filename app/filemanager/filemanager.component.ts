import {Component, ChangeDetectorRef, AfterViewInit} from "angular2/core";
import {Tree, TreeNode, Panel, Menubar, Button} from "primeng/primeng";

@Component({
    selector: 'filemanager',
    templateUrl: './app/filemanager/filemanager.html',
    styleUrls: ['./app/filemanager/filemanager.css'],
    directives: [Tree, Panel, Menubar, Button]
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