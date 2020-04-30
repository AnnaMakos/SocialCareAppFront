import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFormViewComponent } from './application-form-view.component';

describe('ApplicationFormViewComponent', () => {
  let component: ApplicationFormViewComponent;
  let fixture: ComponentFixture<ApplicationFormViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationFormViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
