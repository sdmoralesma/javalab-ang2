import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import "rxjs/Rx";
import {AppModule} from "./app/app.module";
import {enableProdMode} from "@angular/core";

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
