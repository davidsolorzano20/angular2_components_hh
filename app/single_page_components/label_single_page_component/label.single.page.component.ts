import {Component} from 'angular2/core';
import {LabelComponent} from 'app/components/label_component/label.component';

@Component({
	selector: 'LabelSinglePageComponent',
	templateUrl: 'app/views/label.html',
	directives: [LabelComponent]
})

export class LabelSinglePageComponent {

  public showTextLabel($event): void {
  	alert($event.sender.text);
  }
  
}