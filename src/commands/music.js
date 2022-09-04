const fetch = require('node-fetch');
const {Markup} = require('telegraf')

async function getMusicByTitle(title){
    const url = `https://youtube-music1.p.rapidapi.com/v2/search?query=${title}`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c770d86a7bmsh7767c01f5e4a80ep147065jsn372b4d70e3a9',
        'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
      }
    };
    return fetch(url, options);
}


function getDownLoadLink(id){
    const url = `https://youtube-music1.p.rapidapi.com/get_download_url?id=${id}`;

    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c770d86a7bmsh7767c01f5e4a80ep147065jsn372b4d70e3a9',
        'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
    }
    };

    return fetch(url, options)
	
    
}

function handleGetNiceObjects(obj){
    console.log(obj)
    let str = '';
    str += `ID пісні : ${obj.id}\n`;
    str += `\n${obj.name}\n`;
    str += `\nНазва: ${obj.title}\n\n`;
    return str;
}



function init(bot){

    bot.command("/music",async (ctx)=>{
        console.log(ctx.message.text);
        let search =ctx.message.text.slice(6,ctx.message.text.length).trim();
        const res = await getMusicByTitle(search);
        if(res.ok){
            const responce = await res.json();
            const obj = responce.result.songs;
            for (let i = 0; i < 3; i++) {
                bot.telegram.sendPhoto(
                    ctx.chat.id,
                    obj[i].thumbnail, {
                      caption: handleGetNiceObjects(obj[i]) ,
                      reply_markup:{
                        inline_keyboard : [
                            [
                                {text : "Download",  callback_data: obj[i].id}
                            ]
                        ]
                    }
                    }
                  )
                
            }     
        }
    })

    bot.on('callback_query',async (ctx)=>{
        const action = ctx.update.callback_query.data;
        console.log(action)
        const res = await getDownLoadLink(action);
        if(res.ok){
            const responce = await res.json();
            console.log(responce.result.download_url)
            ctx.reply(responce.result.download_url);
        }
        
    });
}
    


module.exports = { init };