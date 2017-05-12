import * as fromLibrary from '../../library/index';
/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface IAppState {
  books: fromLibrary.IBookState;
}
