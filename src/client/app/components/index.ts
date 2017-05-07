import { DEFAULT_COMPONENTS } from './layouts/index';
import { LIBRARY_COMPONENTS } from './library/index';
import { AppComponent } from './app.component';

export const APP_COMPONENTS: any[] = [
  ...DEFAULT_COMPONENTS,
  ...LIBRARY_COMPONENTS,
  AppComponent
];

export * from './layouts/index';
export * from './app.component';
