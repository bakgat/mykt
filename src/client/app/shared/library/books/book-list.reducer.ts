import { IBookState, initialState } from './book-list.state';
import { IBook } from './book';
import * as actions from './book-list.action';

export function bookReducer(
    state: IBookState = initialState,
    action: actions.Actions
): IBookState {
    switch (action.type) {
        case actions.ActionTypes.INITIALIZED:
            return (<any>Object).assign({}, state, {
                books: action.payload
            });

        case actions.ActionTypes.INIT_BOOK_DETAIL:
            return (<any>Object).assign({}, state, {
                selectedBook: state.books.find((book) => {
                    return book._id === action.payload;
                })
            });
        case actions.ActionTypes.BOOK_DETAIL_INITIALIZED:
            return (<any>Object).assign({}, state, {
                selectedBook: action.payload
            });

        case actions.ActionTypes.BOOK_ADDED:
            return (<any>Object).assign({}, state, {
                books: [...state.books, action.payload]
            });

        case actions.ActionTypes.BOOK_REMOVED:
            return (<any>Object).assign({}, state, {
                books: state.books.filter((book: IBook) => {
                    return book._id !== (<IBook>action.payload)._id;
                })
            });
        default:
            return state;
    }
}
