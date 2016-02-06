import {Component} from "angular2/core";

@Component({
    selector: 'editor',
    templateUrl: './app/editor/editor.html'
})
export class EditorComponent {
    height:number;

    updateHeight(height:number) {
        this.height = height;
    }
}