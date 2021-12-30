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

@Controller('movies')
export class MoviesController {
  @Get()
  getAllMovies() {
    return 'Get All Movies';
  }

  @Get('search')
  search(@Query('year') searchYear: string) {
    return `Search Movie after ${searchYear}`;
  }

  @Get('/:id')
  getMovie(@Param('id') movieId: string) {
    return `Get Movie with id ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete('/:id')
  delete(@Param('id') movieId: string) {
    return `Delete Movie with id ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovieId: movieId,
      ...updateData,
    };
  }
}
