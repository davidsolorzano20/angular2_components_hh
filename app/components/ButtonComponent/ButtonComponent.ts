import {Component, Input} from 'angular2/core';

@Component({
  selector: 'ButtonComponent',
  template: `
    <button type="button" class="{{className}}">
      {{text}}
    </button>
  `
})

export class ButtonComponent {

	@Input('className') className: string = 'btn btn-default';
	@Input('text') text: string = 'Button Default';
}