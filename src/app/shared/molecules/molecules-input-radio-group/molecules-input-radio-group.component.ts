import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-molecules-input-radio-group',
  templateUrl: './molecules-input-radio-group.component.html',
  styleUrls: ['./molecules-input-radio-group.component.css']
})
export class MoleculesInputRadioGroupComponent {
  @Input() groupLabel: string = '';
}
