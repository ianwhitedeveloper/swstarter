import axios from "axios";

// API routes to search for people or movies
export default {
  getPeople: function(query) {
    return axios.get("/api/people", { params: { search: query } });
  },
  getMovies: function(query) {
    return axios.get("/api/movies", { params: { search: query } });
  },
  getPlanets: function(query) {
    return axios.get("/api/planets", { params: { search: query } });
  }
};
