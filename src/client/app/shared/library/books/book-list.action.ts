import { Action } from '@ngrx/store';
import { type } from '../../core/utils/type';
import { CATEGORY } from '../category.common';
import {  IBook }  from './book';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export interface IBookListActions {
    INIT: string;
    INITIALIZED: string;
    INIT_FAILED: string;
    ADD: string;
    BOOK_ADDED: string;
    REMOVE: string;
    BOOK_REMOVED: string;
}

export const ActionTypes: IBookListActions = {
    INIT: type(`${CATEGORY} Init`),
    INITIALIZED: type(`${CATEGORY} Initialized`),
    INIT_FAILED: type(`${CATEGORY} Init Failed`),
    ADD: type(`${CATEGORY} Add`),
    BOOK_ADDED: type(`${CATEGORY} Book Added`),
    REMOVE: type(`${CATEGORY} Remove`),
    BOOK_REMOVED: type(`${CATEGORY} Book Removed`)
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class InitAction implements Action {
    type = ActionTypes.INIT;
    payload: IBook = null;
}

export class InitializedAction implements Action {
    type = ActionTypes.INITIALIZED;

    constructor(public payload: Array<IBook>) { }
}

export class InitFailedAction implements Action {
    type = ActionTypes.INIT_FAILED;
    payload: IBook = null;
}

export class AddAction implements Action {
    type = ActionTypes.ADD;

    constructor(public payload: IBook) { }
}

export class BookAddedAction implements Action {
    type = ActionTypes.BOOK_ADDED;

    constructor(public payload: IBook) { }
}

export class RemoveAction implements Action {
    type = ActionTypes.REMOVE;
    constructor(public payload: IBook) { }
}

export class BookRemovedAction implements Action {
    type = ActionTypes.BOOK_REMOVED;
    constructor(public payload: IBook) { }
}
/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
    = InitAction
    | InitializedAction
    | InitFailedAction
    | AddAction
    | BookAddedAction
    | RemoveAction
    | BookRemovedAction;
