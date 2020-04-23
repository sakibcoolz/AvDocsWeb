import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdNewAppointmentComponent } from './opd-new-appointment.component';

describe('OpdNewAppointmentComponent', () => {
  let component: OpdNewAppointmentComponent;
  let fixture: ComponentFixture<OpdNewAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdNewAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdNewAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
