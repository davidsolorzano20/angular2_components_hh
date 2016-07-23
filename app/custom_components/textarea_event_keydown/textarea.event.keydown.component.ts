import {Component} from 'angular2/core';
import {TextAreaComponent} from 'app/components/textarea_component/textarea.component';

@Component({
	selector: 'TextAreaEventKeyDownComponent',
	template: `
				<TextAreaComponent className="form-control" placeholder="Hi !! I'm placeholder" (actionKeyDown)="doActionKeyDown($event)"></TextAreaComponent>
				<br>
				<label>{{characters}}</label>
			`,
	directives: [TextAreaComponent]
})

export class TextAreaEventKeyDownComponent {
	
	characters: string = "";

	public doActionKeyDown($event): void {
		this.characters = $event.sender.value;
	}

}