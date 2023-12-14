import { Component } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { SearchService } from '../services/search.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


//   searchValue:string='';
// constructor(_SearchService: SearchService){
//  this.searchValue = _SearchService.searchValue
// // console.log(this.searchValue);

// }
searchValue: string = '';

// constructor(private _SearchService:SearchService) {}

// updateSearch() {
//   this._SearchService.updateSearchValue(this.searchValue);
// }
// searchValue: string = '';

  constructor(private searchService: SearchService) {}
  updateSearch() {
    this.searchService.setSearchValue(this.searchValue);
  }
}
