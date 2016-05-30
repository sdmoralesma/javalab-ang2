import {bootstrap} from "@angular/platform-browser-dynamic";
import {AppComponent} from "./app.component";
import "rxjs/Rx";
import {ROUTER_PROVIDERS} from "@angular/router";
import {provide} from "@angular/core";
import {APP_BASE_HREF} from "@angular/common";

bootstrap(AppComponent, [ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, {useValue: '/'})
]);