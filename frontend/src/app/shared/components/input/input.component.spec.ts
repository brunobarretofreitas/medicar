import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let input: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    input = fixture.nativeElement.querySelector('input');
  });

  it('should create a Input of type text when provided via @Input', () => {
    component.type = 'text';
    fixture.detectChanges();
    expect(input.type).toBe('text');
  });

  it('should create a Input of type number when provided via @Input', () => {
    component.type = 'number';
    fixture.detectChanges();
    expect(input.type).toBe('number');
  });
});
