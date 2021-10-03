import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.scss'],
})
export class ButtonLinkComponent {
  /**
   * Custom behaviour for (click) event from angular
   */
  @Output() onClick = new EventEmitter<any>();
}
