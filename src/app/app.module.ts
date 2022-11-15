import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FormsModule } from '@angular/forms';
import { UpstartComponent } from './newUpstart/upstart/upstart.component';
import { GraduateComponent } from './newUpstart/graduate/graduate.component';
import { TopCategoriesComponent } from './newUpstart/top-categories/top-categories.component';
import { InstructorComponent } from './newUpstart/instructor/instructor.component';
import { JoinComponent } from './newUpstart/join/join.component';
import { LearnComponent } from './pages/learn/learn.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LearnComponent,
    UpstartComponent,
    GraduateComponent,
    TopCategoriesComponent,
    InstructorComponent,
    JoinComponent,
    HomeComponent,
    FavoriteComponent,
    BasketComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
