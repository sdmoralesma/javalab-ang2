import {bootstrap} from "angular2/platform/browser";
import {AppComponent} from "./app.component";
import {APP_BASE_HREF, ROUTER_PROVIDERS} from "angular2/router";
import {provide} from "angular2/core";

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, {useValue: '/'})]).catch(err => console.error(err));