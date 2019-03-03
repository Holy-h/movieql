import {getPeople, getPersonById} from "../db/user"
import { getMovies, getMovieById, addMovie, deleteMovie } from "../db/movie";
import { getMovielistAPI, getMovieAPI, getMovieSuggestionAPI } from "../db/api";

const resolvers = {
  Query: {
    people: getPeople,
    getperson: (_, {id}) => getPersonById(id),
    moviesDB: getMovies,
    getmovieDB: (_, {id}) => getMovieById(id),
    getmovieAPI: (_, {id}) => getMovieAPI(id),
    getmovielistAPI: (_, {limit, rating}) => getMovielistAPI(limit, rating),
    getmovieSuggestionAPI: (_, {id}) => getMovieSuggestionAPI(id),
  },
  Mutation: {
    addMovieDB: (_, {name, score}) => addMovie(name, score),
    deleteMovieDB:(_, {id}) => deleteMovie(id)
  }
};

export default resolvers;
