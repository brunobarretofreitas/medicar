import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonLinkComponent } from './components/button-link/button-link.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    InputComponent,
    CheckboxComponent,
    ButtonComponent,
    NavbarComponent,
    ButtonLinkComponent,
  ],
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  exports: [
    InputComponent,
    CheckboxComponent,
    ButtonComponent,
    NavbarComponent,
    ButtonLinkComponent,
  ],
})
export class SharedModule {}
