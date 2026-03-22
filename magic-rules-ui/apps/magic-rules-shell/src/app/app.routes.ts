import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'ticketing',
    loadChildren: () => import('ticketing/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    loadChildren: () =>
      import('./solution/solution.module').then((m) => m.SolutionModule),
  },
];
