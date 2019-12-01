const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 8000;

app.get('/weather-forecast/:coordinates', (req, res) => {
  const WEATHER_API_TOKEN = '2bf27985f5a6844febcdc43c99cc81ce';

  const { coordinates } = req.params;

  fetch(`https://api.darksky.net/forecast/${WEATHER_API_TOKEN}/${coordinates}`)
    .then(response => response.json())
    .then(data => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');

      res.send(data);
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
