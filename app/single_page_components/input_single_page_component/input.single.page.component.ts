import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'
import {InputComponent} from 'app/components/input_component/input.component';

@Component({
	selector: 'InputSinglePageComponent',
	templateUrl: 'app/views/input.html',
	directives: [InputComponent]
})

export class InputSinglePageComponent {
	
}

bootstrap(InputSinglePageComponent)