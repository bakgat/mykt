// app
import { DefaultLayoutComponent } from './default-layout.component';
import { LibraryRoutes } from '../library/library.routes';


export const DefaultLayoutRoutes: Array<any> = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      ...LibraryRoutes,
    ]
  }
];
