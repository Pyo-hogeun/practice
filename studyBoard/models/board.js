const mongoose = require('mongoose');

const boardContentSchema = new mongoose.Schema({
  contentid:{ type: Number, unique: true },
  contenttitle:{ type: String },
  contenttext:{ type: String },
  contentauthor:{ type: String },
  contentdate:{ type: Date}
},{
  timestamps: true
});

module.exports = mongoose.model("board", boardContentSchema);
