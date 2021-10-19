import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CreateTrasnactionComponent } from './create-trasnaction.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateTrasnactionComponent', () => {
  let component: CreateTrasnactionComponent;
  let fixture: ComponentFixture<CreateTrasnactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTrasnactionComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        NzFormModule,
        NzSelectModule,
        NzInputModule,
        NzSwitchModule,
        HttpClientModule,
        NzButtonModule,
        BrowserAnimationsModule,
        NzIconModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTrasnactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Check rendred inputs', () => {
    const formElement =
      fixture.debugElement.nativeElement.querySelector('#form');

    console.log(formElement);
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(6);
  });
  it('Check for initial form state', () => {
    const form = component.form;
    const initValue = {
      accountNumber: '',
      amount: '',
      currency: '',
      destination: '',
      feePaidByReceiver: false,
      metaDatas: [{ key: '', value: '' }],
    };
    expect(form.value).toEqual(initValue);
  });
  it('Check validations account number', () => {
    const accountInput: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('#form')
      .querySelectorAll('input')[0];
    const accountFromGroup = component.form.get('accountNumber');
    expect(accountInput.value).toEqual(accountFromGroup?.value);
    expect(accountFromGroup?.errors).not.toBeNull();
  });
  it('Check validations amount', () => {
    const amountInput: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('#form')
      .querySelectorAll('input')[1];
    const amountFromGroup = component.form.get('amount');
    expect(amountInput.value).toEqual(amountFromGroup?.value);
    expect(amountFromGroup?.errors).not.toBeNull();
  });

  it('Check validations currency', () => {
    const currencyInput: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('#form')
      .querySelectorAll('input')[2];
    const currencyFromGroup = component.form.get('currency');
    expect(currencyInput.value).toEqual(currencyFromGroup?.value);
    expect(currencyFromGroup?.errors).not.toBeNull();
  });

  it('Check validations currency', () => {
    const destinationInput: HTMLInputElement =
      fixture.debugElement.nativeElement
        .querySelector('#form')
        .querySelectorAll('input')[4];
    const destinationFromGroup = component.form.get('destination');
    expect(destinationInput.value).toEqual(destinationFromGroup?.value);
    expect(destinationFromGroup?.errors).not.toBeNull();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
