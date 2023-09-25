import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  @Input() products!: any;
  @Output() onRemove = new EventEmitter();
  onClick(id: string | number) {
    this.onRemove.emit(id);
  }
}
