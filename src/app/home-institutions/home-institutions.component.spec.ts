import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInstitutionsComponent } from './home-institutions.component';

describe('HomeInstitutionsComponent', () => {
  let component: HomeInstitutionsComponent;
  let fixture: ComponentFixture<HomeInstitutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInstitutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
