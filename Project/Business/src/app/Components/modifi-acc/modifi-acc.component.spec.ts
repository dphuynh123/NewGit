import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiAccComponent } from './modifi-acc.component';

describe('ModifiAccComponent', () => {
  let component: ModifiAccComponent;
  let fixture: ComponentFixture<ModifiAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
