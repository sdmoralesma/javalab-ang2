import {Component} from "angular2/core";
import {Header, InputTextarea, Panel} from "primeng/primeng";

@Component({
    selector: 'description',
    templateUrl: './app/description/description.html',
    directives: [InputTextarea, Header, Panel]
})
export class DescriptionComponent {
    descriptionText:string = "hello my fucking world!";
}