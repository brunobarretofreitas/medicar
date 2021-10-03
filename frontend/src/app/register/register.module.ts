import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import RegisterComponent from './register.component';
import RegisterRoutingModule from './register-routing.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterService } from './shared/register.service';

@NgModule({
  declarations: [RegisterComponent, RegisterFormComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [RegisterService],
})
export class RegisterModule {}
