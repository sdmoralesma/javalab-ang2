import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {InputTextModule} from "primeng/primeng";
import {JavalabService} from "../javalab.service";
import {TagService} from "../tag.service";
import {HttpModule} from "@angular/http";
import {HashLocationStrategy, LocationStrategy} from "@angular/common/esm";
import {AppRoutes} from "../main.routes";
import {DescriptionComponent} from "../description/description.component";
import {FileManagerComponent} from "../filemanager/filemanager.component";
import {TagsComponent} from "../tags/tags.component";
import {CodeMirrorComponent} from "../codemirror/codemirror.component";
import {NavBarComponent} from "../nav-bar/navbar.component";
import {TerminalComponent} from "../terminal/terminal.component";
import {TreeTableModule} from "primeng/components/treetable/treetable";
import {TreeModule} from "primeng/components/tree/tree";
import {TooltipModule} from "primeng/components/tooltip/tooltip";
import {ToolbarModule} from "primeng/components/toolbar/toolbar";
import {ToggleButtonModule} from "primeng/components/togglebutton/togglebutton";
import {TieredMenuModule} from "primeng/components/tieredmenu/tieredmenu";
import {TerminalModule} from "primeng/components/terminal/terminal";
import {TabViewModule} from "primeng/components/tabview/tabview";
import {TabMenuModule} from "primeng/components/tabmenu/tabmenu";
import {SplitButtonModule} from "primeng/components/splitbutton/splitbutton";
import {SpinnerModule} from "primeng/components/spinner/spinner";
import {SliderModule} from "primeng/components/slider/slider";
import {SlideMenuModule} from "primeng/components/slidemenu/slidemenu";
import {SelectButtonModule} from "primeng/components/selectbutton/selectbutton";
import {ScheduleModule} from "primeng/components/schedule/schedule";
import {RatingModule} from "primeng/components/rating/rating";
import {RadioButtonModule} from "primeng/components/radiobutton/radiobutton";
import {ProgressBarModule} from "primeng/components/progressbar/progressbar";
import {PickListModule} from "primeng/components/picklist/picklist";
import {PasswordModule} from "primeng/components/password/password";
import {PanelMenuModule} from "primeng/components/panelmenu/panelmenu";
import {PanelModule} from "primeng/components/panel/panel";
import {PaginatorModule} from "primeng/components/paginator/paginator";
import {OverlayPanelModule} from "primeng/components/overlaypanel/overlaypanel";
import {OrderListModule} from "primeng/components/orderlist/orderlist";
import {MultiSelectModule} from "primeng/components/multiselect/multiselect";
import {MessagesModule} from "primeng/components/messages/messages";
import {MenubarModule} from "primeng/components/menubar/menubar";
import {MenuModule} from "primeng/components/menu/menu";
import {MegaMenuModule} from "primeng/components/megamenu/megamenu";
import {ListboxModule} from "primeng/components/listbox/listbox";
import {LightboxModule} from "primeng/components/lightbox/lightbox";
import {InputTextareaModule} from "primeng/components/inputtextarea/inputtextarea";
import {InputSwitchModule} from "primeng/components/inputswitch/inputswitch";
import {AccordionModule} from "primeng/components/accordion/accordion";
import {AutoCompleteModule} from "primeng/components/autocomplete/autocomplete";
import {BreadcrumbModule} from "primeng/components/breadcrumb/breadcrumb";
import {ButtonModule} from "primeng/components/button/button";
import {CalendarModule} from "primeng/components/calendar/calendar";
import {CarouselModule} from "primeng/components/carousel/carousel";
import {ChartModule} from "primeng/components/chart/chart";
import {CheckboxModule} from "primeng/components/checkbox/checkbox";
import {CodeHighlighterModule} from "primeng/components/codehighlighter/codehighlighter";
import {SharedModule} from "primeng/components/common/shared";
import {ContextMenuModule} from "primeng/components/contextmenu/contextmenu";
import {DataGridModule} from "primeng/components/datagrid/datagrid";
import {DataListModule} from "primeng/components/datalist/datalist";
import {DataScrollerModule} from "primeng/components/datascroller/datascroller";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {DialogModule} from "primeng/components/dialog/dialog";
import {DragDropModule} from "primeng/components/dragdrop/dragdrop";
import {DropdownModule} from "primeng/components/dropdown/dropdown";
import {EditorModule} from "primeng/components/editor/editor";
import {FieldsetModule} from "primeng/components/fieldset/fieldset";
import {GalleriaModule} from "primeng/components/galleria/galleria";
import {GMapModule} from "primeng/components/gmap/gmap";
import {GrowlModule} from "primeng/components/growl/growl";
import {InputMaskModule} from "primeng/components/inputmask/inputmask";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        AppRoutes,
        BrowserModule,
        InputTextModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AccordionModule,
        AutoCompleteModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CarouselModule,
        ChartModule,
        CheckboxModule,
        CodeHighlighterModule,
        SharedModule,
        ContextMenuModule,
        DataGridModule,
        DataListModule,
        DataScrollerModule,
        DataTableModule,
        DialogModule,
        DragDropModule,
        DropdownModule,
        EditorModule,
        FieldsetModule,
        GalleriaModule,
        GMapModule,
        GrowlModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        ScheduleModule,
        SelectButtonModule,
        SlideMenuModule,
        SliderModule,
        SpinnerModule,
        SplitButtonModule,
        TabMenuModule,
        TabViewModule,
        TerminalModule,
        TieredMenuModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule
    ],
    declarations: [
        AppComponent,
        DescriptionComponent,
        FileManagerComponent,
        TagsComponent,
        CodeMirrorComponent,
        NavBarComponent,
        TerminalComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        TagService,
        JavalabService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}