System.register(['angular2/core', 'app/components/button_component/button.component'], function(exports_1, context_1) {
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
    var core_1, button_component_1;
    var ButtonSinglePageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (button_component_1_1) {
                button_component_1 = button_component_1_1;
            }],
        execute: function() {
            ButtonSinglePageComponent = (function () {
                function ButtonSinglePageComponent() {
                }
                ButtonSinglePageComponent.prototype.showTextButton = function ($event) {
                    alert($event.sender.text);
                };
                ButtonSinglePageComponent = __decorate([
                    core_1.Component({
                        selector: 'ButtonSinglePageComponent',
                        templateUrl: 'app/views/button.html',
                        directives: [button_component_1.ButtonComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ButtonSinglePageComponent);
                return ButtonSinglePageComponent;
            }());
            exports_1("ButtonSinglePageComponent", ButtonSinglePageComponent);
        }
    }
});
//# sourceMappingURL=button.single.page.component.js.map