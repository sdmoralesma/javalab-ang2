import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app/app.component";
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: ':lang', component: AppComponent}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);