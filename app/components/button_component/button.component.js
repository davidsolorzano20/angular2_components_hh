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
    var ButtonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ButtonComponent = (function () {
                function ButtonComponent() {
                    this.className = 'btn btn-default';
                    this.text = 'Button Default';
                    this.actionClick = new core_1.EventEmitter();
                    this.actionMouseOver = new core_1.EventEmitter();
                    this.actionMouseOut = new core_1.EventEmitter();
                    this.actionMouseDown = new core_1.EventEmitter();
                    this.actionMouseUp = new core_1.EventEmitter();
                }
                ButtonComponent.prototype.doClick = function () {
                    this.actionClick.emit({ sender: this });
                };
                ButtonComponent.prototype.doMouseOver = function () {
                    this.actionMouseOver.emit({ sender: this });
                };
                ButtonComponent.prototype.doMouseOut = function () {
                    this.actionMouseOut.emit({ sender: this });
                };
                ButtonComponent.prototype.doMouseDown = function () {
                    this.actionMouseDown.emit({ sender: this });
                };
                ButtonComponent.prototype.doMouseUp = function () {
                    this.actionMouseUp.emit({ sender: this });
                };
                __decorate([
                    core_1.Input('className'), 
                    __metadata('design:type', String)
                ], ButtonComponent.prototype, "className", void 0);
                __decorate([
                    core_1.Input('text'), 
                    __metadata('design:type', String)
                ], ButtonComponent.prototype, "text", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ButtonComponent.prototype, "actionClick", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ButtonComponent.prototype, "actionMouseOver", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ButtonComponent.prototype, "actionMouseOut", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ButtonComponent.prototype, "actionMouseDown", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ButtonComponent.prototype, "actionMouseUp", void 0);
                ButtonComponent = __decorate([
                    core_1.Component({
                        selector: 'ButtonComponent',
                        template: "\n    <button type=\"button\" class=\"{{className}}\" (click)=\"doClick()\" (mouseover)=\"doMouseOver()\" (mouseout)=\"doMouseOut()\" (mousedown)=\"doMouseDown()\" (mouseup)=\"doMouseUp()\">\n      {{text}}\n    </button>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ButtonComponent);
                return ButtonComponent;
            }());
            exports_1("ButtonComponent", ButtonComponent);
        }
    }
});
//# sourceMappingURL=button.component.js.map