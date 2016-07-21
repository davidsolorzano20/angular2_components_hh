import {Component} from 'angular2/core';
import {InputComponent} from 'app/components/input_component/input.component';

@Component({
	selector: 'InputEventKeyUpComponent',
	template: `
				<InputComponent inputType="text" className="form-control" (actionKeyUp)="doActionKeyUp($event)"></InputComponent>
				<label>{{characters}}</label>
			`,
	directives: [InputComponent]
})

export class InputEventKeyUpComponent {
	characters: string = "";

	public doActionKeyUp($event): void {
		this.characters = $event.sender.value;
	}
}