import { combineReducers } from "redux";
import { BooksReducer } from "./books";

export const RootReducer = combineReducers({
    books: BooksReducer
})