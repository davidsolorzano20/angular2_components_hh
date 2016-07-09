import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
	selector: 'LabelComponent',
	template: `<label class="{{className}}" (click)="doClick()" (mousedown)="doMouseDown()" (mouseup)="doMouseUp()" (mouseover)="doMouseOver()" (mouseout)="doMouseOut()">{{ text }}</label>`
})

export class LabelComponent {

	@Input('className') className: string = "label label-default";
	@Input('text') text: string = "Default Label";

	@Output() public actionClick = new EventEmitter();
	@Output() public actionMouseDown = new EventEmitter();
	@Output() public actionMouseUp = new EventEmitter();
	@Output() public actionMouseOver = new EventEmitter();
	@Output() public actionMouseOut = new EventEmitter();

	public doClick(): void {
		this.actionClick.emit({sender: this});
	}

	public doMouseDown(): void {
		this.actionMouseDown.emit({sender: this});
	}

	public doMouseUp(): void {
		this.actionMouseUp.emit({sender: this});
	}

	public doMouseOver(): void {
		this.actionMouseOver.emit({sender: this});
	}

	public doMouseOut(): void {
		this.actionMouseOut.emit({sender: this});
	}

}