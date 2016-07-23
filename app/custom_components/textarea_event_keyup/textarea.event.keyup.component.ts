import {Component} from 'angular2/core';
import {TextAreaComponent} from 'app/components/textarea_component/textarea.component';

@Component({
	selector: 'TextAreaEventKeyUpComponent',
	template: `
				<TextAreaComponent className="form-control" placeholder="Hi !! I'm placeholder" (actionKeyUp)="doActionKeyUp($event)"></TextAreaComponent>
				<br>
				<label>{{characters}}</label>
			`
			,
	directives: [TextAreaComponent]
})

export class TextAreaEventKeyUpComponent {
	
	characters: string = "";

	public doActionKeyUp($event): void {
		this.characters = $event.sender.value;
	}
}