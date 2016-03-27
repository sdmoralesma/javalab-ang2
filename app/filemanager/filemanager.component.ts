import {Component} from "angular2/core";
import {Tree, TreeNode, Message} from "primeng/primeng";

@Component({
    selector: 'filemanager',
    templateUrl: './app/filemanager/filemanager.html',
    directives: [Tree]
})
export class FileManagerComponent {

    msgs: Message[];

    files: TreeNode[];

    selectedFile: TreeNode;

    constructor() { }

    ngOnInit() {
        var myNode: MyNode;
        myNode = {
            label: "string",
            data: "any",
            icon: "any",
            leaf: true
        };

        this.files = [myNode];
    }

    nodeSelect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Selected', detail: event.node.label});
    }

    nodeUnselect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
    }

}

class MyNode implements TreeNode {

}