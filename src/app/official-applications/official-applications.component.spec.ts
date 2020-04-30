import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialApplicationsComponent } from './official-applications.component';

describe('OfficialApplicationsComponent', () => {
  let component: OfficialApplicationsComponent;
  let fixture: ComponentFixture<OfficialApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficialApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficialApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
