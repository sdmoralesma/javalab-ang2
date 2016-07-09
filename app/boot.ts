import {bootstrap} from "@angular/platform-browser-dynamic";
import {MainComponent} from "./main.component";
import "rxjs/Rx";
import {HTTP_PROVIDERS} from "@angular/http";
import {TagService} from "./tag.service";
import {JavalabService} from "./javalab.service";
import {enableProdMode} from "@angular/core";
import {APP_ROUTER_PROVIDERS} from "./main.routes";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

enableProdMode();
bootstrap(MainComponent, [
    APP_ROUTER_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    HTTP_PROVIDERS,
    TagService,
    JavalabService
]);
