const express = require('express');
const bodyParser = require('body-parser');
const {Botact} = require('botact');

const app = express();

const bot = new Botact({
    token: '',
    confirmation: 'af2d3308'
});

bot.on(function (ctx) {
    console.log(ctx.body);

    //ctx.reply('12321');
});

app.use(bodyParser.json());

app.post('/', bot.listen);


app.listen(80);
