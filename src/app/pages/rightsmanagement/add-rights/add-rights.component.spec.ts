import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRightsComponent } from './add-rights.component';

describe('AddRightsComponent', () => {
  let component: AddRightsComponent;
  let fixture: ComponentFixture<AddRightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
