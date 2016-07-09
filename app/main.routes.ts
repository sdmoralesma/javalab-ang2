import {provideRouter, RouterConfig} from "@angular/router";
import {AppComponent} from "./app/app.component";

export const routes:RouterConfig = [
    {path: '/', component: AppComponent},
    {path: '/lang/:lang', component: AppComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];