import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialPanelComponent } from './official-panel.component';

describe('OfficialPanelComponent', () => {
  let component: OfficialPanelComponent;
  let fixture: ComponentFixture<OfficialPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficialPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficialPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
