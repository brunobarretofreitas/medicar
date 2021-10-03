import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  template: `
    <div class="wrapper">
      <app-register-form></app-register-form>
    </div>
  `,
  styles: [
    `
      .wrapper {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export default class RegisterComponent {}
