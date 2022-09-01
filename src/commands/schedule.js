const { schedule } = require("../utils")

function init(bot) {
    schedule.forEach(element => {
        bot.command(`/${element.day}`, (ctx) => ctx.replyWithPhoto(element.shcedule,{caption : `Розклад : ${element.day}\n${element.level}`}));
    });
}
  
module.exports = { init };