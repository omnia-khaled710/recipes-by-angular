import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { FavoriteRecipesComponent } from './favorite-recipes/favorite-recipes.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    FavoriteRecipesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    NgxPaginationModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
