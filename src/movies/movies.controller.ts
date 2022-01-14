import { MoviesService } from './movies.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from 'src/movies/entities/movies.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}
  @Get()
  getAllMovies(): Movie[] {
    return this.movieService.getAll();
  }

  @Get('search')
  search(@Query('year') searchYear: string) {
    return `Search Movie after ${searchYear}`;
  }

  @Get('/:id')
  getMovie(@Param('id') movieId: string): Movie {
    return this.movieService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return this.movieService.create(movieData);
  }

  @Delete('/:id')
  delete(@Param('id') movieId: string) {
    return this.movieService.delete(movieId);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovieId: movieId,
      ...updateData,
    };
  }
}
