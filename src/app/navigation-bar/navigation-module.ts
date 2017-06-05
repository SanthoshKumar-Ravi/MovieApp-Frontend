import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule} from '@angular/material';
import { NavigationBarComponent } from './navigation-bar.component';
import { MovieAppMaterialModule } from '../movie-app-material.module';
import { SearchModule } from '../search/search.module';
import { SearchComponent } from '../search/search.component';
@NgModule({
  declarations: [
    NavigationBarComponent
  ],
    imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovieAppMaterialModule,
    SearchModule
    ],
    exports: [NavigationBarComponent],
  providers: [  ],

})

export class NavigationBarModule { }
