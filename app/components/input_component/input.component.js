System.register(['angular2/core'], function(exports_1, context_1) {
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
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputComponent = (function () {
                function InputComponent() {
                    this.inputType = "";
                    this.className = "";
                    this.value = "";
                    this.name = "";
                    this.id = "";
                    this.actionKeyPress = new core_1.EventEmitter();
                    this.actionKeyUp = new core_1.EventEmitter();
                    this.actionKeyDown = new core_1.EventEmitter();
                }
                InputComponent.prototype.doKeyPress = function ($event, value) {
                    this.value = value;
                    this.actionKeyPress.emit({ sender: this });
                };
                InputComponent.prototype.doKeyUp = function ($event, value) {
                    this.value = value;
                    this.actionKeyUp.emit({ sender: this });
                };
                InputComponent.prototype.doKeyDown = function ($event, value) {
                    this.value = value;
                    this.actionKeyDown.emit({ sender: this });
                };
                __decorate([
                    core_1.Input('inputType'), 
                    __metadata('design:type', String)
                ], InputComponent.prototype, "inputType", void 0);
                __decorate([
                    core_1.Input('className'), 
                    __metadata('design:type', String)
                ], InputComponent.prototype, "className", void 0);
                __decorate([
                    core_1.Input('value'), 
                    __metadata('design:type', String)
                ], InputComponent.prototype, "value", void 0);
                __decorate([
                    core_1.Input('name'), 
                    __metadata('design:type', String)
                ], InputComponent.prototype, "name", void 0);
                __decorate([
                    core_1.Input('id'), 
                    __metadata('design:type', String)
                ], InputComponent.prototype, "id", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], InputComponent.prototype, "actionKeyPress", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], InputComponent.prototype, "actionKeyUp", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], InputComponent.prototype, "actionKeyDown", void 0);
                InputComponent = __decorate([
                    core_1.Component({
                        selector: 'InputComponent',
                        template: "<input #input type=\"{{inputType}}\" class=\"{{className}}\" id=\"{{id}}\" name=\"{{name}}\" (keypress)=\"doKeyPress($event, input.value)\" (keyup)=\"doKeyUp($event, input.value)\" (keydown)=\"doKeyDown($event, input.value)\"/>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputComponent);
                return InputComponent;
            }());
            exports_1("InputComponent", InputComponent);
        }
    }
});
//# sourceMappingURL=input.component.js.map