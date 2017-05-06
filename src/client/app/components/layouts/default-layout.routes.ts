// app
import { DefaultLayoutComponent } from './default-layout.component';
import { HomeRoutes } from '../home/home.routes';
import { AboutRoutes } from '../about/about.routes';


export const DefaultLayoutRoutes: Array<any> = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      ...HomeRoutes,
      ...AboutRoutes
    ]
  }
];
