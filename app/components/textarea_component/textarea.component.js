System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var TextAreaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TextAreaComponent = (function () {
                function TextAreaComponent() {
                    this.className = "";
                    this.id = "";
                    this.name = "";
                    this.value = "";
                    this.placeholder = "";
                    this.actionKeyDown = new core_1.EventEmitter();
                    this.actionKeyUp = new core_1.EventEmitter();
                }
                TextAreaComponent.prototype.doKeyDown = function ($event, value) {
                    this.value = value;
                    this.actionKeyDown.emit({ sender: this });
                };
                TextAreaComponent.prototype.doKeyUp = function ($event, value) {
                    this.value = value;
                    this.actionKeyUp.emit({ sender: this });
                };
                __decorate([
                    core_1.Input('className'), 
                    __metadata('design:type', String)
                ], TextAreaComponent.prototype, "className", void 0);
                __decorate([
                    core_1.Input('id'), 
                    __metadata('design:type', String)
                ], TextAreaComponent.prototype, "id", void 0);
                __decorate([
                    core_1.Input('name'), 
                    __metadata('design:type', String)
                ], TextAreaComponent.prototype, "name", void 0);
                __decorate([
                    core_1.Input('value'), 
                    __metadata('design:type', String)
                ], TextAreaComponent.prototype, "value", void 0);
                __decorate([
                    core_1.Input('placeholder'), 
                    __metadata('design:type', String)
                ], TextAreaComponent.prototype, "placeholder", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TextAreaComponent.prototype, "actionKeyDown", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TextAreaComponent.prototype, "actionKeyUp", void 0);
                TextAreaComponent = __decorate([
                    core_1.Component({
                        selector: 'TextAreaComponent',
                        template: "<textarea #textarea class=\"{{className}}\" id=\"{{id}}\" name=\"{{name}}\" value=\"{{value}}\" placeholder=\"{{placeholder}}\" (keydown)=\"doKeyDown($event , textarea.value)\" (keyup)=\"doKeyUp($event , textarea.value)\"></textarea>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TextAreaComponent);
                return TextAreaComponent;
            }());
            exports_1("TextAreaComponent", TextAreaComponent);
        }
    }
});
//# sourceMappingURL=textarea.component.js.map