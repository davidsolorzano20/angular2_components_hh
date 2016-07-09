import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ButtonComponent} from 'app/components/ButtonComponent/ButtonComponent';
import {LabelComponent} from 'app/components/LabelComponent/LabelComponent';
import {InputComponent} from 'app/components/InputComponent/InputComponent';

@Component({
  selector: 'Main',
  //templateUrl:`app/views/button.html`,
  //templateUrl: `app/views/label.html`,
  templateUrl:`app/views/input.html`,
  directives: [ButtonComponent, LabelComponent, InputComponent]
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
