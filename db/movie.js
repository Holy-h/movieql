let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 1
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 8
  },
  {
    id: 2,
    name: "The Godfather I",
    score: 99
  },
  {
    id: 3,
    name: "Logan",
    score: 2
  }
];

export const getMovies = () => movies;

export const getMovieById = (id) => {
  const filteredMovie = movies.filter(item => item.id === id);
  return filteredMovie[0];
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
}

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter(item => item.id !== id);
  if (cleanedMovies.length < movies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
}