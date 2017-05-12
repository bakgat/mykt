// angular
import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule }  from '@angular/material';

// libs
import { StoreModule } from '@ngrx/store';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2Segment } from 'angulartics2/dist/providers/segment/angulartics2-segment';

// app
import { t } from '../shared/test/index';
import { TEST_CORE_PROVIDERS, TEST_HTTP_PROVIDERS } from '../shared/core/testing/index';
import { NameListService, NavbarComponent, ToolbarComponent } from '../shared/sample/index';
import { MultilingualModule } from '../shared/i18n/multilingual.module';
import { reducer } from '../shared/i18n/index';
import { TABLIST_COMPONENTS } from '../shared/tablist/index';

// modules
import { AppComponent, APP_COMPONENTS } from './index';

const config: Route[] = [
  
];

// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    imports: [
      FormsModule,
      Angulartics2Module.forRoot([
        Angulartics2Segment
      ]),
      MaterialModule,
      MultilingualModule,
      StoreModule.provideStore({}),
      RouterTestingModule.withRoutes(config)
    ],
    declarations: [
      ...APP_COMPONENTS,
      ...TABLIST_COMPONENTS
      /* HomeComponent, AboutComponent,
       NavbarComponent, ToolbarComponent*/
    ],
    providers: [
      TEST_CORE_PROVIDERS(),
      TEST_HTTP_PROVIDERS()
    ]
  });
};

export function main() {
  t.describe('@Component: AppComponent', () => {

    t.be(testModuleConfig);

    t.it('should build without a problem',
      t.async(() => {
        TestBed.compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(AppComponent);
            fixture.detectChanges();
            t.e(fixture.nativeElement).toBeTruthy();
          });
      }));
  });
}
