import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRightsComponent } from './view-rights.component';

describe('ViewRightsComponent', () => {
  let component: ViewRightsComponent;
  let fixture: ComponentFixture<ViewRightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
