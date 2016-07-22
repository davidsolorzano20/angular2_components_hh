import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {TextAreaComponent} from 'app/components/textarea_component/textarea.component';

@Component({
	selector: 'TextAreaSinglePageComponent',
	templateUrl: 'app/views/textarea.html'
	directives: [TextAreaComponent]
})

export class TextAreaSinglePageComponent {
	
}


bootstrap(TextAreaSinglePageComponent)
