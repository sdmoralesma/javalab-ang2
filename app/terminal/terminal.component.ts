import {Component, AfterViewInit, ChangeDetectorRef} from "@angular/core";

@Component({
    selector: 'terminal',
    templateUrl: './app/terminal/terminal.html',
})
export class TerminalComponent implements AfterViewInit {

    width:number;
    height:number;

    welcomeMessage:string;
    response:string;

    constructor(private changeDetector:ChangeDetectorRef) {
    }

    ngAfterViewInit() {
        this.width = this.calculateWidht();
        this.height = this.calculateHeight();
        this.changeDetector.detectChanges();
    }

    public addResponseToTerminal(response:string) {
        this.welcomeMessage = "";
        this.response = "javalab $ \n" + response;
    }

    onResize(event) {
        this.width = this.calculateWidht();
        this.height = this.calculateHeight();
    }

    private calculateHeight() {
        let innerHeight = window.innerHeight;

        if (this.isSingleColumnMode()) {
            return (innerHeight <= 640) ? 250 : innerHeight * 25 / 100;
        } else {
            return innerHeight * 25 / 100;
        }
    }

    private calculateWidht() {
        let width = window.innerWidth;
        if (width <= 600) {
            return width * 0.97;
        } else if (width > 600 && width <= 1350) {
            return width * 0.98;
        } else {
            return width * 0.985;
        }
    }


    private isSingleColumnMode():boolean {
        return window.innerWidth <= 1024;
    }
}