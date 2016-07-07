import {provideRouter, RouterConfig} from "@angular/router";
import {LanguageComponent} from "./language.component";

export const routes:RouterConfig = [
    {path: '/', component: LanguageComponent},
    {path: '/:lang', component: LanguageComponent}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];