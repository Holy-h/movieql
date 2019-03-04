import axios from "axios";

const api = axios.create({
  baseURL: "https://yts.am/api/v2/",
});

export const getMovieList = async (limit, rating) => {
  const {
    data: {
      data: {
        movies
      }
    }
  } = await api.get(`list_movies.json`, {
    params: {
      limit,
      minimum_rating: rating,
    }
  });
  return movies;
}

export const getMovie = async (id) => {
  const {
    data: {
      data: {
        movie
      }
    }
  } = await api.get(`movie_details.json`,{
    params: {
      movie_id: id,
      with_images: true
    }
  });
  return movie;
}

export const getMovieSuggestion = async (id) => {
  const {
    data: {
      data: {movies}
    }
  } = await api.get(`movie_suggestions.json`, {
    params: {
      movie_id: id,
    }
  });
  return movies;
}