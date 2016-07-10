import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ButtonSinglePageComponent} from 'app/single_page_components/button_single_page_component/button.single.page.component';
import {LabelSinglePageComponent} from 'app/single_page_components/label_single_page_component/label.single.page.component';
import {InputSinglePageComponent} from 'app/single_page_components/input_single_page_component/input.single.page.component';

@Component({
  selector: 'Main',
  template: `
        <ButtonSinglePageComponent></ButtonSinglePageComponent>
        <LabelSinglePageComponent></LabelSinglePageComponent>
        <InputSinglePageComponent></InputSinglePageComponent>
  `,
  directives: [ButtonSinglePageComponent,LabelSinglePageComponent,InputSinglePageComponent]
})

export class Main {

}

bootstrap(Main)
