System.register(['angular2/core', 'angular2/platform/browser', 'app/single_page_components/button_single_page_component/button.single.page.component', 'app/single_page_components/label_single_page_component/label.single.page.component', 'app/single_page_components/input_single_page_component/input.single.page.component'], function(exports_1, context_1) {
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
    var core_1, browser_1, button_single_page_component_1, label_single_page_component_1, input_single_page_component_1;
    var Main;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (button_single_page_component_1_1) {
                button_single_page_component_1 = button_single_page_component_1_1;
            },
            function (label_single_page_component_1_1) {
                label_single_page_component_1 = label_single_page_component_1_1;
            },
            function (input_single_page_component_1_1) {
                input_single_page_component_1 = input_single_page_component_1_1;
            }],
        execute: function() {
            Main = (function () {
                function Main() {
                }
                Main = __decorate([
                    core_1.Component({
                        selector: 'Main',
                        template: "\n        <div class=\"col-md-12\">\n          <h2>BUTTON</h2>\n        </div>\n        <ButtonSinglePageComponent></ButtonSinglePageComponent>\n        <div class=\"col-md-12\">\n          <h2>LABEL</h2>\n        </div>\n        <LabelSinglePageComponent></LabelSinglePageComponent>\n        <div class=\"col-md-12\">\n          <h2>INPUT</h2>\n        </div>\n        <InputSinglePageComponent></InputSinglePageComponent>\n  ",
                        directives: [button_single_page_component_1.ButtonSinglePageComponent, label_single_page_component_1.LabelSinglePageComponent, input_single_page_component_1.InputSinglePageComponent]
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