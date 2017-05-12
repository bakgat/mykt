// angular
import { Component, Injector, DebugElement } from '@angular/core';
import { TestBed, getTestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule } from '@angular/material';

import {
    BaseRequestOptions,
    ConnectionBackend,
    Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// libs
import { StoreModule, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

//app
import { t } from '../../shared/test/index';
import { CoreModule } from '../../shared/core/core.module';
import { AnalyticsModule } from '../../shared/analytics/analytics.module';

import { IAppState } from '../../shared/ngrx/index';
import { BookListService, bookReducer } from '../../shared/library/index';
import { BookDetailComponent } from './book-detail.component';
import { books } from '../../shared/library/books/book.mock';
import { TABLIST_COMPONENTS } from '../../shared/tablist/index';

const bookListState = {
    books: books
};

// test module configuration for each test
const testModuleConfig = () => {
    TestBed.configureTestingModule({
        imports: [
            CoreModule,
            RouterTestingModule,
            AnalyticsModule,
            StoreModule.provideStore({ books: bookReducer },
                { books: bookListState, selectedBook: null }), //inject mock state
            MaterialModule
        ],
        declarations: [...TABLIST_COMPONENTS, BookDetailComponent],
        providers: [
            BookListService,
            BaseRequestOptions,
            MockBackend,
            {
                provide: Http, useFactory: function (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
                    return new Http(backend, defaultOptions);
                },
                deps: [MockBackend, BaseRequestOptions]
            }, {
                provide: ActivatedRoute, useValue: {
                    snapshot: {
                        params: {
                            id: books[0]._id
                        }
                    }
                }
            }
        ]
    });
};

export function main() {
    t.describe('@Component: BookDetailComponent', () => {
        let injector: Injector;
        let activatedRoute: ActivatedRoute;
        let fixture: ComponentFixture<BookDetailComponent>;
        let de: DebugElement;
        let component: BookDetailComponent;

        t.be(t.async(() => {
            testModuleConfig();
            TestBed.compileComponents()
                .then(() => {
                    injector = getTestBed();
                    fixture = TestBed.createComponent(BookDetailComponent);
                    activatedRoute = injector.get(ActivatedRoute);

                    de = fixture.debugElement;
                    component = de.componentInstance;
                });
        }));

        t.it('should work', () => {
            component.ngOnInit();
            let book = component.book;
            t.e(book).toBeDefined();
            t.e(book._id).toEqual(books[0]._id);
            t.e(book.title).toEqual(books[0].title);
        });
    });
}
