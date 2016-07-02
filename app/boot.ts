import {bootstrap} from "@angular/platform-browser-dynamic";
import {AppComponent} from "./app.component";
import "rxjs/Rx";
import {HTTP_PROVIDERS} from "@angular/http";
import {TagService} from "./tag.service";
import {JavalabService} from "./javalab.service";
import {enableProdMode} from "@angular/core";

// enableProdMode();
bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    TagService,
    JavalabService
]);
