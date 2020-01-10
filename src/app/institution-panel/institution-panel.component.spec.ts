import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionPanelComponent } from './institution-panel.component';

describe('InstitutionPanelComponent', () => {
  let component: InstitutionPanelComponent;
  let fixture: ComponentFixture<InstitutionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
