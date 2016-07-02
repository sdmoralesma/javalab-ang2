import {bootstrap} from "@angular/platform-browser-dynamic";
import {AppComponent} from "./app.component";
import "rxjs/Rx";
import {HTTP_PROVIDERS} from "@angular/http";
import {TagService} from "./tag.service";
import {JavalabService} from "./javalab.service";
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {enableProdMode} from "@angular/core";

// enableProdMode();
bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    TagService,
    JavalabService
]);
