import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRightsComponent } from './edit-rights.component';

describe('EditRightsComponent', () => {
  let component: EditRightsComponent;
  let fixture: ComponentFixture<EditRightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
