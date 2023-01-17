import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../interfaces/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    // variables declrations 
    recipes:RecipeModel[] = [
      new RecipeModel('Pilau', 'desription recipe 1', 'https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate_2829-10657.jpg?w=1060&t=st=1673780448~exp=1673781048~hmac=a8d07c792dfa67cc9a00aecf8365fb8f86783b69619a79cbf62f3927f1c226b5'),
      new RecipeModel('Chapati', 'desription recipe 1', 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=1060&t=st=1673780546~exp=1673781146~hmac=d73f1feeaaa544210bef9a57be380c948d49f6af82a9e85757d624d3d9ba8268'),
      new RecipeModel('Sandwich', 'desription recipe 2', 'https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg?w=1060&t=st=1673780509~exp=1673781109~hmac=4f22ba27c641f767b7c0a5f7a7322cec37933cf099a8ed862c1d357f3cb0581c'),
      new RecipeModel('Githeri', 'desription recipe 3', 'https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?w=1060&t=st=1673780488~exp=1673781088~hmac=ba88bd4bb41bd2b6088a7075d63f905c65e8cbe57352749c242cdee98c819102'),
    ];

    constructor(){}

    ngOnInit(){}

}
