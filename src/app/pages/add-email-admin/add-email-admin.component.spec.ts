import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmailAdminComponent } from './add-email-admin.component';

describe('AddEmailAdminComponent', () => {
  let component: AddEmailAdminComponent;
  let fixture: ComponentFixture<AddEmailAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmailAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
