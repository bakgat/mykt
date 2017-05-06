import { DEFAULT_COMPONENTS } from './layouts/index';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const APP_COMPONENTS: any[] = [
  ...DEFAULT_COMPONENTS,
  AppComponent,
  AboutComponent,
  HomeComponent
];

export * from './layouts/index';
export * from './app.component';
export * from './about/about.component';
export * from './home/home.component';
