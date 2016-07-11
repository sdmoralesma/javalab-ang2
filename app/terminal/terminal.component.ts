import {Component} from "@angular/core";

@Component({
    selector: 'terminal',
    templateUrl: './app/terminal/terminal.html',
})
export class TerminalComponent {
    welcomeMessage:string;
    response:string;

    public addResponseToTerminal(response:string) {
        this.welcomeMessage = "";
        this.response = "javalab $ " + response;
    }
}