import {Component, Input} from '@angular/core';

@Component({
  selector: 'cus-input',
  template: `
    <div class="input-group">
      <label>Name:</label>
      <input
       [type]="input_text"
       [id]="input_id"
       [class]="input_class"
       [placeholder]="placeholder">
    </div>
    <div>{{input_text}}</div>
  `,
  
})
export class HomeComponent {
  @Input() input_text = 'text';
  @Input() input_id: string;
   @Input() input_class='form-control';
  @Input() placeholder = 'Enter Name';
  
}
