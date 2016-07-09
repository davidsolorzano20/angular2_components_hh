import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ButtonComponent} from 'app/components/ButtonComponent/ButtonComponent';
import {LabelComponent} from 'app/components/LabelComponent/LabelComponent';

@Component({
  selector: 'Main',
  //templateUrl:`app/views/button.html`,
  templateUrl: `app/views/label.html`,
  directives: [ButtonComponent, LabelComponent]
})

export class Main {

  public showTextButton($event): void {
    alert($event.sender.text);
  }

  public showTextLabel($event): void {
  	alert($event.sender.text);
  }
}

bootstrap(Main)
