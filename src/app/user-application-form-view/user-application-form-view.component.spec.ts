import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApplicationFormViewComponent } from './user-application-form-view.component';

describe('UserApplicationFormViewComponent', () => {
  let component: UserApplicationFormViewComponent;
  let fixture: ComponentFixture<UserApplicationFormViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserApplicationFormViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserApplicationFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
