// angular
import { Component } from '@angular/core';


/**
 * This class represents the default layout component.
 */
@Component({
  moduleId: module.id,
  selector: 'mykt-default-layout',
  templateUrl: 'default-layout.component.html',
  styleUrls: ['default-layout.component.css']
})
export class DefaultLayoutComponent {
  menu = [{
    name: 'Bibliotheek',
    items: [
      { name: 'Boeken', link: '/library/books', icon: 'library_books' },
      { name: 'Films', link: '/library/movies', icon: 'movie_filter' }
    ]
  }];
}
