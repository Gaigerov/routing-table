import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesTableComponent } from './routes-table/routes-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RoutesTableComponent],
  template: `
    <div class="app">
      <h1>Таблица маршрутов</h1>
      <app-routes-table></app-routes-table>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
