import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteService } from '../route.service';
import { Route, SortField } from '../route.model';
import { finalize } from 'rxjs/operators';
import { SortableHeaderComponent } from '../sortable-header/sortable-header.component';

@Component({
  selector: 'app-routes-table',
  standalone: true,
  imports: [CommonModule, SortableHeaderComponent],
  templateUrl: './routes-table.component.html',
  styleUrls: ['./routes-table.component.css']
})

export class RoutesTableComponent implements OnInit {
  routes: Route[] = [];
  sortedRoutes: Route[] = [];
  loading = true;
  sortField: SortField = 'address';
  sortDirection: 'asc' | 'desc' | '' = '';

  constructor(private routeService: RouteService) {}

  ngOnInit() {
    this.routeService.getRoutes()
      .pipe(finalize(() => this.loading = false))
      .subscribe(routes => {
        this.routes = routes;
        this.sortedRoutes = [...routes];
      });
  }

  onSort(field: SortField, direction: '' | 'asc' | 'desc') {
    this.sortField = field;
    this.sortDirection = direction;

    if (!direction) {
      this.sortedRoutes = [...this.routes];
      return;
    }

    this.sortedRoutes = [...this.routes].sort((a, b) => {
      const modifier = direction === 'asc' ? 1 : -1;
      
      switch(field) {
        case 'address':
        case 'gateway':
          return this.compareIps(a[field], b[field]) * modifier;
        case 'interface':
          return a.interface.localeCompare(b.interface) * modifier;
        default:
          return 0;
      }
    });
  }

  private compareIps(ipA: string, ipB: string): number {
    const numA = this.ipToNumber(ipA);
    const numB = this.ipToNumber(ipB);
    return numA > numB ? 1 : numA < numB ? -1 : 0;
  }

  private ipToNumber(ip: string): number {
    if (!ip) return 0;
    
    // Удаляем маску если есть
    const cleanIp = ip.split('/')[0];
    return cleanIp.split('.').reduce((acc, octet, idx) => 
      acc + parseInt(octet, 10) * Math.pow(256, 3 - idx), 0);
  }
}
