import { combineReducers } from 'redux';
import BooksReducer from './books_reducer';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
