import {Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'ButtonComponent',
  template: `
    <button type="button" class="{{className}}" (click)="doClick()" (mouseover)="doMouseOver()" (mouseout)="doMouseOut()" (mousedown)="doMouseDown()" (mouseup)="doMouseUp()">
      {{text}}
    </button>
  `
})

export class ButtonComponent {

	@Input('className') className: string = 'btn btn-default';
	@Input('text') text: string = 'Button Default';

	@Output() public actionClick = new EventEmitter();
	@Output() public actionMouseOver = new EventEmitter();
	@Output() public actionMouseOut = new EventEmitter();
	@Output() public actionMouseDown = new EventEmitter();
	@Output() public actionMouseUp = new EventEmitter();

	public doClick(): void {
		this.actionClick.emit({sender: this});
	}

	public doMouseOver(): void {
		this.actionMouseOver.emit({sender: this});
	}

	public doMouseOut(): void {
		this.actionMouseOut.emit({sender: this});
	}

	public doMouseDown(): void {
		this.actionMouseDown.emit({sender: this});
	}

	public doMouseUp(): void {
		this.actionMouseUp.emit({sender: this});
	}
}