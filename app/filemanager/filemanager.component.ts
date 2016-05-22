import {Component, Output, EventEmitter} from "@angular/core";
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

    // file management
    selectedNode:TreeNode = null;
    files:TreeNode[];
    
    //events
    @Output() myEvent = new EventEmitter();

    constructor() {
    }

    nodeSelect(event) {
        console.log("nodeSelected in filemanager");
        this.myEvent.emit({value: "jojojojo"});
    }

    nodeUnselect(event) {
        console.log("nodeUnSelect");
    }

    nodeExpand(event) {
        if (event.node) {
            console.log(event.node.label);
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