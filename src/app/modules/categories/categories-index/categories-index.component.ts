import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-categories-index',
  templateUrl: './categories-index.component.html',
  styles: [
  ]
})
export class CategoriesIndexComponent implements OnInit {

  categories: any[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.getcategories();
  }

  getcategories(): void {
    this.categoriesService.getCategories().subscribe(
      response => this.categories = response.data,
      error => console.log(error.message),
    );
  }

}
