import { TestBed, getTestBed } from '@angular/core/testing';
import { Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ResponseOptions, Response, XHRBackend, HttpModule } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

// libs
import { Store, StoreModule } from '@ngrx/store';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';

// app
import { t } from '../../test/index';
// import {TEST_CORE_PROVIDERS, GET_HTTP_PROVIDERS_INJECTOR, TEST_LOCATION_PROVIDERS} from '../../core/testing/index';
import { AnalyticsModule } from '../../analytics/analytics.module';
import { IBook, BookListService, BookListEffects, bookReducer, InitAction, InitializedAction, AddAction, BookAddedAction } from './index';
import { books } from './book.mock';

// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    imports: [
      FormsModule, AnalyticsModule,
      StoreModule.provideStore({ books: bookReducer }),
      EffectsTestingModule,
      HttpModule, RouterTestingModule
    ],
    providers: [
      BookListService,
      BookListEffects,
      {provide: XHRBackend, useClass: MockBackend}
    ]
  });
};

const mockBackendResponse = (connection: MockConnection, response: string) => {
  connection.mockRespond(new Response(new ResponseOptions({body: response})));
};

export function main() {
  t.describe('app: BookListService', () => {
    let injector: Injector;
    let backend: MockBackend;
    let bookList: BookListService;
    let store: Store<any>;
    let runner: EffectsRunner; // ngrx/effects tester
    let bookListEffects: BookListEffects;
    let connection: MockConnection; // this will be set when a new connection is emitted from the backend.

    t.be(() => {
      testModuleConfig();
      injector = getTestBed();
      backend = <any>injector.get(XHRBackend);
      store = injector.get(Store);
      runner = injector.get(EffectsRunner);
      bookListEffects = injector.get(BookListEffects);
      // sets the connection when someone tries to access the backend with an xhr request
      backend.connections.subscribe((c: MockConnection) => connection = c);
      // construct after setting up connections above
      bookList = injector.get(BookListService);
    });

    t.it('should initialize', () => {
      runner.queue(new InitAction());

      bookListEffects.init$.subscribe(result => {
        t.e(result).toEqual(new InitializedAction(books));
        t.e(result.payload.length).toEqual(2);
      });

      // mock response after the xhr request (which happens in constructor), otherwise it will be undefined
      mockBackendResponse(connection, JSON.stringify(books));
    });

    t.it('add action', () => {
      runner.queue(new AddAction(books[0]));

      bookListEffects.add$.subscribe(result => {
        t.e(result).toEqual(new BookAddedAction(books[0]));
      });
    });
  });
}
