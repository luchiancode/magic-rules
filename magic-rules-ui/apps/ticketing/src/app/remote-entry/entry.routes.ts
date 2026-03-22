import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('../ticketing/ticketing.module').then((m) => m.TicketingModule),
  },
];
