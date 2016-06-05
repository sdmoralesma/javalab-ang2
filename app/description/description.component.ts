import {Component} from "@angular/core";
import {Header, InputTextarea, Panel} from "primeng/primeng";

@Component({
    selector: 'description',
    templateUrl: './app/description/description.html',
    directives: [InputTextarea, Header, Panel]
})
export class DescriptionComponent {
    text:string;
}