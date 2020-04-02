const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  todoid: { type: Number, required: true, unique: true },
  content: { type: String, required: true },
  completed: { type: String, default: false }
},
{
  timestamps: true
});

todoSchema.statics.create = function (payload) {
  const todo = new this(payload);
  return todo.save();
}
// Find All
todoSchema.statics.findAll = function () {
  // return promise
  // V4부터 exec() 필요없음
  return this.find({});
};

const Todo = mongoose.model('Todo', todoSchema);

// const todo = new Todo({
//   todoid: 1,
//   content: '이것이 할일이다',
//   completed: false
// });

module.exports = mongoose.model("Todo", todoSchema);