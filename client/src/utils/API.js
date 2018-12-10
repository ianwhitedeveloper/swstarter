import axios from "axios";

// API routes to search for people or movies
export default {
  getPeople: function(query) {
    return axios.get("/api/people", { params: { search: query } });
  },
  getPerson: function(queryUrl) {
    return axios.get("/api/person", queryUrl);
  },
  getMovies: function(query) {
    return axios.get("/api/movies", { params: { search: query } });
  },
  getPlanets: function(query) {
    return axios.get("/api/planets", { params: { search: query } });
  },
  getSpecies: function(query) {
    return axios.get("/api/species", { params: { search: query } });
  }
};
