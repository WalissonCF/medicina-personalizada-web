import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculesInputRadioGroupComponent } from './molecules-input-radio-group.component';

describe('MoleculesInputRadioGroupComponent', () => {
  let component: MoleculesInputRadioGroupComponent;
  let fixture: ComponentFixture<MoleculesInputRadioGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoleculesInputRadioGroupComponent]
    });
    fixture = TestBed.createComponent(MoleculesInputRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
