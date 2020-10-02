import { Component, OnInit } from '@angular/core';
import { Books } from '../services/books.model';

import { BooksService } from '../services/books.service';
declare var M: any;

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
  providers: [BooksService],
})
export class BooklistComponent implements OnInit {
  constructor(public booksService: BooksService) {}

  ngOnInit() {
    this.refreshBooksList();
  }

  refreshBooksList() {
    this.booksService.getbooksList().subscribe((res) => {
      this.booksService.Books = res as Books[];
    });
  }
  onEdit(book: Books) {
    this.booksService.selectedBooks = book;
  }
  onDelete(BookId: string, form: NgForm) {
    if (confirm('Are you sure to delete this record?') == true) {
      this.booksService.deleteBooks(BookId).subscribe((res) => {
        this.refreshBooksList();
        this.resetForm(form);
        M.toast({ html: 'Deleted Sucessfully', classes: 'rounded' });
      });
    }
  }
}
