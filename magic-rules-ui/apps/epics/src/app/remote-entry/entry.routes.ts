import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('../epics/epics.module').then((m) => m.EpicsModule),
  },
];
