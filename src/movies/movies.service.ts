import { Injectable } from '@nestjs/common';
import { Movie } from 'src/movies/entities/movies.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === parseInt(id));
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  delete(id: string): boolean {
    const result = this.movies.filter((movie) => movie.id !== parseInt(id));
    return result.length > 0 ? true : false;
  }
}
