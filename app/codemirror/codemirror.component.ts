import {Component, ElementRef, AfterViewInit, Output, EventEmitter, ChangeDetectorRef} from "@angular/core";

@Component({
    selector: 'codemirror',
    templateUrl: './app/codemirror/codemirror.html'
})
export class CodeMirrorComponent implements AfterViewInit {

    editor:CodeMirror.Editor;
    config:any;

    @Output() fileContentChanged = new EventEmitter();

    constructor(private elRef:ElementRef, private changeDetector:ChangeDetectorRef) {
    }

    ngAfterViewInit() {
        let config:CodeMirror.EditorConfiguration = {
            mode: "text/x-java",
            lineNumbers: true,
            value: "default text; // if you are reading this there was a problem :("
        };
        this.editor = CodeMirror(this.elRef.nativeElement, config);

        console.log("window.innerHeight", window.innerHeight, "height", this.calculateHeight());
        this.editor.setSize(this.calculateWidht(), this.calculateHeight());

        this.editor.setOption("matchbrackets", true);
        this.editor.on('change', (editor:CodeMirror.Editor) => {
            var content = this.editor.getDoc().getValue();
            this.fileContentChanged.emit({value: content})
        });

        this.changeDetector.detectChanges();
    }

    private calculateHeight():number {
        let innerHeight = window.innerHeight;
        if (this.isSingleColumnMode()) {
            return (innerHeight <= 640) ? 350 : innerHeight * 60 / 100;
        } else {
            return innerHeight * 66 / 100;
        }
    }

    private calculateWidht():number {
        let width = window.innerWidth;
        if (width <= 600) {
            return width * 0.77;
        } else {
            return width * 0.74;
        }
    }

    private isSingleColumnMode():boolean {
        return window.innerWidth <= 1024;
    }

    updateCode(newCode:string) {
        this.editor.setValue(newCode);
    }

    onResize(event) {
        this.editor.setSize(this.calculateWidht(), this.calculateHeight());
    }
}