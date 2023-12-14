import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite-recipes',
  templateUrl: './favorite-recipes.component.html',
  styleUrls: ['./favorite-recipes.component.css']
})
export class FavoriteRecipesComponent {
  favorites:any;
constructor(){

const storedFavorites: any[] = JSON.parse(localStorage.getItem('favorites')!);
// console.log(storedFavorites);
this.favorites=storedFavorites
}

}
