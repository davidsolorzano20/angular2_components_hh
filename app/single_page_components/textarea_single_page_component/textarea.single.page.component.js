System.register(['angular2/core', 'angular2/platform/browser', 'app/components/textarea_component/textarea.component', 'app/custom_components/textarea_event_keydown/textarea.event.keydown.component', 'app/custom_components/textarea_event_keyup/textarea.event.keyup.component'], function(exports_1, context_1) {
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
    var core_1, browser_1, textarea_component_1, textarea_event_keydown_component_1, textarea_event_keyup_component_1;
    var TextAreaSinglePageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (textarea_component_1_1) {
                textarea_component_1 = textarea_component_1_1;
            },
            function (textarea_event_keydown_component_1_1) {
                textarea_event_keydown_component_1 = textarea_event_keydown_component_1_1;
            },
            function (textarea_event_keyup_component_1_1) {
                textarea_event_keyup_component_1 = textarea_event_keyup_component_1_1;
            }],
        execute: function() {
            TextAreaSinglePageComponent = (function () {
                function TextAreaSinglePageComponent() {
                }
                TextAreaSinglePageComponent = __decorate([
                    core_1.Component({
                        selector: 'TextAreaSinglePageComponent',
                        templateUrl: 'app/views/textarea.html',
                        directives: [textarea_component_1.TextAreaComponent, textarea_event_keydown_component_1.TextAreaEventKeyDownComponent, textarea_event_keyup_component_1.TextAreaEventKeyUpComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TextAreaSinglePageComponent);
                return TextAreaSinglePageComponent;
            }());
            exports_1("TextAreaSinglePageComponent", TextAreaSinglePageComponent);
            browser_1.bootstrap(TextAreaSinglePageComponent);
        }
    }
});
//# sourceMappingURL=textarea.single.page.component.js.map