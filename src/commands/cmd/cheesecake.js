module.exports={
    name: 'cheesecake',
    description: 'postea un gif random cheesecake',
    usage: 'cheesecake',
    aliases: [],
    isPrivate: false,
    guildonly: false,
    category: 'cheesecake',
    isOwner: true,
    run: cheesecake,  
}

function cheesecake(client, message, args) {
    const gifs_cheesecake = [
        "https://tenor.com/view/national-cheesecake-day-cheesecake-happy-cheesecake-day-gif-12249057",                          //1
        "https://tenor.com/view/national-cheesecake-day-cheesecake-happy-cheesecake-day-gif-12249100",                          //2
        "https://tenor.com/view/cheesecake-yummy-dessert-fork-delicious-gif-18138886",                                          //3
        "https://tenor.com/view/cheesecake-dessert-food-cheesecake-day-gif-18248532",                                           //4
        "https://cdn.discordapp.com/attachments/884830887097815091/884835289158271006/e662088ed38b99ecff86af6d1dd05016.gif",    //5
        "https://tenor.com/view/bread-cooking-pat-happy-excited-gif-12749905",                                                  //6
        "https://tenor.com/view/cheesecake-decorating-cheesecake-day-dessert-food-gif-18322845",                                //7
        "https://tenor.com/view/sml-shrek-cheesecake-cheesecake-day-national-cheesecake-day-gif-19635375",                      //8
        "https://tenor.com/view/sml-shrek-cheesecake-eating-eating-cheesecake-gif-18237716",                                    //9
        "https://tenor.com/view/cheesecake-strawberry-cheesecake-dessert-yummy-delicious-gif-18138853",                         //10
        "https://cdn.discordapp.com/attachments/884830887097815091/884838180350750730/cheesecake-food.png",                     //11
        "https://c.tenor.com/7teMV2ppTvYAAAAM/cheesecake-dessert.gif",                                                          //12
        "https://tenor.com/view/national-cheesecake-day-cheesecake-happy-cheesecake-day-gif-12249065",                          //13
        "https://tenor.com/view/cheesecake-dessert-food-cheesecake-day-gif-18260423",                                           //14
        "https://tenor.com/view/anime-dessert-cakes-anime-gif-13473074",                                                        //15
        "https://tenor.com/view/desert-food-cake-sweet-gif-11820608"                                                            //16
    ];
    
    
    random = Math.round(Math.random() * (gifs_cheesecake.length - 1));//random()*(max-min)+min

    message.channel.send(gifs_cheesecake[random]);

}
