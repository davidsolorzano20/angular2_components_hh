System.register(['angular2/core', 'angular2/platform/browser', 'app/components/input_component/input.component', 'app/custom_components/input_event_keypress/input.event.keypress.component', 'app/custom_components/input_event_keyup/input.event.keyup.component', 'app/custom_components/input_event_keydown/input.event.keydown.component'], function(exports_1, context_1) {
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
    var core_1, browser_1, input_component_1, input_event_keypress_component_1, input_event_keyup_component_1, input_event_keydown_component_1;
    var InputSinglePageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            },
            function (input_event_keypress_component_1_1) {
                input_event_keypress_component_1 = input_event_keypress_component_1_1;
            },
            function (input_event_keyup_component_1_1) {
                input_event_keyup_component_1 = input_event_keyup_component_1_1;
            },
            function (input_event_keydown_component_1_1) {
                input_event_keydown_component_1 = input_event_keydown_component_1_1;
            }],
        execute: function() {
            InputSinglePageComponent = (function () {
                function InputSinglePageComponent() {
                }
                InputSinglePageComponent = __decorate([
                    core_1.Component({
                        selector: 'InputSinglePageComponent',
                        templateUrl: 'app/views/input.html',
                        directives: [input_component_1.InputComponent, input_event_keypress_component_1.InputEventKeyPressComponent, input_event_keyup_component_1.InputEventKeyUpComponent, input_event_keydown_component_1.InputEventKeyDownComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputSinglePageComponent);
                return InputSinglePageComponent;
            }());
            exports_1("InputSinglePageComponent", InputSinglePageComponent);
            browser_1.bootstrap(InputSinglePageComponent);
        }
    }
});
//# sourceMappingURL=input.single.page.component.js.map