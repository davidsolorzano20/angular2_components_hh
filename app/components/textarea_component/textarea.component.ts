import {Component, Input} from "angular2/core";

@Component({
	selector: 'TextAreaComponent',
	template: `<textarea class="{{className}}" id="{{id}}" name="{{name}}" value="{{value}}" placeholder="{{placeholder}}"></textarea>`
})

export class TextAreaComponent {
	
	@Input('className') className: string = "";
	@Input('id') id: string = "";
	@Input('name') name: string = "";
	@Input('value') value: string = "";
	@Input('placeholder') placeholder: string = "";


}