import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';

import 'rxjs';

@Injectable()
export class BookService {

    private apiUrl: string;

    constructor(
        private http: Http
    ) {
        this.apiUrl = environment.apiUrl;
    }

    getBooks(): Promise<Array<Object>> {
        return this.http.get(`${this.apiUrl}/books`)
            .toPromise()
            .then((resp) => {
                let books = resp.json();
                // console.log('books', books);
                return books;
            });
    }

    getBookById(bookId): Promise<Object> {
        return this.http.get(`${this.apiUrl}/books/id/${bookId}`)
            .toPromise()
            .then((resp) => {
                let book = resp.json();
                // console.log('book', book);
                return book;
            });
    }

    addBook(book): Promise<Object> {
        return this.http.post(`${this.apiUrl}/books`, book)
            .toPromise()
            .then((resp) => {
                let book = resp.json();
                // console.log('book', book);
                return book;
            });
    }

    deleteBook(id): Promise<Object> {
        // console.log(`from book.service delete method......`);
        return this.http.delete(`${this.apiUrl}/books/id/${id}`)
            .toPromise()
            .then((resp) => {
                let status = resp.json();
                // console.log('book', status);
                return status;
            });
    }

    updateBook(id, book): Promise<Object> {
        return this.http.put(`${this.apiUrl}/books/id/${id}`, book)
            .toPromise()
            .then((resp) => {
                let book = resp.json();
                // console.log('book', book);
                return book;
            });
    }

}
