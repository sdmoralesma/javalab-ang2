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

    //Dialog variables
    displayNewFolder:boolean = false;
    displayNewFile:boolean = false;
    displayRename:boolean = false;
    displayDelete:boolean = false;
    newNodeName:string = "";

    // file management
    selectedNode:FileNode = null;
    files:FileNode[];

    //events
    @Output() myEvent = new EventEmitter();

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

        var parentId = this.selectedNode.parentId;
        if (parentId == "" || parentId == null) {
            newFolder.parentId = this.selectedNode.id;
            this.files.push(newFolder);
            return;
        }

        var parentNode:FileNode = this.findNodeById(parentId, this.files);
        newFolder.parentId = parentNode.id;
        if (this.selectedNode.icon === FILE_CLASS) {
            parentNode.children.push(newFolder);
        } else { // is a folder
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

        var parentId = this.selectedNode.parentId;
        if (parentId == "" || parentId == null) {
            newFile.parentId = this.selectedNode.id;
            this.files.push(newFile);
            return;
        }

        var parentNode:FileNode = this.findNodeById(parentId, this.files);
        newFile.parentId = parentNode.id;
        if (this.selectedNode.icon === FILE_CLASS) {
            parentNode.children.push(newFile);
        } else { // is a folder
            this.selectedNode.children.push(newFile);
        }
    }

    private findNodeById(id:string, tree:FileNode[]):FileNode {
        for (var node of tree) {
            if (id == node.id) {
                return node;
            }

            if (node.children.length > 0) {
                return this.findNodeById(id, node.children);
            }
        }
    }

    private generateId() {
        return UUID.generate();
    }

    renameItem() {
        this.displayRename = false;
        this.newNodeName = "";
    }

    deleteItem() {
        this.displayDelete = false;
    }
}