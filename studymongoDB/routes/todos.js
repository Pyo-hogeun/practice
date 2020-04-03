const router = require('express').Router();
const Todo = require('../models/todo');

//find all
router.get('/', (req, res)=>{
  Todo.findAll().then((todos)=>{
    // if( !todos.length ) return res.status(404).send({ err: 'Todo not found'});
    // console.log(todos);
    // res.send(`find successfully: ${todos}`);
    res.render('todoCreate',{
      data:todos
      
    });
  })
  .catch(err => res.status(500).send(err));
});

//create new todo document
router.post('/', (req, res)=>{
  console.log(req.body);
  Todo.create(req.body)
  .then((todo) => {
    res.send(todo);
  })
  .catch(err => res.status(500)
  .send(err));
  
});

module.exports = router;
// 이거 중요 빠뜨리지말자