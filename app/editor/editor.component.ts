import {Component, OnInit} from "angular2/core";

@Component({
    selector: 'editor',
    templateUrl: './app/editor/editor.html'
})
export class EditorComponent implements OnInit {

    height:number;

    ngOnInit() {
        /*var textArea = document.getElementById("codeMirrorEditor") as HTMLTextAreaElement;
        
        var editor = CodeMirror.fromTextArea(textArea, {
            value: "function myScript(){return 100;}\n",
            mode:  "javascript",
            lineNumbers: true
        });*/
    }
    
    updateHeight(height:number) {
        this.height = height;
    }
}