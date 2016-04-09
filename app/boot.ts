import {bootstrap} from "angular2/platform/browser";
import {AppComponent} from "./app.component";
import 'rxjs/Rx'; // Add all operators to Observable

bootstrap(AppComponent,[]).catch(err => console.error(err));