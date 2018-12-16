import axios from "axios";

// API routes to search for people or movies
export default {
  getPeople: function(query) {
    return axios.get("/api/people", { params: { search: query } });
  },
  getPerson: function(id) {
    return axios.get("/api/person/", { params: id });
  },
  getMovies: function(query) {
    return axios.get("/api/movies", { params: { search: query } });
  },
  getMovie: function(id) {
    return axios.get(`/api/movie/${id}`);
  },
  getPlanets: function(query) {
    return axios.get("/api/planets", { params: { search: query } });
  },
  getSpecies: function(query) {
    return axios.get("/api/species", { params: { search: query } });
  }
};
