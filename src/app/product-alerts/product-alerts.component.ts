import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product: Product  | undefined
  @Output() notify = new EventEmitter();
  @Output("acceptEmittedStr") newItemEvent = new EventEmitter<string>();

  emitString(value: string) {
    this.newItemEvent.emit(value);
  }
}
