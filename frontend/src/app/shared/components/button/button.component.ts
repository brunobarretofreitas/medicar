import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  /**
   * Sets button type
   *
   * button: The button is a clickable button
   *
   * submit: The button is a submit button (submits form-data)
   *
   * reset: The button is a reset button (resets the form-data to its initial values)
   */
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  /**
   * Sets button disabled state
   */
  @Input() isDisabled: boolean | null = false;
  /**
   * Custom theme for button
   */
  @Input() theme: 'primary' | 'secondary' = 'primary';
  /**
   * Size of the button: normal | small
   */
  @Input() size: 'normal' | 'small' = 'normal';
  /**
   * Custom behaviour for (click) event from angular
   */
  @Output() onClick = new EventEmitter<any>();
}
