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
      'A Test Recipe',
      'This is simply a test',
      'https://bigoven-res.cloudinary.com/image/upload/sweetandsourstickythaiboneless-3a944d.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/white-chocolate-peppermint-bark-18.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
