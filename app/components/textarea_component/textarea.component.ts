import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
	selector: 'TextAreaComponent',
	template: `<textarea #textarea class="{{className}}" id="{{id}}" name="{{name}}" value="{{value}}" placeholder="{{placeholder}}" (keydown)="doKeyDown($event , textarea.value)" (keyup)="doKeyUp($event , textarea.value)"></textarea>`
})

export class TextAreaComponent {
	
	@Input('className') className: string = "";
	@Input('id') id: string = "";
	@Input('name') name: string = "";
	@Input('value') value: string = "";
	@Input('placeholder') placeholder: string = "";

	@Output() public actionKeyDown = new EventEmitter();
	@Output() public actionKeyUp = new EventEmitter();

	public doKeyDown($event,value): void {
		this.value = value;
		this.actionKeyDown.emit({sender: this});
	}

	public doKeyUp($event,value): void {
		this.value = value;
		this.actionKeyUp.emit({sender: this});
	}

}