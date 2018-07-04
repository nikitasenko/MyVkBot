const bodyParser = require('body-parser');
const express = require('express');
const {Botact} = require('botact');
const app = express();
const CommandFunctions = require('./commandFunctions');
const bot = new Botact({
    confirmation: 'af2d3308',
    token: '6b4ef7576050749177c4839cb809a3edfa1d385602787db783194866821eb70e4b1e2cc6b4bdf86ffb870'
});



bot.command('random', CommandFunctions.random);
bot.command('weather', CommandFunctions.weather);


bot.event('group_join', ({ reply }) => reply('Ну и зачем вы тут?!'));

const port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.post('/', bot.listen);
app.listen(port);