//libs
import { Observable } from 'rxjs/Observable';
import { compose } from '@ngrx/core/compose';

//app
import { IAppState } from './app.state.interface';
import { IBookState } from '../../library/index';
import * as fromLibrary from '../../library/index';


export function getBookListState(state$: Observable<IAppState>): Observable<IBookState> {
  return state$.select(s => s.books);
}

export const getBooks: any = compose(fromLibrary.getBooks, getBookListState);
export const getSelectedBook: any = compose(fromLibrary.getBookDetail, getBookListState);
