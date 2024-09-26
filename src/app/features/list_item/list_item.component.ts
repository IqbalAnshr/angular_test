import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'list-item-section',
  templateUrl: './list_item.component.html',
})
export class ListItemComponent {
  featuredBooks: Book[] | undefined;
  latestBooks: Book[] | undefined;
  bestReviewedBooks: Book[] | undefined;
  onsaleBooks: Book[] | undefined;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.bookService.getFeaturedBooks().subscribe((response: Book[]) => {
      this.featuredBooks = response;
    });

    this.bookService.getLatestBooks().subscribe((response: Book[]) => {
      this.latestBooks = response;
    });

    this.bookService.getBestReviews().subscribe((response: Book[]) => {
      this.bestReviewedBooks = response;
    });

    this.bookService.getOnsaleBooks().subscribe((response: Book[]) => {
      this.onsaleBooks = response;
    });

  }
}
