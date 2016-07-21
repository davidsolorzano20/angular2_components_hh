import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'
import {InputComponent} from 'app/components/input_component/input.component';
import {InputEventKeyPressComponent} from 'app/custom_components/input_event_keypress/input.event.keypress.component';
import {InputEventKeyUpComponent} from 'app/custom_components/input_event_keyup/input.event.keyup.component';

@Component({
	selector: 'InputSinglePageComponent',
	templateUrl: 'app/views/input.html',
	directives: [InputComponent,InputEventKeyPressComponent,InputEventKeyUpComponent]
})

export class InputSinglePageComponent {
	
}

bootstrap(InputSinglePageComponent)