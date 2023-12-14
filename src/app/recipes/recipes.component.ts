import { Component } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { SearchService } from '../services/search.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent {
  recipes: any[] = [];
  filteredRecipes: any[] = [];
  favorites: any[] = [];
  searchValue:string='';
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; // your list of items
  currentPage = 1; // start with the first page
  itemsPerPage = 5; // show 5 items per page

  constructor(private _RecipesServices: RecipesService,private _SearchService: SearchService) {
    _RecipesServices.getRecipes().subscribe((data) => {
      this.recipes = data.recipes;
       
    }
    );

    // Load favorites from local storage
    const storedFavorites = localStorage.getItem('favorites');
    this.favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

  }
  ngOnInit() {
    // Subscribe to search value changes
    this._SearchService.searchValue$.subscribe((value) => {
      this.searchValue = value;
      this.filterRecipes();
      

      
    });
  }


  getSearchValue () { 
    this._SearchService.searchValue$.subscribe((value) => {
      this.searchValue = value;
    });
  }

  toggleFavorite(recipe: any): void {
    recipe.favorite = !recipe.favorite;

    if (recipe.favorite) {
      if(this.favorites.length==0){
        this.favorites.push(recipe);
      }else{
        for(let i = 0; i <this.favorites.length; i++) {

          if(recipe.recipe_id != this.favorites[i].id) {
            // console.log(this.favorites[i].id);
            this.favorites.push(recipe);
        }
      }
      }

    } else {
      // Remove from favorites
      const index = this.favorites.findIndex(fav => fav.id === recipe.id);
      if (index !== -1) {
        this.favorites.splice(index, 1);
      }
    }

    // Update local storage
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  filterRecipes(): void {
    this.recipes = this.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }
}
