import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ButtonComponent} from 'app/components/ButtonComponent/ButtonComponent';

@Component({
  selector: 'Main',
  template:`
  	<div>
  		<h3>Buttons</h3>
  	</div>
  	<div>
    	<ButtonComponent></ButtonComponent>
    </div>
    `,
  directives: [ButtonComponent]
})

export class Main {}

bootstrap(Main)
