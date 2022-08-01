const { Router } = require('express');
const { Episode } = require('../models/Episode');

module.exports = Router()
  .get('/', async (req, res) => {
    const episodes = await Episode.getAll();
    const resp = episodes.map(episode => ({ 'id': episode.id, 'number': episode.number, season: episode.season, title: episode.title, quotes: episode.quotes }));
    res.json(resp);
  });
