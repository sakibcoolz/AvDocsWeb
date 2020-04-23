import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdHistoryAppointmentComponent } from './opd-history-appointment.component';

describe('OpdHistoryAppointmentComponent', () => {
  let component: OpdHistoryAppointmentComponent;
  let fixture: ComponentFixture<OpdHistoryAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdHistoryAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdHistoryAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
