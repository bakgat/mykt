import { Observable } from 'rxjs/Observable';
import { IBook } from './book';

export interface IBookState {
  books: Array<IBook>;
  selectedBook: IBook;
}

export const initialState: IBookState = {
  books: <Array<IBook>>[],
  selectedBook: (<IBook>{ _id: null, title: null, isbn: null })
};

export function getBooks(state$: Observable<IBookState>) {
  return state$.select(state => state.books);
}
export function getBookDetail(state$: Observable<IBookState>) {
  return state$.select(state => state.selectedBook);
}
