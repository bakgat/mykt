// angular
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// libs
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// app
import { Config } from '../../core/index';
import { Analytics, AnalyticsService } from '../../analytics/index';
import { CATEGORY } from '../category.common';

// module
import { IBook } from './book';
import { IBookState } from './book-list.state';
import * as actions from './book-list.action';

@Injectable()
export class BookListService extends Analytics {

    constructor(
        public analytics: AnalyticsService,
        private store: Store<IBookState>,
        private http: Http
    ) {
        super(analytics);
        this.category = CATEGORY;
    }

    getBooks(): Observable<Array<IBook>> {
        return this.http.get(`${Config.ENVIRONMENT().API}/library/books`)
            .map(res => res.json());
    }
    getBookDetail(id: string): Observable<IBook> {
        return this.http.get(`${Config.ENVIRONMENT().API}/library/books/${id}`)
            .map(res => res.json());
    }
}
