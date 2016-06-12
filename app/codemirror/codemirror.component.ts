import {Component, ElementRef, AfterViewInit, Output, EventEmitter} from "@angular/core";

const EDITOR_WIDTH = "75%";
const EDITOR_HEIGHT = "595px";

@Component({
    selector: 'codemirror',
    templateUrl: './app/codemirror/codemirror.html'
})
export class CodeMirrorComponent implements AfterViewInit {

    height:number;
    editor:CodeMirror.Editor;
    editorNativeElement:any;
    config:any;

    @Output() fileContentChanged = new EventEmitter();

    constructor(elRef:ElementRef) {
        this.editorNativeElement = elRef.nativeElement;
    }

    ngAfterViewInit() {
        let config:CodeMirror.EditorConfiguration = {
            mode: "text/x-java",
            lineNumbers: true,
            value: ""
        };

        this.editor = CodeMirror(this.editorNativeElement, config);
        this.editor.setSize(EDITOR_WIDTH, EDITOR_HEIGHT);
        this.editor.setOption("matchbrackets", true);
        this.editor.on('change', (editor:CodeMirror.Editor) => {
            var content = this.editor.getDoc().getValue();
            this.fileContentChanged.emit({value: content})
        });
    }

    updateHeight(height:number) {
        this.height = height;
    }

    updateCode(newCode:string) {
        this.editor.setValue(this.config.value);
        this.editor.setOption("mode", this.config.languageMode);
        this.editor.setValue(newCode);
    }
}