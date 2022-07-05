// insert your twitch auth token here. MAKE SURE U DONT SHARE THIS WITH ANYONE YOU DONT TRUST!
// you can generate a twitch auth token here: https://twitchapps.com/tmi/

// how a token should look like: "oauth:123412341234123412341234123412"
var Auth = "";


//insert the username of the account you used to generate the auth token!
var UsId = "";


//insert the channel the bot should run on
var Channel = "";


//Beyond this point are configs that arent required for you to change. but you can if you want to change further settings!

var alertMessages = {
    "hungerReachLevel1":"Hey! im getting hungry ^-^ would you mind feeding me with {FEEDCOMMANDNAME}",
    "hungerReachLevel2":"Hey. i want some food! can you please feed me with {FEEDCOMMANDNAME}? (. _. ) im getting hungry",
    "hungerReachLevel3":"Ermm im REALLY hungry... can you please feed me with {FEEDCOMMANDNAME}... ;-; please i am very hungry...",
    "hungerReachLevel4":"Listen im starving here... PLEASE FEED ME WITH {FEEDCOMMANDNAME} I WANT FOOD D:<",
    "hungerReachLevel5":"i- nee- foo- pleaa- give me fo- "
}   

function feedMessage(){
    var FeedMessages =  ["Thanks for feeding me!! ^-^","Yay i got some food :D","I was so hungry, thank you! ^o^","FINNALY SOME FOOD.. I WAS STARVING THANK YOU ;-;"]
    return FeedMessages[hungerLevel]
}

var HungerLevelIncreaseMS = 600000;

var FEEDCOMMANDNAME = "!feed"
var WAKEUPCOMMANDNAME = "!wakeup"
var DRINKCOMMANDNAME = "!drink"
var SLEEPCOMMANDNAME = "!sleep"
var PETNAME = "Crebbo"



function ProccessRegix(string = "Example text"){
    
    string = string.replace(/{FEEDCOMMANDNAME}/gi,FEEDCOMMANDNAME);
    string = string.replace(/{WAKEUPCOMMANDNAME}/gi,WAKEUPCOMMANDNAME);
    string = string.replace(/{DRINKCOMMANDNAME}/gi,DRINKCOMMANDNAME);
    string = string.replace(/{SLEEPCOMMANDNAME}/gi,SLEEPCOMMANDNAME);
    string = string.replace(/{PETNAME}/gi,PETNAME);
    return string;
}
