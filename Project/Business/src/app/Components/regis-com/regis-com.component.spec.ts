import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisComComponent } from './regis-com.component';

describe('RegisComComponent', () => {
  let component: RegisComComponent;
  let fixture: ComponentFixture<RegisComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
