import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BooklistComponent } from './booklist/booklist.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
  },
  {
    path: 'booklist',
    component: BooklistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
