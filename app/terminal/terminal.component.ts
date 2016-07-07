import {Component, ViewChild} from "@angular/core";

@Component({
    selector: 'terminal',
    templateUrl: './app/terminal/terminal.html',
})
export class TerminalComponent {
    welcomeMessage:string;
    response:string;

    @ViewChild('terminal_area') input;

    public addResponseToTerminal(response:string) {
        this.response += "\n\njavalab $ " + response;
        var element = this.input.nativeElement;
        element.scrollTop = element.scrollHeight;
    }
}