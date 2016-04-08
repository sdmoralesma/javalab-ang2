import {Component} from "angular2/core";
import {Editor, Header} from "primeng/primeng";

@Component({
    selector: 'description',
    templateUrl: './app/description/description.html',
    directives: [Editor, Header]
})
export class DescriptionComponent {
    descriptionText: string = "hello my fucking world!";
}