import { Observable } from 'rxjs/Observable';
import { IBook } from './book';

export interface IBookState {
  books: Array<IBook>;
}

export const initialState: IBookState = {
  books: <Array<IBook>>[]
};

export function getBooks(state$: Observable<IBookState>) {
  return state$.select(state => state.books);
}
