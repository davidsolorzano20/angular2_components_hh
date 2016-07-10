import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ButtonComponent} from 'app/components/button_component/button.component';

@Component({
	selector: 'ButtonSinglePageComponent',
	templateUrl: 'app/views/button.html',
	directives: [ButtonComponent]
})

export class ButtonSinglePageComponent {

	public showTextButton($event): void {
		alert($event.sender.text);
	}

}
