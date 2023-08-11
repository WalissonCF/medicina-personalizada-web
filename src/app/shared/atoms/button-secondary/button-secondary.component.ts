import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-secondary',
  templateUrl: './button-secondary.component.html',
  styleUrls: ['./button-secondary.component.css']
})
export class ButtonSecondaryComponent {
  @Input() isDisabled: boolean = false;
  @Input() isLoading: boolean = false;

  @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  public clicked(): void {
    this.onClick.emit();
  }
}
