// angular
import { Injectable } from '@angular/core';

// libs
import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

// module
import {  IBook } from './book';
import { BookListService } from './book-list.service';
import * as bookList from './book-list.action';

@Injectable()
export class BookListEffects {


    @Effect() init$: Observable<Action> = this.actions$
        .ofType(bookList.ActionTypes.INIT)
        .startWith(new bookList.InitAction)
        .switchMap(() => this.bookListService.getBooks())
        .map(payload => {
            let books = payload;
            return new bookList.InitializedAction(books);
        })
        .catch(() => Observable.of(new bookList.InitFailedAction()));

    @Effect() add$: Observable<Action> = this.actions$
        .ofType(bookList.ActionTypes.ADD)
        .map(action => {
            let book: IBook = action.payload;

            this.bookListService.track(bookList.ActionTypes.BOOK_ADDED, { label: `${book.title} (isbn: ${book.isbn})` });
            return new bookList.BookAddedAction(book);
        });

    constructor(
        private store: Store<any>,
        private actions$: Actions,
        private bookListService: BookListService
    ) { }
}
