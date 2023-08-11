import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicInputRadioComponent } from './atomic-input-radio.component';

describe('AtomicInputRadioComponent', () => {
  let component: AtomicInputRadioComponent;
  let fixture: ComponentFixture<AtomicInputRadioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtomicInputRadioComponent]
    });
    fixture = TestBed.createComponent(AtomicInputRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
