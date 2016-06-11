import {Component} from "@angular/core";
import {Terminal} from "primeng/primeng";

@Component({
    selector: 'terminal',
    templateUrl: './app/terminal/terminal.html',
    directives: [Terminal]
})
export class TerminalComponent {

    welcomeMessage:string;
    response:string;

    onCommand(event) {
        let command = (event.command === null) ? "" : event.command.trim();

        switch (command) {
            case "":
                this.response = "";
                break;
            case "ls":
                this.response = "nice try buddy";
                break;
            case "cd":
                this.response = "you can't simply walk into cd";
                break;
            case "date":
                this.response = new Date().toDateString();
                break;
            case "whoami":
                this.response = "javalab-user-" + this.randomIntFromInterval(1, 1000);
                break;
            default:
                this.response = "command not found: " + command;
                break;
        }
    }


    private randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}