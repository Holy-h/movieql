// import fetch from "node-fetch";
import axios from "axios";

const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

// export const getMovieAPI = (limit, rating) => fetch(`${LIST_MOVIES_URL}`)
//   .then(res => res.json())
//   .then(json => json.data.movies);

// export const getMovieAPI = (limit, rating) => axios({
//   url: LIST_MOVIES_URL,
//   method: "GET",
//   params: {
//     limit,
//     minimum_rating: rating
//   }
// })
// .then(res => res.data.data.movies)
// .catch(error => console.log(error))


// movielist를 받아옴
export const getMoviesAPI = async (limit, rating) => {
  const {
    data: {
      data: { movies }
    }
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimun_rating: rating
    }
  });
  return movies;
}


// id가 일치하는 movie를 받아옴
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