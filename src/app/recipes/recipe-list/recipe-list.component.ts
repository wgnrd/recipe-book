import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [
    new Recipe('A Test Recipe', 'Testdescription', 'https://images.ichkoche.at/data/image/variations/496x384/1/lasagne-img-3390.jpg'),
    new Recipe('Another Test Recipe', 'Testdescription', 'https://images.ichkoche.at/data/image/variations/496x384/1/lasagne-img-3390.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
