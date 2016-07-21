import {Component} from "angular2/core";
import {InputComponent} from "app/components/input_component/input.component";

@Component({
	selector: "InputEventKeyPressComponent",
	template: `
				<InputComponent inputType="text" className="form-control" (actionKeyPress)="doActionKeyPress($event)"></InputComponent>
				<label>{{characters}}</label>
			`,
	directives: [InputComponent]
})


export class InputEventKeyPressComponent{
	characters: string = "";

	public doActionKeyPress($event): void {
		this.characters = $event.sender.value;
	}
}
