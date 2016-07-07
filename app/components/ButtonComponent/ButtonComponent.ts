import {Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'ButtonComponent',
  template: `
    <button type="button" class="{{className}}" (click)="doClick()">
      {{text}}
    </button>
  `
})

export class ButtonComponent {

	@Input('className') className: string = 'btn btn-default';
	@Input('text') text: string = 'Button Default';

	@Output() public actionClick = new EventEmitter();

	public doClick(): void {
		this.actionClick.emit({sender: this});
	}
}