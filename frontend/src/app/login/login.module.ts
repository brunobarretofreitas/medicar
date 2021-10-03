import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import LoginComponent from './login.component';
import LoginRoutingModule from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './shared/login.service';
import { StoreModule } from '@ngrx/store';

import * as fromLogin from './store/login.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './store/login.effects';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromLogin.loginFeatureKey, fromLogin.reducer),
    EffectsModule.forFeature([LoginEffects]),
  ],
  providers: [LoginService],
})
export class LoginModule {}
