import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitPanelComponent } from './visit-panel.component';

describe('VisitPanelComponent', () => {
  let component: VisitPanelComponent;
  let fixture: ComponentFixture<VisitPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
