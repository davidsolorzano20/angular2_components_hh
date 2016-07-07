import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ButtonComponent} from 'app/components/ButtonComponent/ButtonComponent';

@Component({
  selector: 'Main',
  template:`
  	<div>
  		<h3>Buttons</h3>
  	</div>
  	<div class="row">
    	<ButtonComponent text="Button Default"></ButtonComponent>
    	<ButtonComponent text="Button Primary" className="btn btn-primary"></ButtonComponent>
    	<ButtonComponent text="Button Success" className="btn btn-success"></ButtonComponent>
    	<ButtonComponent text="Button Info" className="btn btn-info"></ButtonComponent>
    	<ButtonComponent text="Button Warning" className="btn btn-warning"></ButtonComponent>
    	<ButtonComponent text="Button Danger" className="btn btn-danger"></ButtonComponent>
    	<ButtonComponent text="Button Link" className="btn btn-link"></ButtonComponent>    	
    </div>
    <div>
      <h3>Event Click Button</h3>
    </div>
    <div class="row">
      <ButtonComponent text="Button Default" (actionClick)="showTextButton($event)"></ButtonComponent>
      <ButtonComponent text="Button Primary" (actionClick)="showTextButton($event)" className="btn btn-primary"></ButtonComponent>
      <ButtonComponent text="Button Success" (actionClick)="showTextButton($event)" className="btn btn-success"></ButtonComponent>
      <ButtonComponent text="Button Info" (actionClick)="showTextButton($event)" className="btn btn-info"></ButtonComponent>
      <ButtonComponent text="Button Warning" (actionClick)="showTextButton($event)" className="btn btn-warning"></ButtonComponent>
      <ButtonComponent text="Button Danger" (actionClick)="showTextButton($event)" className="btn btn-danger"></ButtonComponent>
      <ButtonComponent text="Button Link" (actionClick)="showTextButton($event)" className="btn btn-link"></ButtonComponent>     
    </div>
    <div>
      <h3>Event MouseOver Button</h3>
    </div>
    <div class="row">
      <ButtonComponent text="Button Default" (actionMouseOver)="showTextButton($event)"></ButtonComponent>
      <ButtonComponent text="Button Primary" (actionMouseOver)="showTextButton($event)" className="btn btn-primary"></ButtonComponent>
      <ButtonComponent text="Button Success" (actionMouseOver)="showTextButton($event)" className="btn btn-success"></ButtonComponent>
      <ButtonComponent text="Button Info" (actionMouseOver)="showTextButton($event)" className="btn btn-info"></ButtonComponent>
      <ButtonComponent text="Button Warning" (actionMouseOver)="showTextButton($event)" className="btn btn-warning"></ButtonComponent>
      <ButtonComponent text="Button Danger" (actionMouseOver)="showTextButton($event)" className="btn btn-danger"></ButtonComponent>
      <ButtonComponent text="Button Link" (actionMouseOver)="showTextButton($event)" className="btn btn-link"></ButtonComponent>     
    </div>
    `,
  directives: [ButtonComponent]
})

export class Main {

  private showTextButton($event): void {
    alert($event.sender.text);
  }

}

bootstrap(Main)
