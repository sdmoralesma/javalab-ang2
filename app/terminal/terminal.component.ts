import {Component} from "angular2/core";
import {Terminal} from "primeng/primeng";

@Component({
    selector: 'terminal',
    templateUrl: './app/terminal/terminal.html',
    directives: [Terminal]
})
export class TerminalComponent {

    height:number;

    updateHeight(height:number) {
        this.height = height;
    }

    response:string;

    onCommand(event) {
        if (event.command === 'date')
            this.response = new Date().toDateString();
        else
            this.response = 'Unknown command: ' + event.command;
    }

}