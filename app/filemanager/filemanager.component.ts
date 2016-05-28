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
        var newFolder:TreeNode = {
            "label": this.newNodeName,
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "children": []
        };

        if (this.selectedNode === null) {
            this.files.push(newFolder);
        } else {
            this.selectedNode.children.push(newFolder);
        }
        this.displayNewFolder = false;
        this.newNodeName = "";
    }

    showCreateFileDialog() {
        this.displayNewFile = true;
    }

    createFile() {
        var newFolder:TreeNode = {
            "label": this.newNodeName,
            "icon": "fa-file-text-o",
            "data": ""
        };

        if (this.selectedNode === null) {
            this.files.push(newFolder);
        } else if (this.selectedNode.icon === "fa-file-text-o") {
            var parentId = this.calculateParentId(this.selectedNode.id.toString());
            if (parentId == "") {
                this.files.push(newFolder);
            } else {
                var parentNode:TreeNode = this.findNodeById(parentId, this.files);
                parentNode.children.push(newFolder);
            }

        } else {
            this.selectedNode.children.push(newFolder);
        }
        this.displayNewFile = false;
        this.newNodeName = "";
    }


    private findNodeById(id:string, tree:TreeNode[]):TreeNode {
        for (var node of tree) {
            console.log(node);

            if (id == node.id.toString()) {
                return node;
            }

            if (node.children.length > 0) {
                return this.findNodeById(id, node.children);
            }
        }
    }

    private calculateParentId(id:string):string {
        if (id.length >= 1) {
            return id.slice(0, -1);
        }

        throw new Error("Id length is = 0");
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