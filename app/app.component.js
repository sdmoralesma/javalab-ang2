System.register(['angular2/core', './nav-bar/navbar.component', "./tags/tags.component", './javalab.service', "./description/description.component", "./filemanager/filemanager.component", "./editor/editor.component", "./console/console.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, navbar_component_1, tags_component_1, javalab_service_1, description_component_1, filemanager_component_1, editor_component_1, console_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (tags_component_1_1) {
                tags_component_1 = tags_component_1_1;
            },
            function (javalab_service_1_1) {
                javalab_service_1 = javalab_service_1_1;
            },
            function (description_component_1_1) {
                description_component_1 = description_component_1_1;
            },
            function (filemanager_component_1_1) {
                filemanager_component_1 = filemanager_component_1_1;
            },
            function (editor_component_1_1) {
                editor_component_1 = editor_component_1_1;
            },
            function (console_component_1_1) {
                console_component_1 = console_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_heroService) {
                    this._heroService = _heroService;
                    this.title = 'Tour of Heroes';
                }
                AppComponent.prototype.getHeroes = function () {
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'javalab-app',
                        templateUrl: './app/app.html',
                        directives: [description_component_1.DescriptionComponent, filemanager_component_1.FileManagerComponent, navbar_component_1.NavBarComponent, tags_component_1.TagsComponent, editor_component_1.EditorComponent, console_component_1.ConsoleComponent],
                        providers: [javalab_service_1.JavalabService]
                    }), 
                    __metadata('design:paramtypes', [javalab_service_1.JavalabService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map