import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {SelectComponent} from 'app/components/select_component/select.component';

@Component({
	selector: 'SelectSinglePageComponent',
	templateUrl: 'app/views/select.html',
	directives: [SelectComponent]
})

export class SelectSinglePageComponent {
	
}

bootstrap(SelectSinglePageComponent)