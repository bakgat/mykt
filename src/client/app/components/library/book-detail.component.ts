//angular
import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//ngrx
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

//app
import { IAppState, getSelectedBook } from '../../shared/ngrx/index';
import { IBook } from '../../shared/library/books/index';
import * as bookList from '../../shared/library/books/book-list.action';

@Component({
    moduleId: module.id,
    selector: 'mykt-bookdetail',
    templateUrl: 'book-detail.component.html'
})
export class BookDetailComponent implements OnInit {
    @HostBinding('class.detail') baseCssClass = true;

    book: IBook;
    original: IBook;

    private book$: Observable<IBook>;
    
    constructor(private store: Store<IAppState>, private route: ActivatedRoute) { }

    ngOnInit() {
        this.book$ = this.store.let(getSelectedBook);
        let id = this.route.snapshot.params['id'];
        this.store.dispatch(new bookList.InitBookDetailAction(id));
        this.book$.subscribe(book => {
            this.original = book;
            this.book = Object.assign({}, book); //copy book
        });
    }
}
