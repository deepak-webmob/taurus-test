import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowTrasnactionsComponent } from './show-trasnactions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

describe('ShowTrasnactionsComponent', () => {
  let component: ShowTrasnactionsComponent;
  let fixture: ComponentFixture<ShowTrasnactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowTrasnactionsComponent],
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
        NzDatePickerModule,
        BrowserAnimationsModule,
        NzIconModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTrasnactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Check rendred inputs', () => {
    const formElement =
      fixture.debugElement.nativeElement.querySelector('#filterForm');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(3);
  });

  it('Check for initial form state', () => {
    const form = component.filterForm;
    const initValue = {
      rangePicker: [],
      searchString: '',
    };
    expect(form.value).toEqual(initValue);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
