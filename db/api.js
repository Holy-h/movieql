import fetch from "node-fetch";
import axios from "axios";

const API_URL = "https://yts.am/api/v2/list_movies.json";

// export const getMovieAPI = (limit, rating) => fetch(`${API_URL}`)
//   .then(res => res.json())
//   .then(json => json.data.movies);

export const getMovieAPI = (limit, rating) => axios({
  url: API_URL,
  method: "GET",
  params: {
    limit,
    minimum_rating: rating
  }
})
.then(res => {
  console.log(res)
  return res.data.data.movies;
})
.catch(error => console.log(error))