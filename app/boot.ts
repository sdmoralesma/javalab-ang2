import {bootstrap} from "@angular/platform-browser-dynamic";
import {AppComponent} from "./app.component";
import "rxjs/Rx";
import {HTTP_PROVIDERS} from "@angular/http";
import {TagService} from "./tag.service";
import {JavalabService} from "./javalab.service";
import {enableProdMode} from "@angular/core";
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

enableProdMode();
bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    HTTP_PROVIDERS,
    TagService,
    JavalabService
]);
