import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComComponent } from './login-com.component';

describe('LoginComComponent', () => {
  let component: LoginComComponent;
  let fixture: ComponentFixture<LoginComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
