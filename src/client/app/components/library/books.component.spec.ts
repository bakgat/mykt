// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// libs
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

//app
import { t } from '../../shared/test/index';
import { CoreModule } from '../../shared/core/core.module';
import { AnalyticsModule } from '../../shared/analytics/analytics.module';

import { BookListEffects, BookListService, bookReducer } from '../../shared/library/index';
import { BooksComponent } from './books.component';

// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    imports: [
      CoreModule,
      RouterTestingModule,
      AnalyticsModule,
      StoreModule.provideStore({ books: bookReducer }),
      EffectsModule.run(BookListEffects)
    ],
    declarations: [BooksComponent, TestComponent],
    providers: [
      BookListService,
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http, useFactory: function (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      }
    ]
  });
};

export function main() {
  t.describe('@Component: BooksComponent', () => {

    t.be(testModuleConfig);

    t.it('should work',
      t.async(() => {
        TestBed.compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();

            let homeInstance = fixture.debugElement.children[0].componentInstance;
            let homeDOMEl = fixture.debugElement.children[0].nativeElement;

            t.e(homeDOMEl.querySelectorAll('tbody > tr').length).toEqual(0);
            /*
                        homeInstance.newName = 'Minko';
                        homeInstance.addName();
            
                        fixture.detectChanges();
            
                        t.e(homeDOMEl.querySelectorAll('li').length).toEqual(1);
                        t.e(homeDOMEl.querySelectorAll('li')[0].textContent).toEqual('Minko');
                        */
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<mykt-books></mykt-books>'
})
class TestComponent {

}
