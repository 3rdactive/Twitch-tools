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
    "hungerReachLevel5":"i- nee- foo- pleaa- give me fo- *{PETNAME} collapses to the ground unable to move he will need your help to get him up! use {WAKEUPCOMMANDNAME}* ",
    "tiredPassOut":"Im realllly tired... im go- gonna go t- to- slee- Zzzzzzzzz... ZZZzzzzzzzzzzz... Zzzz...",
    "sleepOver":"ZZZzzzzzz... ZZzzz- a. ahh... Aoh.. He- Hello... Mornin!"
}   

var commandResponses = {
    Feed:{
        IfSleep:"zzzzzzz... zzzzzzzzzz.... *{PETNAME} is sleeping, to wake them up use {WAKEUPCOMMANDNAME}*",
        IfSuccessFull:"Thanks for feeding me! ^-^",
        IfApetiteFull:" im not really hungry right now... maybe in {APETITE} minutes?"
    },
    Sleep:{
        IfSuccessFull:"good... nigh- YAWWWN.. Zzzzzz... ZZZzzzzzz... ZZZZZzzzzzzzzz...",
        IfSleep:"Zzzzzzz... Zzzzz... *why are you telling {PETNAME} to sleep when hes already sleeping?*",
        IfNotTired:"im not really sleepy right now... maybe in {TIRED} minutes?"
    },
    WakeUp:{

    }
}

function feedMessage(){
    var FeedMessages =  ["Thanks for feeding me!! ^-^","Yay i got some food :D","I was so hungry, thank you! ^o^","FINNALY SOME FOOD.. I WAS STARVING THANK YOU ;-;"]
    return FeedMessages[hungerLevel]
}

var HungerLevelIncreaseMS = 600000;

var FEEDCOMMANDNAME = "?feed"
var WAKEUPCOMMANDNAME = "?wakeup"
var DRINKCOMMANDNAME = "?drink"
var SLEEPCOMMANDNAME = "?sleep"
var HELPCOMMANDNAME = "?help"
var PETNAME = "Crebbo"



function ProccessRegix(string = "Example text"){
    
    string = string.replace(/{FEEDCOMMANDNAME}/gi,FEEDCOMMANDNAME);
    string = string.replace(/{WAKEUPCOMMANDNAME}/gi,WAKEUPCOMMANDNAME);
    string = string.replace(/{DRINKCOMMANDNAME}/gi,DRINKCOMMANDNAME);
    string = string.replace(/{SLEEPCOMMANDNAME}/gi,SLEEPCOMMANDNAME);
    string = string.replace(/{HELPCOMMANDNAME}/gi,HELPCOMMANDNAME);
    string = string.replace(/{PETNAME}/gi,PETNAME);
    string = string.replace(/{APETITE}/gi,Math.ceil(apetite/60));
    string = string.replace(/{TIRED}/gi,Math.ceil(TiredTicks/60));
    return string;
}