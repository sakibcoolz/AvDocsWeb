import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRootEmailAdminComponent } from './add-root-email-admin.component';

describe('AddRootEmailAdminComponent', () => {
  let component: AddRootEmailAdminComponent;
  let fixture: ComponentFixture<AddRootEmailAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRootEmailAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRootEmailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
