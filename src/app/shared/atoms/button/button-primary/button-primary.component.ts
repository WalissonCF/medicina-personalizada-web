import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.css']
})
export class ButtonPrimaryComponent {
  @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  public clicked(): void {
    this.onClick.emit();
  }
}
