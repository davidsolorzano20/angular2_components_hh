import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {TextAreaComponent} from 'app/components/textarea_component/textarea.component';
import {TextAreaEventKeyDownComponent} from 'app/custom_components/textarea_event_keydown/textarea.event.keydown.component';
import {TextAreaEventKeyUpComponent} from 'app/custom_components/textarea_event_keyup/textarea.event.keyup.component';

@Component({
	selector: 'TextAreaSinglePageComponent',
	templateUrl: 'app/views/textarea.html'
	directives: [TextAreaComponent,TextAreaEventKeyDownComponent,TextAreaEventKeyUpComponent]
})

export class TextAreaSinglePageComponent {
	
}


bootstrap(TextAreaSinglePageComponent)
