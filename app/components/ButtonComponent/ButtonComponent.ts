import {Component} from 'angular2/core';
import {ButtonBase} from '../ButtonBase/ButtonBase';

@Component({
  selector: 'ButtonComponent'
  template: `
  	<ButtonBase></ButtonBase>
  `,
  directives: [ButtonBase]
})

export class ButtonComponent {}
