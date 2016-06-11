import {Component, Output, EventEmitter} from "@angular/core";
import {Tree, Panel, Button, Toolbar, Dialog, InputText} from "primeng/primeng";
import {UUID} from "./uuid";

const FILE_CLASS:string = "fa-file-text-o";

export interface FileNode {
    id:string;
    label?:string;
    data?:any;
    icon?:any;
    expandedIcon?:any;
    collapsedIcon?:any;
    parentId?:string;
    children?:FileNode[];
    leaf?:boolean;
}

@Component({
    selector: 'filemanager',
    templateUrl: './app/filemanager/filemanager.html',
    directives: [Tree, Panel, Toolbar, Button, Dialog, InputText]
})
export class FileManagerComponent {

    // dialog variables
    displayNewFolder:boolean = false;
    displayNewFile:boolean = false;
    displayRename:boolean = false;
    displayDelete:boolean = false;
    newNodeName:string = "";

    // file management
    selectedNode:FileNode = null;
    files:FileNode[];

    @Output() fileSelected = new EventEmitter<any>();

    nodeSelect(event) {
        if (this.selectedNode.icon === FILE_CLASS) {
            this.fileSelected.emit({value: this.selectedNode.data});
        }
    }

    createFolder() {
        var newFolder:FileNode = {
            "id": this.generateId(),
            "label": this.newNodeName,
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "children": []
        };

        if (this.selectedNode === null) {
            this.files.push(newFolder);
            return;
        }

        if (this.selectedNode.parentId === undefined) {
            if (this.selectedNode.icon === FILE_CLASS) {
                this.files.push(newFolder);
            } else {
                newFolder.parentId = this.selectedNode.id;
                this.selectedNode.children.push(newFolder);
            }
            return;
        }

        var parentNode:FileNode = this.findNodeById(this.selectedNode.parentId, this.files);
        if (this.selectedNode.icon === FILE_CLASS) {
            newFolder.parentId = parentNode.id;
            parentNode.children.push(newFolder);
        } else { // is a folder
            newFolder.parentId = this.selectedNode.id;
            this.selectedNode.children.push(newFolder);
        }
    }

    createFile() {
        var newFile:FileNode = {
            "id": this.generateId(),
            "label": this.newNodeName,
            "icon": "fa-file-text-o",
            "data": ""
        };

        if (this.selectedNode === null) {
            this.files.push(newFile);
            return;
        }

        if (this.selectedNode.parentId === undefined) {
            if (this.selectedNode.icon === FILE_CLASS) {
                this.files.push(newFile);
            } else {
                newFile.parentId = this.selectedNode.id;
                this.selectedNode.children.push(newFile);
            }
            return;
        }

        var parentNode:FileNode = this.findNodeById(this.selectedNode.parentId, this.files);
        if (this.selectedNode.icon === FILE_CLASS) {
            newFile.parentId = parentNode.id;
            parentNode.children.push(newFile);
        } else { // is a folder
            newFile.parentId = this.selectedNode.id;
            this.selectedNode.children.push(newFile);
        }
    }

    private findNodeById(id:string, tree:FileNode[]):FileNode {
        for (var node of tree) {
            var found = this.searchNode(id, node);
            if (found !== null) {
                return found;
            }
        }
    }

    private searchNode(id:string, node:FileNode) {
        if (node.id === id) {
            return node;
        } else if (node.children !== null && node.children !== undefined) {
            var result = null;
            for (var i = 0; result === null && i < node.children.length; i++) {
                result = this.searchNode(id, node.children[i]);
            }
            return result;
        }
        return null;
    }

    private generateId() {
        return UUID.generate();
    }

    renameItem() {
        this.selectedNode.label = this.newNodeName;
    }

    deleteItem() {
        if (this.selectedNode.parentId === undefined) {
            var index = this.files.indexOf(this.selectedNode, 0);
            if (index > -1) {
                this.files.splice(index, 1);
            }
        } else {
            var parentNode:FileNode = this.findNodeById(this.selectedNode.parentId, this.files);
            var index = parentNode.children.findIndex((child) => child.id === this.selectedNode.id);
            if (index > -1) {
                parentNode.children.splice(index, 1);
            }
        }
    }
}