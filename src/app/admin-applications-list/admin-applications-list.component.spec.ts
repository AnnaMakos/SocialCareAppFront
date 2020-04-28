import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApplicationsListComponent } from './admin-applications-list.component';

describe('AdminApplicationsListComponent', () => {
  let component: AdminApplicationsListComponent;
  let fixture: ComponentFixture<AdminApplicationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminApplicationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApplicationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
