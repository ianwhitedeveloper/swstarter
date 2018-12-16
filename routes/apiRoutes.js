const axios = require("axios");
const router = require("express").Router();

// SEARCH PEOPLE
router.get("/people", (req, res) => {
  axios
  .get("https://swapi.co/api/people", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
  
});

// SEARCH PERSON ID
router.get("/person", (req, res) => {
  // console.log("hit /person api", req, res)
  axios
  .get("http https://swapi.co/api/people/", { params: req.params.id })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
  
});

// SEARCH MOVIES
router.get("/movies", (req, res) => {
  axios
  .get("https://swapi.co/api/films/?search=", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
  
});

// SEARCH MOVIE ID
router.get("/movie", (req, res) => {
  axios
  .get(`https://swapi.co/api/films/${req.params.id}`)
  .then((results) => console.log(results))
  
});

// SEARCH PLANETS
router.get("/planets", (req, res) => {
  axios
  .get("https://swapi.co/api/planets/?search=", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
  
});

// SEARCH SPECIES
router.get("/species", (req, res) => {
  axios
  .get("https://swapi.co/api/species/?search=", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
  
});

module.exports = router;