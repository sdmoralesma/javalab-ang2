System.register(['./mock-response', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_response_1, core_1;
    var JavalabService;
    return {
        setters:[
            function (mock_response_1_1) {
                mock_response_1 = mock_response_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            JavalabService = (function () {
                function JavalabService() {
                }
                JavalabService.getHeroes = function () {
                    return Promise.resolve(mock_response_1.MockResponse);
                };
                // See the "Take it slow" appendix
                JavalabService.prototype.getHeroesSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_response_1.MockResponse); }, 1000);
                    } // 1 seconds
                     // 1 seconds
                    );
                };
                JavalabService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], JavalabService);
                return JavalabService;
            })();
            exports_1("JavalabService", JavalabService);
        }
    }
});
//# sourceMappingURL=javalab.service.js.map