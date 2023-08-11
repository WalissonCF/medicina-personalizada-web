import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atomic-input-radio',
  templateUrl: './atomic-input-radio.component.html',
  styleUrls: ['./atomic-input-radio.component.css']
})
export class AtomicInputRadioComponent {
  @Input() name: string = 'radio-name';
  @Input() label: string = 'Label';
  @Input() value: any;
  
  public isChecked: boolean = false;

  toggleCheck(): void {
    this.isChecked = true;
    console.log(this.isChecked)
  }
}
