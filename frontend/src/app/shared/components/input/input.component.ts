import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: 'text' | 'number' | 'password' = 'text';
  @Input() label: string = '';
  @Input() disabled: boolean = false;

  showPassword = false;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  public val: any;

  onChange: any = () => {};
  onTouched: any = () => {};

  set value(value: any) {
    if (value !== this.val) {
      this.val = value;
      this.onChange(value);
    }
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggleShowPassword() {
    if (!this.showPassword) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }

    this.showPassword = !this.showPassword;
  }
}
