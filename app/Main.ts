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
    	<ButtonComponent></ButtonComponent>
    	<ButtonComponent text="Button Primary" className="btn btn-primary"></ButtonComponent>
    	<ButtonComponent text="Button Success" className="btn btn-success"></ButtonComponent>
    	<ButtonComponent text="Button Info" className="btn btn-info"></ButtonComponent>
    	<ButtonComponent text="Button Warning" className="btn btn-warning"></ButtonComponent>
    	<ButtonComponent text="Button Danger" className="btn btn-danger"></ButtonComponent>
    	<ButtonComponent text="Button Link" className="btn btn-link"></ButtonComponent>    	
    </div>
    `,
  directives: [ButtonComponent]
})

export class Main {}

bootstrap(Main)
