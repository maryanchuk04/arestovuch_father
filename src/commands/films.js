const fetch = require('node-fetch')


let rand = getRandom(1,500);

function getPopularFilms(){
    const url =`https://api.themoviedb.org/3/movie/popular?api_key=6eebdc0113e1323165e2632caa7c3744&language=en&page=${rand}`
    return fetch(url, {
        method : 'GET'
    })
}

function displayPopularFilms(film){
    let resStr = `Назва : ${film.title} \n\n`;
    resStr+=`Оригінальна назва : ${film.original_title}\n`
    resStr+=`Дата релізу: ${film.release_date}\n`;
    resStr+=`Оцінка : ${film.vote_average}\n`;
    resStr+= `Мова оригіналу : ${film.original_language}\n\n`;
    resStr += `Опис : ${film.overview}\n\n`;
    return resStr;
}

function getRandom(min, max){

    return (Math.random() * (max-min)+ min);
}
    

function init(bot){
    bot.command('/films',async (ctx)=>{
        const res = await getPopularFilms();
        if(res.ok){
            const responce = await res.json();
            console.log("work")
            responce.results.forEach(element => {
                ctx.replyWithPhoto(`https://image.tmdb.org/t/p/w500${element.poster_path}`, {
                    caption : displayPopularFilms(element)
                }).catch((err)=>{
                    console.log(err)
                })
            });
        }
    });

    bot.command('/netflix',async (ctx)=>{
        const res = await getNetflixTop();
        if(res.ok){
            const responce = await res.json();
            let str = 'Щотижневий топ фільмів від NETFLIX\n\n';
            responce.forEach(element => {
                str += `\nФільм: ${element.name}\nКількість годин: ${element.hoursviewed}\n\n`
            });
            ctx.reply(str);
        }else{
            console.log(res);
        }
    })
}

function getNetflixTop(){
    const url = 'https://netflix-weekly-top-10.p.rapidapi.com/api/movie';
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'c770d86a7bmsh7767c01f5e4a80ep147065jsn372b4d70e3a9',
          'X-RapidAPI-Host': 'netflix-weekly-top-10.p.rapidapi.com'
        }
      };
      
    return fetch(url, options);
}

module.exports = { init };