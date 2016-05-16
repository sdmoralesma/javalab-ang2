import {Component} from "@angular/core";
import {Tree, TreeNode, Panel, Button, Toolbar, Dialog, InputText} from "primeng/primeng";

@Component({
    selector: 'filemanager',
    templateUrl: './app/filemanager/filemanager.html',
    directives: [Tree, Panel, Toolbar, Button, Dialog, InputText]
})
export class FileManagerComponent {

    //Dialog variables
    displayNewFolder:boolean = false;
    displayNewFile:boolean = false;
    displayRename:boolean = false;
    displayDelete:boolean = false;
    newNodeName:string = "";

    selectedNode:TreeNode = null;
    files:TreeNode[];
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

    showCreateFolderDialog() {
        this.displayNewFolder = true;
    }

    createFolder() {
        var newFolder:TreeNode;
        if (this.selectedNode === null) {
            newFolder = {
                "label": this.newNodeName,
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": []
            };

            this.files.push(newFolder);
        } else {

        }
        this.displayNewFolder = false;
        this.newNodeName = "";
    }

    showCreateFileDialog() {
        this.displayNewFile = true;
    }

    createFile() {
        var newFolder:TreeNode;
        if (this.selectedNode === null) {
            newFolder = {
                "label": this.newNodeName,
                "expandedIcon": "fa-folder-open",
                "collapsedIcon": "fa-folder",
                "children": []
            };

            this.files.push(newFolder);
        } else {

        }
        this.displayNewFile = false;
        this.newNodeName = "";
    }

    showRenameItemDialog() {
        this.displayRename = true;

    }

    renameItem() {
        this.displayRename = false;
        this.newNodeName = "";
    }

    showDeleteItemDialog() {
        this.displayDelete = true;

    }

    deleteItem() {
        this.displayDelete = false;
    }
}