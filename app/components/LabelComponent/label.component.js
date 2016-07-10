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
    var LabelComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LabelComponent = (function () {
                function LabelComponent() {
                    this.className = "label label-default";
                    this.text = "Default Label";
                    this.actionClick = new core_1.EventEmitter();
                    this.actionMouseDown = new core_1.EventEmitter();
                    this.actionMouseUp = new core_1.EventEmitter();
                    this.actionMouseOver = new core_1.EventEmitter();
                    this.actionMouseOut = new core_1.EventEmitter();
                }
                LabelComponent.prototype.doClick = function () {
                    this.actionClick.emit({ sender: this });
                };
                LabelComponent.prototype.doMouseDown = function () {
                    this.actionMouseDown.emit({ sender: this });
                };
                LabelComponent.prototype.doMouseUp = function () {
                    this.actionMouseUp.emit({ sender: this });
                };
                LabelComponent.prototype.doMouseOver = function () {
                    this.actionMouseOver.emit({ sender: this });
                };
                LabelComponent.prototype.doMouseOut = function () {
                    this.actionMouseOut.emit({ sender: this });
                };
                __decorate([
                    core_1.Input('className'), 
                    __metadata('design:type', String)
                ], LabelComponent.prototype, "className", void 0);
                __decorate([
                    core_1.Input('text'), 
                    __metadata('design:type', String)
                ], LabelComponent.prototype, "text", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], LabelComponent.prototype, "actionClick", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], LabelComponent.prototype, "actionMouseDown", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], LabelComponent.prototype, "actionMouseUp", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], LabelComponent.prototype, "actionMouseOver", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], LabelComponent.prototype, "actionMouseOut", void 0);
                LabelComponent = __decorate([
                    core_1.Component({
                        selector: 'LabelComponent',
                        template: "<label class=\"{{className}}\" (click)=\"doClick()\" (mousedown)=\"doMouseDown()\" (mouseup)=\"doMouseUp()\" (mouseover)=\"doMouseOver()\" (mouseout)=\"doMouseOut()\">{{ text }}</label>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], LabelComponent);
                return LabelComponent;
            }());
            exports_1("LabelComponent", LabelComponent);
        }
    }
});
//# sourceMappingURL=label.component.js.map