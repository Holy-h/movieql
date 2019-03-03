import axios from "axios";

const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

// Used to list and search through out all the available movies.
// Can sort, filter, search and order the results
export const getMovielistAPI = async (limit, rating) => {
  const {
    data: {
      data: {
        movies
      }
    }
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  });
  return movies;
}


// Returns the information about a specific movie
export const getMovieAPI = async id => {
  const {
    data: {
      data: {movie}
    }
  } = await axios(MOVIE_DETAILS_URL,{
    params: {
      movie_id: id,
      with_images: true
    }
  });
  return movie;
}


// Returns 4 related movies as suggestions for the user
export const getMovieSuggestionAPI = async id => {
  const {
    data: {
      data: {movies}
    }
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  });
  return movies;
}