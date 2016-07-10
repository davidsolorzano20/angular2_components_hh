import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ButtonSinglePageComponent} from 'app/single_page_components/button_single_page_component/button.single.page.component';
import {LabelSinglePageComponent} from 'app/single_page_components/label_single_page_component/label.single.page.component';
import {InputSinglePageComponent} from 'app/single_page_components/input_single_page_component/input.single.page.component';

@Component({
  selector: 'Main',
  template: `
        <div class="col-md-12">
          <h2>BUTTON</h2>
        </div>
        <ButtonSinglePageComponent></ButtonSinglePageComponent>
        <div class="col-md-12">
          <h2>LABEL</h2>
        </div>
        <LabelSinglePageComponent></LabelSinglePageComponent>
        <div class="col-md-12">
          <h2>INPUT</h2>
        </div>
        <InputSinglePageComponent></InputSinglePageComponent>
  `,
  directives: [ButtonSinglePageComponent,LabelSinglePageComponent,InputSinglePageComponent]
})

export class Main {

}

bootstrap(Main)
