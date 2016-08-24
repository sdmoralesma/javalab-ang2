import {Component, Output, EventEmitter, AfterViewInit, Renderer} from "@angular/core";
import {UUID} from "./uuid";
import {FileNode} from "../common";

const FILE_CLASS: string = "fa-file-text-o";

@Component({
    selector: 'filemanager',
    templateUrl: './app/filemanager/filemanager.html'
})
export class FileManagerComponent implements AfterViewInit {

    // dialog variables
    displayNewFolder: boolean = false;
    displayNewFile: boolean = false;
    displayRename: boolean = false;
    displayDelete: boolean = false;
    newNodeName: string = "";

    // file management
    selectedNode: FileNode = null;
    files: FileNode[];

    @Output() fileSelected = new EventEmitter<any>();

    constructor(private renderer: Renderer) {
    }

    ngAfterViewInit() {
        var clazz = this;
        setTimeout(() => {
            const tree = document.getElementsByTagName("p-tree")[0];
            let srcMainJava = tree.getElementsByClassName("ui-tree-toggler fa fa-fw fa-caret-right")[0];
            let srcTestJava = tree.getElementsByClassName("ui-tree-toggler fa fa-fw fa-caret-right")[1];

            let event = new MouseEvent('click', {bubbles: true});
            clazz.renderer.invokeElementMethod(srcMainJava, 'dispatchEvent', [event]);
            clazz.renderer.invokeElementMethod(srcTestJava, 'dispatchEvent', [event]);

            setTimeout(function () {
                let mainComCompanyProject = tree.getElementsByClassName("ui-tree-toggler fa fa-fw fa-caret-right")[0];
                let testComCompanyProject = tree.getElementsByClassName("ui-tree-toggler fa fa-fw fa-caret-right")[1];
                clazz.renderer.invokeElementMethod(mainComCompanyProject, 'dispatchEvent', [event]);
                clazz.renderer.invokeElementMethod(testComCompanyProject, 'dispatchEvent', [event]);
            }, 200);

        }, 200);

    }


    nodeSelect(event) {
        if (this.selectedNode.icon === FILE_CLASS) {
            this.fileSelected.emit({value: this.selectedNode.data});
        }
    }

    createFolder() {
        var newFolder: FileNode = {
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

        var parentNode: FileNode = this.findNodeById(this.selectedNode.parentId, this.files);
        if (this.selectedNode.icon === FILE_CLASS) {
            newFolder.parentId = parentNode.id;
            parentNode.children.push(newFolder);
        } else { // is a folder
            newFolder.parentId = this.selectedNode.id;
            this.selectedNode.children.push(newFolder);
        }
    }

    createFile() {
        var newFile: FileNode = {
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

        var parentNode: FileNode = this.findNodeById(this.selectedNode.parentId, this.files);
        if (this.selectedNode.icon === FILE_CLASS) {
            newFile.parentId = parentNode.id;
            parentNode.children.push(newFile);
        } else { // is a folder
            newFile.parentId = this.selectedNode.id;
            this.selectedNode.children.push(newFile);
        }
    }

    private findNodeById(id: string, tree: FileNode[]): FileNode {
        for (var node of tree) {
            var found = this.searchNode(id, node);
            if (found !== null) {
                return found;
            }
        }
    }

    private searchNode(id: string, node: FileNode) {
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
            var parentNode: FileNode = this.findNodeById(this.selectedNode.parentId, this.files);
            var index = parentNode.children.findIndex((child) => child.id === this.selectedNode.id);
            if (index > -1) {
                parentNode.children.splice(index, 1);
            }
        }
    }
}