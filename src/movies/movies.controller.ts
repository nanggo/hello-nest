import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAllMovies() {
    return 'Get All Movies';
  }

  @Get('/:id')
  getMovie(@Param('id') movieId: string) {
    return `Get Movie with id ${movieId}`;
  }

  @Post('/:id')
  create(@Param('id') movieId: string) {
    return `Create Movie with id ${movieId}`;
  }

  @Delete('/:id')
  delete(@Param('id') movieId: string) {
    return `Delete Movie with id ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `Patch Movie with id ${movieId}`;
  }
}
