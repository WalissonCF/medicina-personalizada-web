import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismsRadioFormComponent } from './organisms-radio-form.component';

describe('OrganismsRadioFormComponent', () => {
  let component: OrganismsRadioFormComponent;
  let fixture: ComponentFixture<OrganismsRadioFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganismsRadioFormComponent]
    });
    fixture = TestBed.createComponent(OrganismsRadioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
