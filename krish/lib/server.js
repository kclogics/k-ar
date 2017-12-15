

import express from 'express';
import 'babel-polyfill';
import config from './config';
import serverRender from './renderes/serverRender';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const initialContent = serverRender();
  res.render('index', { initialContent });
});


app.get('/main', (req, res) => {
  res.render('style');
});

app.get('/radium1', (req, res) => {
  res.render('radium1');
});

app.get('/tictac', (req, res) => {
  res.render('tictac');
});
app.listen(config.port, function listenHandler(){
  console.info(`Running on ${config.port}`);
});
