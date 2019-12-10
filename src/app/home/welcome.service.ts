import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from '../movies/movies';
import { IShows } from '../tvShows/tvShows';


@Injectable({
    providedIn: 'root'
})

export class WelcomeService{
    constructor(private http:HttpClient){}
    ShowsUrl:string = "https://api.themoviedb.org/3/tv/popular?api_key=5f4d55e8ec1912507b6dfa7221bbfc4f&language=en-US&page=1"
    getShows(): Observable<IShows[]>{
        return this.http.get<IShows[]>(this.ShowsUrl)
    }
    movieUrl:string = 'https://api.themoviedb.org/3/movie/now_playing?api_key=5f4d55e8ec1912507b6dfa7221bbfc4f&language=en-US&page=1'
    getMovies(): Observable<IMovie[]>{
        return this.http.get<IMovie[]>(this.movieUrl)
    }
}