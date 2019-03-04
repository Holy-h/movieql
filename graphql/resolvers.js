import { getMovie, getMovieList, getMovieSuggestion } from "../db/api";

const resolvers = {
  Query: {
    get_movielist: (_, {limit, rating}) => getMovieList(limit, rating),
    get_movie: (_, { id }) => getMovie(id),
    get_moviesuggestion: (_, { id }) => getMovieSuggestion(id),
  },
};

export default resolvers;
