import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ButtonComponent} from 'app/components/ButtonComponent/ButtonComponent';
import {LabelComponent} from 'app/components/LabelComponent/LabelComponent';

@Component({
  selector: 'Main',
  //templateUrl:`app/components/views/button.html`,
  template: `<LabelComponent></LabelComponent>`,
  directives: [ButtonComponent, LabelComponent]
})

export class Main {

  private showTextButton($event): void {
    alert($event.sender.text);
  }

}

bootstrap(Main)
