import { Component, OnInit } from '@angular/core';
import { IngredientModel } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  //  variable declarations 
  ingredients:IngredientModel[] = [
    new IngredientModel('Tomato', 12),
    new IngredientModel('Mangoes',2)
  ];


  constructor(){}
  ngOnInit(){}

}
