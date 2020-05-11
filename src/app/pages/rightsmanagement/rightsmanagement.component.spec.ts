import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsmanagementComponent } from './rightsmanagement.component';

describe('RightsmanagementComponent', () => {
  let component: RightsmanagementComponent;
  let fixture: ComponentFixture<RightsmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightsmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightsmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
