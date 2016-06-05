import {Component} from "@angular/core";
import {Terminal} from "primeng/primeng";

@Component({
    selector: 'terminal',
    templateUrl: './app/terminal/terminal.html',
    directives: [Terminal]
})
export class TerminalComponent {

    response:string;

    onCommand(event) {
        if (event.command === 'date')
            this.response = new Date().toDateString();
        else
            this.response = 'Unknown command: ' + event.command;
    }

}