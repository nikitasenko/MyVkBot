class CommandFunctions {

    static async random(ctx) {
        let randomNubmer = CommandFunctions.getRandomInt(1, 100);
        let result = await ctx.reply('Выпало: '+randomNubmer);
        console.log(result.response);
    }


    static getRandomInt(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}


module.exports = CommandFunctions;