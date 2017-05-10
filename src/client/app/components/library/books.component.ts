//angular
import { Component, OnInit } from '@angular/core';
//ngrx
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

//app
import { IAppState, getBooks } from '../../shared/ngrx/index';
import { IBook } from '../../shared/library/books/index';
import * as bookList from '../../shared/library/books/book-list.action';

@Component({
    moduleId: module.id,
    selector: 'mykt-books',
    templateUrl: 'books.component.html'
})
export class BooksComponent implements OnInit {
    public books$: Observable<Array<IBook>>;

    constructor(private store: Store<IAppState>) { }

    ngOnInit() {
        this.books$ = this.store.let(getBooks);
        this.store.dispatch(new bookList.InitAction());
    }
}
