import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'best-selling-section',
  templateUrl: './best_selling.component.html',
})
export class BestSellingComponent {
  booksData: Book[] | undefined;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.bookService.getBestSellerBooks().subscribe((response: Book[]) => {
      this.booksData = response;
    });
  }
}
