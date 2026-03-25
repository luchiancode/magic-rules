import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'epics',
    loadChildren: () => import('epics/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    loadChildren: () =>
      import('./solution/solution.module').then((m) => m.SolutionModule),
  },
];
