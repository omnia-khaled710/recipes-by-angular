import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { FavoriteRecipesComponent } from './favorite-recipes/favorite-recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

const routes: Routes = [
  { path:'',redirectTo:'recipes', pathMatch:'full'},
  { path:'recipes', component: RecipesComponent},
  { path:'favorite-recipes', component: FavoriteRecipesComponent},
  { path:'recipe-details/:recipe_id', component: RecipeDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
