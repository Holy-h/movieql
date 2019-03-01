import {getPeople, getPersonById} from "../db/user"
import { getMovies, getMovieById, addMovie } from "../db/movie";

const resolvers = {
  Query: {
    people: getPeople,
    getperson: (_, {id}) => getPersonById(id),
    movies: getMovies,
    getmovie: (_, {id}) => getMovieById(id)
  },
  Mutation: {
    addMovie: (_, {name, score}) => addMovie(name, score)
  }
};

export default resolvers;
