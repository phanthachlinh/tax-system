import * as express from "express";
const mongoose = require('mongoose');
var app = express();
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
app.get('/',(req ,res)=>{
  res.send('dfs')
});
export default app;
