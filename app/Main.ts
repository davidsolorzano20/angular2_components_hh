import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
  selector: 'Main',
  template: `
        <div class="col-md-12">
          <h2>Angular 2 - SB Admin - Bootstrap Admin Template</h2>
        </div>     
  `
})

export class Main {

}

bootstrap(Main)
