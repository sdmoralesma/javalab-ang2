import {Component, OnInit, ElementRef, OnChanges, AfterViewInit} from "angular2/core";

@Component({
    selector: 'codemirror',
    templateUrl: './app/codemirror/codemirror.html'
})
export class CodeMirrorComponent implements OnInit,OnChanges, AfterViewInit {

    height:number;

    editor:CodeMirror.Editor;

    editorNativeElement:any;

    constructor(elRef:ElementRef) {
        this.editorNativeElement = elRef.nativeElement;
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.editor = CodeMirror(this.editorNativeElement, {
            mode: "clike",
            lineNumbers: true
        });

        var code = "/**\r\n * This class subclasses DrawableRect and adds colors to the rectangle it draws\r\n **/\r\npublic class ColoredRect extends DrawableRect {\r\n  // These are new fields defined by this class.\r\n  // x1, y1, x2, and y2 are inherited from our super-superclass, Rect.\r\n  @AnnotationTest\r\n  protected Color border, fill;\r\n  private String name;\r\n\r\n  /**\r\n   * This constructor uses super() to invoke the superclass constructor, and\r\n   * also does some initialization of its own.\r\n   **/\r\n  public ColoredRect(int x1, int y1, int x2, int y2, Color border, Color fill){\r\n    super(x1, y1, x2, y2);\r\n    /* This\r\n    is a block comment */\r\n    this.border = border;\r\n    this.fill = fill;\r\n    this.name = \"This is a string\";\r\n  }\r\n\r\n  /**\r\n   * This method overrides the draw() method of our superclass so that it\r\n   * can make use of the colors that have been specified.\r\n   **/\r\n  public void draw(Graphics g) {\r\n    g.setColor(fill);\r\n    g.fillRect(x1, y1, x2, y2);\r\n    g.setColor(border);\r\n    g.drawRect(x1, y1, x2, y2);\r\n  }\r\n}"

        this.editor.setValue(code);
        this.editor.on('change', (editor: CodeMirror.Editor) => {
            var value = this.editor.getDoc().getValue();
            console.log("Value exposed:", value);
        });
    }

    ngOnChanges(changes:{}) {
        console.log("on changes");
    }

    updateHeight(height:number) {
        this.height = height;
    }
}