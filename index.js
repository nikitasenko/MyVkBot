const bodyParser = require('body-parser');
const express = require('express');
const {Botact} = require('botact');

const app = express();
const bot = new Botact({
    confirmation: 'af2d3308',
    token: '6b4ef7576050749177c4839cb809a3edfa1d385602787db783194866821eb70e4b1e2cc6b4bdf86ffb870'
});


bot.on(  (ctx) => {
     ctx.reply('Вы написали: ' +ctx.body);
    ctx.reply('А я отвечу: люблю настю)))))))))) ');
});
bot.command('start', ({ reply }) => reply('This is start!'));

app.use(bodyParser.json());
app.post('/', bot.listen);
app.listen(8080);