import { Component, signal } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MovieModel } from '../../models/movie.model';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  protected movies = signal<MovieModel[]>([])

  constructor() {
    MovieService.getMovies()
      .then(rsp => this.movies.set(rsp.data))
  }
}
