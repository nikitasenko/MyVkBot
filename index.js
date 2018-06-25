const express = require('express');
const bodyParser = require('body-parser');
const {Botact} = require('botact');

const app = express();

const bot = new Botact({
    token: '6b4ef7576050749177c4839cb809a3edfa1d385602787db783194866821eb70e4b1e2cc6b4bdf86ffb870',
    confirmation: 'af2d3308'
});

bot.on(function (ctx) {
    console.log(ctx.body);

    //ctx.reply('12321');
});

app.use(bodyParser.json());

app.post('/', bot.listen);


app.listen(80);
