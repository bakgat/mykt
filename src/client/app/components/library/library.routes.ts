import { BooksComponent } from './books.component';
import { BookDetailComponent } from './book-detail.component';

export const LibraryRoutes: Array<any> = [
  {
    path: 'library/books',
    component: BooksComponent
  }, {
    path: 'library/books/:id',
    component: BookDetailComponent
  }
];
