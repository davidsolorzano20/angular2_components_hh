import {Component} from 'angular2/core';
import {InputComponent} from 'app/components/input_component/input.component';

@Component({
	selector: 'InputEventKeyDownComponent',
	template: `
				<InputComponent inputType="text" className="form-control" (actionKeyDown)="doActionKeyDown($event)"></InputComponent>
				<label>{{characters}}</label>
			`,
	directives: [InputComponent]
})

export class InputEventKeyDownComponent{

	characters: string = "";
	
	public doActionKeyDown($event): void {
		this.characters = $event.sender.value;
	}	
}