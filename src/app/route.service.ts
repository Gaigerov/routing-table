import { Injectable } from '@angular/core';
import { Route } from './route.model';
import { of } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class RouteService {
  getRoutes() {
    if (environment.enableDebug) {
      console.debug('Загрузка тестовых маршрутов');
    }
    
    const routes: Route[] = [
      { uuid: '1', address: '192.168.1.0', mask: '24', gateway: '192.168.1.1', interface: 'eth0' },
      { uuid: '2', address: '10.0.0.0', mask: '8', gateway: '10.0.0.1', interface: 'eth1' },
      { uuid: '3', address: '172.16.0.0', mask: '16', gateway: '172.16.0.1', interface: 'eth2' },
      { uuid: '4', address: '0.0.0.0', mask: '0', gateway: '192.168.0.1', interface: 'eth3' },
      { uuid: '5', address: '169.254.0.0', mask: '16', gateway: '', interface: 'eth4' },
      { uuid: '6', address: '192.168.2.0', mask: '24', gateway: '192.168.2.1', interface: 'wlan0' },
      { uuid: '7', address: '10.10.0.0', mask: '16', gateway: '10.10.0.254', interface: 'wlan1' },
      { uuid: '8', address: '100.64.0.0', mask: '10', gateway: '100.64.0.1', interface: 'ppp0' },
    ];
    
    return of(routes);
  }
}
