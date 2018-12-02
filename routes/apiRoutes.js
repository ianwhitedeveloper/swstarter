const axios = require("axios");
const router = require("express").Router();

// SWAPI route for people search
router.get("/people", (req, res) => {
  axios
  .get("https://swapi.co/api/people/?search=", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
  
});

// SWAPI route for movie search
router.get("/movies", (req, res) => {
  axios
  .get("https://swapi.co/api/films/?search=", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
  
});

module.exports = router;