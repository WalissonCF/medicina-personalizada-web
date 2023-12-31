import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {
  @Input() textPlaceholder: string = 'Seu texto aqui';
  @Input() isDisabled: boolean = false;
}
