const Promise = this.Promise || require('promise');
const superagent = require('superagent-promise')(require('superagent'), Promise);

class CommandFunctions {

    static async weather(ctx) {
        let lat = 53.90;
        let lon = 27.5;
        let url = 'https://api.apixu.com/v1/current.json?key=a2ef68b6ca584618878135633180407&q=Minsk';
        let result;
         await superagent.get(url)
            .end((err, res) => {
                if (err) {
                    return console.log(err);
                }
                result = res.body.current.temp_c;
            });
        await ctx.reply('Погода в минске: ' + result + ' градусов');
    }

    static async random(ctx) {
        let randomNubmer = CommandFunctions.getRandomInt(1, 100);
        let result = await ctx.reply('Выпало: ' + randomNubmer);
    }



    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}


module.exports = CommandFunctions;