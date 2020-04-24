import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicManagementComponent } from './clinic-management.component';

describe('ClinicManagementComponent', () => {
  let component: ClinicManagementComponent;
  let fixture: ComponentFixture<ClinicManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
