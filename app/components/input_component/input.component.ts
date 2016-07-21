import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
	selector: 'InputComponent',
	template: `<input #input type="{{inputType}}" class="{{className}}" id="{{id}}" name="{{name}}" (keypress)="doKeyPress($event, input.value)" (keyup)="doKeyUp($event, input.value)"/>`
})

export class InputComponent {
	
	@Input('inputType') inputType: string = "";
	@Input('className') className: string = "";
	@Input('value') value: string = "";
	@Input('name') name: string = "";
	@Input('id') id: string = "";

	@Output() public actionKeyPress = new EventEmitter();
	@Output() public actionKeyUp = new EventEmitter();

	public doKeyPress($event, value): void {
		this.value = value;
		this.actionKeyPress.emit({sender: this});
	}

	public doKeyUp($event, value): void {
		this.value = value;
		this.actionKeyUp.emit({sender: this});
	}
	
}