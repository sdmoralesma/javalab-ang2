import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app/app.component";
import {ModuleWithProviders} from "@angular/core";
import {LocationStrategy,HashLocationStrategy} from '@angular/common';

export const routes: Routes = [
    {path: ':lang', component: AppComponent},
    {path: '', component: AppComponent}
];

export const routingProviders: any[] = [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);