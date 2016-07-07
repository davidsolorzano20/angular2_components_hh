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
      <ButtonComponent text="Button Default EventClick" (actionClick)="showTextButton($event)"></ButtonComponent>
      <ButtonComponent text="Button Primary EventClick" (actionClick)="showTextButton($event)" className="btn btn-primary"></ButtonComponent>
      <ButtonComponent text="Button Success EventClick" (actionClick)="showTextButton($event)" className="btn btn-success"></ButtonComponent>
      <ButtonComponent text="Button Info EventClick" (actionClick)="showTextButton($event)" className="btn btn-info"></ButtonComponent>
      <ButtonComponent text="Button Warning EventClick" (actionClick)="showTextButton($event)" className="btn btn-warning"></ButtonComponent>
      <ButtonComponent text="Button Danger EventClick" (actionClick)="showTextButton($event)" className="btn btn-danger"></ButtonComponent>
      <ButtonComponent text="Button Link EventClick" (actionClick)="showTextButton($event)" className="btn btn-link"></ButtonComponent>     
    </div>
    <div>
      <h3>Event MouseOver Button</h3>
    </div>
    <div class="row">
      <ButtonComponent text="Button Default EventMouseOver" (actionMouseOver)="showTextButton($event)"></ButtonComponent>
      <ButtonComponent text="Button Primary EventMouseOver" (actionMouseOver)="showTextButton($event)" className="btn btn-primary"></ButtonComponent>
      <ButtonComponent text="Button Success EventMouseOver" (actionMouseOver)="showTextButton($event)" className="btn btn-success"></ButtonComponent>
      <ButtonComponent text="Button Info EventMouseOver" (actionMouseOver)="showTextButton($event)" className="btn btn-info"></ButtonComponent>
      <ButtonComponent text="Button Warning EventMouseOver" (actionMouseOver)="showTextButton($event)" className="btn btn-warning"></ButtonComponent>
      <ButtonComponent text="Button Danger EventMouseOver" (actionMouseOver)="showTextButton($event)" className="btn btn-danger"></ButtonComponent>
      <ButtonComponent text="Button Link EventMouseOver" (actionMouseOver)="showTextButton($event)" className="btn btn-link"></ButtonComponent>     
    </div>
    <div>
      <h3>Event MouseOut Button</h3>
    </div>
    <div class="row">
      <ButtonComponent text="Button Default EventMouseOut" (actionMouseOut)="showTextButton($event)"></ButtonComponent>
      <ButtonComponent text="Button Primary EventMouseOut" (actionMouseOut)="showTextButton($event)" className="btn btn-primary"></ButtonComponent>
      <ButtonComponent text="Button Success EventMouseOut" (actionMouseOut)="showTextButton($event)" className="btn btn-success"></ButtonComponent>
      <ButtonComponent text="Button Info EventMouseOut" (actionMouseOut)="showTextButton($event)" className="btn btn-info"></ButtonComponent>
      <ButtonComponent text="Button Warning EventMouseOut" (actionMouseOut)="showTextButton($event)" className="btn btn-warning"></ButtonComponent>
      <ButtonComponent text="Button Danger EventMouseOut" (actionMouseOut)="showTextButton($event)" className="btn btn-danger"></ButtonComponent>
      <ButtonComponent text="Button Link EventMouseOut" (actionMouseOut)="showTextButton($event)" className="btn btn-link"></ButtonComponent>     
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
