import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookTableComponent} from "./book-table/book-table.component";
import {BookDetailsComponent} from "./book-details/book-details.component";

const routes: Routes = [
  {path: 'browser', component: BookTableComponent},
  {path: 'details/:id', component: BookDetailsComponent},
  { path: '', redirectTo: '/browser', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
