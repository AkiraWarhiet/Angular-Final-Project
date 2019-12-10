
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from './movies'
@Injectable({
    providedIn: 'root'
})

export class MovieService{
    constructor(private http: HttpClient){}
    movieUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=5f4d55e8ec1912507b6dfa7221bbfc4f&language=en-US&page=1'
    getMovies(): Observable<IMovie[]>{
        return this.http.get<IMovie[]>(this.movieUrl)
    }
}