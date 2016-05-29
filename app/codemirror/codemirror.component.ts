import {Component, OnInit, ElementRef, OnChanges, AfterViewInit, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'codemirror',
    templateUrl: './app/codemirror/codemirror.html'
})
export class CodeMirrorComponent implements OnInit,OnChanges, AfterViewInit {

    height:number;
    editor:CodeMirror.Editor;
    editorNativeElement:any;

    //events
    @Output() fileContentChanged = new EventEmitter();

    constructor(elRef:ElementRef) {
        this.editorNativeElement = elRef.nativeElement;
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        let config:CodeMirror.EditorConfiguration = {
            mode: "text/x-java",
            lineNumbers: true,
            value: "import com.demo.util.MyType;\r\nimport com.demo.util.MyInterface;\r\n\r\npublic enum Enum {\r\n  VAL1, VAL2, VAL3\r\n}\r\n\r\npublic class Class<T, V> implements MyInterface {\r\n  public static final MyType<T, V> member;\r\n  \r\n  private class InnerClass {\r\n    public int zero() {\r\n      return 0;\r\n    }\r\n  }\r\n\r\n  @Override\r\n  public MyType method() {\r\n    return member;\r\n  }\r\n\r\n  public void method2(MyType<T, V> value) {\r\n    method();\r\n    value.method3();\r\n    member = value;\r\n  }\r\n}\r\n"
        };

        this.editor = CodeMirror(this.editorNativeElement, config);
        this.editor.setSize("75%", "595px");
        this.editor.setOption("matchbrackets", true);
        this.editor.on('change', (editor:CodeMirror.Editor) => {
            var content = this.editor.getDoc().getValue();
            this.fileContentChanged.emit({value: content})
        });
    }

    ngOnChanges(changes:{}) {
        console.log("on changes");
    }

    updateHeight(height:number) {
        this.height = height;
    }

    updateCode(newCode:string) {
        this.editor.setValue(newCode);
    }
}