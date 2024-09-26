import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';

@Component({
  selector: 'billboard-section',
  templateUrl: './billboard.component.html',
})
export class BillboardComponent {

  booksData: Book[] | undefined;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.bookService.getBooksForHero().subscribe((response: Book[]) => {
      this.booksData = response;
    });
  }

}
