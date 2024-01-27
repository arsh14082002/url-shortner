const mongoose = require('mongoose');

const urlSchema = mongoose.Schema(
  {
    shrotId: {
      type: String,
      required: true,
      unique: true,
    },

    redirectURL: {
      type: String,
      required: true,
    },

    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamp: true },
);

const url = mongoose.model('urls', urlSchema);

module.exports = url;
