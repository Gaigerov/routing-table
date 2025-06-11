
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortField } from '../route.model';

export type SortDirection = 'asc' | 'desc' | '';

@Component({
  selector: 'app-sortable-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sortable-header.component.html',
  styleUrls: ['./sortable-header.component.css']
})

export class SortableHeaderComponent {
  @Input() field: SortField = 'address';
  @Input() direction: SortDirection = '';
  @Output() sortChange = new EventEmitter<SortDirection>();

  rotate() {
    this.direction = 
      this.direction === '' ? 'asc' : 
      this.direction === 'asc' ? 'desc' : '';
    this.sortChange.emit(this.direction);
  }
}
