import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // getBooks(): Observable<BooksResponse> {
  //   return this.http.get<BooksResponse>(`${this.baseUrl}/`);
  // }

  getBooksForHero(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/booksForHero`);
  }

  getBestSellerBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/bestSellerBooks`);
  }

  getFeaturedBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/featuredBooks`);
  }

  getLatestBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/latestBooks`);
  }

  getBestReviews(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/bestReviews`);
  }

  getOnsaleBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/onsaleBooks`);
  }
}
