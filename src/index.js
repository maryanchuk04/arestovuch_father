const { Telegraf } = require('telegraf')
const { hears }  = require('./utils')
const bot = new Telegraf("5430080139:AAGdysDHjcI3m-zxX8qf--6wALnd36DUepY");
const DT_CHAT_ID = -1001629065520 ;
//-1001629065520 519052707
const commands  = require('./commands')



function registerCommands(bot, commands) {
    Object.values(commands).forEach((cmd) => cmd.init(bot));
}


registerCommands(bot,commands)
bot.start((ctx) => {
    let message = `Доброго дня з вами тато Аристовича, я зараз ще в девелопменті, але нічого:) \n2-3 тижні проблем немає`
    ctx.reply(message)
    console.log(bot);
    console.log(hears)
})


function replayWithJoke(ctx) {
    const msg = (hears.find(([pattern]) => pattern.test(ctx.message.text)) ||
      [])[1];
    if (msg) {
      ctx.reply(msg);
    }
  }

bot.on("message", (ctx)=>{
    console.log(ctx.chat.id)
    if (ctx.chat.id === DT_CHAT_ID) {
        
        if (typeof ctx.message.from.id === "number") {
            replayWithJoke(ctx);
        }
    } else {
      console.error("user id is not a number");
    }
});



bot.launch();