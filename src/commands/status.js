const { usersInfo } = require('../utils')
const token = "5430080139:AAGdysDHjcI3m-zxX8qf--6wALnd36DUepY"
function init(bot){
    bot.command("/status",async (ctx)=>{
        console.log(ctx.message.from)
        switch (ctx.message.from.username) {
            
            case "Maks_Maryanchuk":{
                const res = await getUserPhoto(ctx);
                    ctx.replyWithPhoto(res, {
                        caption : printUserInfo(usersInfo.find(x=>x.key =="Maks_Maryanchuk"))
                    });     
                break;
            }
            case "serhiy_dvoryannikov":{
                const res = await getUserPhoto(ctx);
                    ctx.replyWithPhoto(res, {
                        caption : printUserInfo(usersInfo.find(x=>x.key =="serhiy_dvoryannikov"))
                    });     
                
                break;
            }
            case "varya_2908":{
                const res = await getUserPhoto(ctx);
                    ctx.replyWithPhoto(res, {
                        caption : printUserInfo(usersInfo.find(x=>x.key =="varya_2908"))
                         
                });
                break;
            }
            case "thermk":{
                const res = await getUserPhoto(ctx);
                    ctx.replyWithPhoto(res, {
                        caption : printUserInfo(usersInfo.find(x=>x.key =="thermk"))
                      
                });
                break;
            }
            case "nazarko1703":{
                const res = await getUserPhoto(ctx);
                    ctx.replyWithPhoto(res, {
                        caption : printUserInfo(usersInfo.find(x=>x.key =="nazarko1703"))
                    });     
            
                break;
            }
                
        
            default:
                break;
        }
    });
}

function printUserInfo(user){
    return `${user.name}  ${user.surname}\n\n${user.birthday}\n${user.language}\n`
}

async function getUserPhoto(ctx){
    var user_profile = ctx.telegram.getUserProfilePhotos(ctx.message.from.id);
    
    const userImage = await user_profile.then(function (res) {
        var file_id = res.photos[0][0].file_id;
        console.log(file_id);
        var file = ctx.telegram.getFile(file_id);
        return file_id;
    }).then((err)=>{
        console.log(err);
    })

    return userImage;
}

module.exports = { init }
