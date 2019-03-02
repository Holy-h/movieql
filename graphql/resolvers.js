import {getPeople, getPersonById} from "../db/user"
import { getMovies, getMovieById, addMovie, deleteMovie } from "../db/movie";
import { getMoviesAPI, getMovieAPI } from "../db/api";

const resolvers = {
  Query: {
    people: getPeople,
    getperson: (_, {id}) => getPersonById(id),
    moviesDB: getMovies,
    getmovieDB: (_, {id}) => getMovieById(id),
    getmovieAPI: (_, {id}) => getMovieAPI(id),
    getmoviesAPI: (_, {limit, rating}) => getMoviesAPI(limit, rating),
  },
  Mutation: {
    addMovieDB: (_, {name, score}) => addMovie(name, score),
    deleteMovieDB:(_, {id}) => deleteMovie(id)
  }
};

export default resolvers;
