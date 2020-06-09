import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test item',
      'A test description',
      'https://www.flickr.com/photos/soniagoyal/31479301445'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
