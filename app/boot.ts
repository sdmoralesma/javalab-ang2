import {bootstrap} from "@angular/platform-browser-dynamic";
import {AppComponent} from "./app.component";
import "rxjs/Rx";
import {ROUTER_PROVIDERS} from "@angular/router";
import {provide} from "@angular/core";
import {APP_BASE_HREF} from "@angular/common";
import {HTTP_PROVIDERS} from "@angular/http";
import {CountryService} from "./country.service";
import {JavalabService} from "./javalab.service";

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, CountryService, JavalabService,
    provide(APP_BASE_HREF, {useValue: '/'})
]);