import {Component, Input} from 'angular2/core';

@Component({
	selector: 'InputComponent',
	template: `<input type="{{inputType}}" class="{{className}}" value="{{value}}"/>`
})

export class InputComponent {
	
	@Input('inputType') inputType: string = "";
	@Input('className') className: string = "";
	@Input('value') value: string = "";
	
}