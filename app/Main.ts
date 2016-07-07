import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ButtonComponent} from 'app/components/ButtonComponent/ButtonComponent';

@Component({
  selector: 'Main',
  template:`
  	<div class="col-md-12">
      <div class="col-md-3">
          <h3>Buttons</h3>
          <div class="col-md-6">
    	       <ButtonComponent text="Button Default"></ButtonComponent>
             <br>
             <br>
             <ButtonComponent text="Button Primary" className="btn btn-primary"></ButtonComponent>
             <br>
             <br>
             <ButtonComponent text="Button Success" className="btn btn-success"></ButtonComponent>
             <br>
             <br>
             <ButtonComponent text="Button Info" className="btn btn-info"></ButtonComponent>
          </div>
          <div class="col-md-6">
            <ButtonComponent text="Button Warning" className="btn btn-warning"></ButtonComponent>
            <br>
            <br>
            <ButtonComponent text="Button Danger" className="btn btn-danger"></ButtonComponent>
            <br>
            <br>
            <ButtonComponent text="Button Link" className="btn btn-link"></ButtonComponent>      
          </div>
      </div>
      <div class="col-md-4">
    	   <h3>Event Click Button</h3>
         <div class="col-md-6">
            <ButtonComponent text="Button Default EventClick" (actionClick)="showTextButton($event)"></ButtonComponent>
            <br>
            <br>
            <ButtonComponent text="Button Primary EventClick" (actionClick)="showTextButton($event)" className="btn btn-primary"></ButtonComponent>
            <br>
            <br>
            <ButtonComponent text="Button Success EventClick" (actionClick)="showTextButton($event)" className="btn btn-success"></ButtonComponent>
            <br>
            <br>
            <ButtonComponent text="Button Info EventClick" (actionClick)="showTextButton($event)" className="btn btn-info"></ButtonComponent>        
         </div>
         <div class="col-md-6">
            <ButtonComponent text="Button Warning EventClick" (actionClick)="showTextButton($event)" className="btn btn-warning"></ButtonComponent>
            <br>
            <br>
            <ButtonComponent text="Button Danger EventClick" (actionClick)="showTextButton($event)" className="btn btn-danger"></ButtonComponent>
            <br>
            <br>
            <ButtonComponent text="Button Link EventClick" (actionClick)="showTextButton($event)" className="btn btn-link"></ButtonComponent>         
         </div>
      </div>
      <div class="col-md-5">
          <h3>Event MouseOver Button</h3>
          <div class="col-md-6">
            <ButtonComponent text="Button Default EventMouseOver" (actionMouseOver)="showTextButton($event)"></ButtonComponent> 
            <br>
            <br>
            <ButtonComponent text="Button Primary EventMouseOver" (actionMouseOver)="showTextButton($event)" className="btn btn-primary"></ButtonComponent>
            <br>
            <br>
            <ButtonComponent text="Button Success EventMouseOver" (actionMouseOver)="showTextButton($event)" className="btn btn-success"></ButtonComponent>
            <br>
            <br>
            <ButtonComponent text="Button Info EventMouseOver" (actionMouseOver)="showTextButton($event)" className="btn btn-info"></ButtonComponent>            
          </div>
          <div class="col-md-6">
            <ButtonComponent text="Button Warning EventMouseOver" (actionMouseOver)="showTextButton($event)" className="btn btn-warning"></ButtonComponent>
            <br>
            <br>
            <ButtonComponent text="Button Danger EventMouseOver" (actionMouseOver)="showTextButton($event)" className="btn btn-danger"></ButtonComponent>     
            <br>
            <br>       
            <ButtonComponent text="Button Link EventMouseOver" (actionMouseOver)="showTextButton($event)" className="btn btn-link"></ButtonComponent>            
          </div>   
      </div>      
    </div>

    <div class="col-md-12">
      <div class="col-md-6">
        <h3>Event MouseOut Button</h3>
        <div class="col-md-6">
          <ButtonComponent text="Button Default EventMouseOut" (actionMouseOut)="showTextButton($event)"></ButtonComponent>
          <br>
          <br>
          <ButtonComponent text="Button Primary EventMouseOut" (actionMouseOut)="showTextButton($event)" className="btn btn-primary"></ButtonComponent>
          <br>
          <br>
          <ButtonComponent text="Button Success EventMouseOut" (actionMouseOut)="showTextButton($event)" className="btn btn-success"></ButtonComponent>
          <br>
          <br>        
          <ButtonComponent text="Button Info EventMouseOut" (actionMouseOut)="showTextButton($event)" className="btn btn-info"></ButtonComponent>
        </div>
        <div class="col-md-6">
          <ButtonComponent text="Button Warning EventMouseOut" (actionMouseOut)="showTextButton($event)" className="btn btn-warning"></ButtonComponent>
          <br>
          <br>
          <ButtonComponent text="Button Danger EventMouseOut" (actionMouseOut)="showTextButton($event)" className="btn btn-danger"></ButtonComponent>
          <br>
          <br>  
          <ButtonComponent text="Button Link EventMouseOut" (actionMouseOut)="showTextButton($event)" className="btn btn-link"></ButtonComponent>
        </div>
      </div>
      <div class="col-md-6">
        <h3>Event MouseDown Button</h3>
        <div class="col-md-6">
          <ButtonComponent text="Button Default EventMouseDown" (actionMouseDown)="showTextButton($event)"></ButtonComponent>
          <br>
          <br>
          <ButtonComponent text="Button Primary EventMouseDown" (actionMouseDown)="showTextButton($event)" className="btn btn-primary"></ButtonComponent>
          <br>
          <br>
          <ButtonComponent text="Button Success EventMouseDown" (actionMouseDown)="showTextButton($event)" className="btn btn-success"></ButtonComponent>
          <br>
          <br>
          <ButtonComponent text="Button Info EventMouseDown" (actionMouseDown)="showTextButton($event)" className="btn btn-info"></ButtonComponent>          
        </div>
        <div class="col-md-6">
          <ButtonComponent text="Button Warning EventMouseDown" (actionMouseDown)="showTextButton($event)" className="btn btn-warning"></ButtonComponent>
          <br>
          <br>
          <ButtonComponent text="Button Danger EventMouseDown" (actionMouseDown)="showTextButton($event)" className="btn btn-danger"></ButtonComponent>
          <br>
          <br>
          <ButtonComponent text="Button Link EventMouseDown" (actionMouseDown)="showTextButton($event)" className="btn btn-link"></ButtonComponent>        
        </div>
      </div>
    </div>

    <div class="col-md-12">
      <h3>Event MouseUp Button</h3>
      <div class="col-md-6">
        <div class="col-md-6">
          <ButtonComponent text="Button Default EventMouseUp" (actionMouseUp)="showTextButton($event)"></ButtonComponent>
          <br>
          <br>
          <ButtonComponent text="Button Primary EventMouseUp" (actionMouseUp)="showTextButton($event)" className="btn btn-primary"></ButtonComponent>
          <br>
          <br>
          <ButtonComponent text="Button Success EventMouseUp" (actionMouseUp)="showTextButton($event)" className="btn btn-success"></ButtonComponent>
          <br>
          <br>
          <ButtonComponent text="Button Info EventMouseUp" (actionMouseUp)="showTextButton($event)" className="btn btn-info"></ButtonComponent>
        </div>
        <div class="col-md-6">
          <ButtonComponent text="Button Warning EventMouseUp" (actionMouseUp)="showTextButton($event)" className="btn btn-warning"></ButtonComponent>
          <br>
          <br>
          <ButtonComponent text="Button Danger EventMouseUp" (actionMouseUp)="showTextButton($event)" className="btn btn-danger"></ButtonComponent>
          <br>
          <br>
          <ButtonComponent text="Button Link EventMouseUp" (actionMouseUp)="showTextButton($event)" className="btn btn-link"></ButtonComponent>      
        </div>        
      </div>
      <div class="col-md-6">
      </div>      
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
