System.register(['angular2/core', 'angular2/platform/browser', 'app/components/ButtonComponent/ButtonComponent', 'app/components/LabelComponent/LabelComponent'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, ButtonComponent_1, LabelComponent_1;
    var Main;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (ButtonComponent_1_1) {
                ButtonComponent_1 = ButtonComponent_1_1;
            },
            function (LabelComponent_1_1) {
                LabelComponent_1 = LabelComponent_1_1;
            }],
        execute: function() {
            Main = (function () {
                function Main() {
                }
                Main.prototype.showTextButton = function ($event) {
                    alert($event.sender.text);
                };
                Main.prototype.showTextLabel = function ($event) {
                    alert($event.sender.text);
                };
                Main = __decorate([
                    core_1.Component({
                        selector: 'Main',
                        //templateUrl:`app/views/button.html`,
                        templateUrl: "app/views/label.html",
                        directives: [ButtonComponent_1.ButtonComponent, LabelComponent_1.LabelComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Main);
                return Main;
            }());
            exports_1("Main", Main);
            browser_1.bootstrap(Main);
        }
    }
});
//# sourceMappingURL=Main.js.map