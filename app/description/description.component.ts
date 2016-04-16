import {Component} from "angular2/core";
import {Header, InputTextarea} from "primeng/primeng";

@Component({
    selector: 'description',
    templateUrl: './app/description/description.html',
    directives: [InputTextarea, Header]
})
export class DescriptionComponent {
    descriptionText:string = "hello my fucking world!";
}