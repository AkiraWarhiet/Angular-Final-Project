import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { tvShowsListComponent } from './tvShows/tvShows.component';
import { MovieListComponent } from './movies/movies.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    tvShowsListComponent,
    MovieListComponent,
    WelcomeComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot([
      {path: 'movies', component: MovieListComponent},
      {path: 'tvshows', component: tvShowsListComponent},
      {path: "welcome", component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch:'full'},
      {path: '**', redirectTo: 'welcome', pathMatch:'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
