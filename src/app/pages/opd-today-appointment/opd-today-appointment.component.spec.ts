import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdTodayAppointmentComponent } from './opd-today-appointment.component';

describe('OpdTodayAppointmentComponent', () => {
  let component: OpdTodayAppointmentComponent;
  let fixture: ComponentFixture<OpdTodayAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdTodayAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdTodayAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
