const url = require('../models/url');
const ShortUniqueId = require('short-unique-id');

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;

  if (!body.url) return res.status(400).json({ error: 'url is required' });

  const uniqueID = new ShortUniqueId();
  const shortID = uniqueID.rnd(6);

  await url.create({
    shrotId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
}

module.exports = { handleGenerateNewShortUrl };
