const { Telegraf } = require('telegraf')
const { hears, scheduleInfo }  = require('./utils')
const bot = new Telegraf("5430080139:AAGdysDHjcI3m-zxX8qf--6wALnd36DUepY");
const cron = require('node-cron');
const DT_CHAT_ID = -1001629065520;
//-1001629065520 519052707 
const commands  = require('./commands')
const date = new Date().toLocaleString();

function registerCommands(bot, commands) {
    Object.values(commands).forEach((cmd) => cmd.init(bot));
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
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

bot.on("text", (ctx)=>{
    console.log(ctx.chat.id)
    if (ctx.chat.id === DT_CHAT_ID) {
        if (typeof ctx.message.from.id === "number") {
            replayWithJoke(ctx);
        }
    } else {
      console.error("user id is not a number");
    }
});


console.log(date)

bot.on("voice", (ctx)=>{
    const int = getRandomInt(2);
    if(int == 1){
        ctx.reply(`Далі цей ${ctx.message.from.first_name} шось пиздить...`)
    }
});

function prettyLessonNotification(lesson){
   return`ГАААЙС ПАРАААА\n${lesson.name}\n${lesson.teacher}\n\n@Maks_Maryanchuk @serhiy_dvoryannikov @varya_2908 @thermk @nazarko1703`;
}

function scheduleLessons(lessons){
    cron.schedule("10 8 * * 1-6",()=>{
       let obj = lessons.find(x=>x.hours == 8 && x.minute == 20);
       bot.telegram.sendMessage(DT_CHAT_ID, prettyLessonNotification( obj));
    })
    cron.schedule("40 9 * * 1-6",()=>{
        let obj = lessons.find(x=>x.hours == 9 && x.minute == 50);
        bot.telegram.sendMessage(DT_CHAT_ID, prettyLessonNotification( obj));
    })

    cron.schedule("30 11 * * 1-6",()=>{
        let obj = lessons.find(x=>x.hours == 11 && x.minute == 30);
        bot.telegram.sendMessage(DT_CHAT_ID, prettyLessonNotification( obj));
    })


    //for Testing
    cron.schedule("10 10 * * 1-7",()=>{
       let obj = lessons.find(x=>x.hours == 10 && x.minute == 0);
       bot.telegram.sendMessage(DT_CHAT_ID, prettyLessonNotification( obj));
    })
}

    scheduleInfo.forEach((day)=>{
        switch (day.keyDay) {
            case 1:{
                scheduleLessons(day.lessons);
                break;
            }
            case 2:{
                scheduleLessons(day.lessons);
                break;
            }
            case 3:{
                scheduleLessons(day.lessons);
                break;
            }
            case 4:{
                scheduleLessons(day.lessons);
                break;
            }
            case 5:{
                scheduleLessons(day.lessons);
                break;
            }
            case 6:{
                scheduleLessons(day.lessons);
                break;
            }
            case 7:{
                scheduleLessons(day.lessons);
                break;
            }
            default:
                break;
        }
    })

bot.launch();