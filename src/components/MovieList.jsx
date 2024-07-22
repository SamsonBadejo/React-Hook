import React from 'react';
import MovieCard from './MovieCard';
import Row from 'react-bootstrap/Row';

const MovieList = ({ movies }) => {
  return (
    <Row>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </Row>
  );
};

export default MovieList;
