import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ButtonBase} from 'app/components/button/ButtonBase';

@Component({
  selector: 'Main',
  template:`
    <ButtonBase></ButtonBase>
    `,
  directives: [ButtonBase]
})

export class Main {}

bootstrap(Main)
