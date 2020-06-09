import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.modal';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Apple', 5),
    new Ingredients('Mango', 20),
  ];
  constructor() {}

  ngOnInit(): void {}
}
