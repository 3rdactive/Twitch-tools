const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: UsId,
		password: Auth
	},
	channels: [ Channel ]
});
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
client.connect().catch(console.error);
var channel= Channel;
var hungerLevel = 0;
var apetite = 0;
var state = "idle"
var TiredTicks = getRandomArbitrary(120,1200);
var SleepingTicks = 0;

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	//if(self) return;
	try {
		this.channel=channel;
	if(message.toLowerCase() === '!credits' || message.toLowerCase() === '!creator' || message.toLowerCase() === '!credit') {
		// "@alca, heya!"
		client.say(channel, `@${tags.username}, heya! this bot was made by @3rdactive and you can find my twitch toolset on here! github.com/3rdactive/Twitch-tools`);
	}
	if(message.toLowerCase()===FEEDCOMMANDNAME){

		if(SleepingTicks>0){
			client.say(channel, `@${tags.username},` + ProccessRegix(commandResponses.Feed.IfSleep));
		}
		else
		if(apetite<1){
			client.say(channel, `@${tags.username},` + ProccessRegix(commandResponses.Feed.IfSuccessFull));
			apetite=getRandomArbitrary(2,15)*60;
			hungerLevel=0;
			state="eat";
			setTimeout(function run(){
				state="idle";
			},getRandomArbitrary(1500,2500));
		}
		else{
			client.say(channel, `@${tags.username},` + ProccessRegix(commandResponses.Feed.IfApetiteFull));
		}
	}
	if(message.toLowerCase()==SLEEPCOMMANDNAME){
		if(TiredTicks>0){
			client.say(channel, `@${tags.username},`+commandResponses.Sleep.IfNotTired);
		}
		else if(SleepingTicks>0){
			client.say(channel, `@${tags.username},`+commandResponses.Sleep.IfSleep);
		}
		else{
			client.say(channel, `@${tags.username},`+commandResponses.Sleep.IfSuccessFull);
			SleepingTicks=getRandomInt(120,1200);
		}
	}
	if(message.toLowerCase()==HELPCOMMANDNAME){
		client.say(channel, ProccessRegix(`@${tags.username}, all avilable commands: {SLEEPCOMMANDNAME} | send your pet to sleep if their tired. {FEEDCOMMANDNAME} | feeds your pet!`));
	}
	} catch (error) {
		client.say(channel, `@${tags.username}, an internal error occoured {${error.toString()}}... you can report it on https://github.com/3rdactive/Twitch-tools/issues/new?assignees=3rdactive&labels=&template=bug_report.md&title=Bug+report`);
	}
	
});
setInterval(function tick(){
	if(SleepingTicks>0){
		state="sleep";
		SleepingTicks--;
		if(SleepingTicks<1){
			state="idle";
			client.say(channel,ProccessRegix(alertMessages.sleepOver));
			TiredTicks = getRandomArbitrary(480,1200);
		}
	}
	else if(TiredTicks>-600){
		TiredTicks--;
		if(TiredTicks<-600){
			SleepingTicks=getRandomInt(120,1200);
			client.say(channel,ProccessRegix(alertMessages.tiredPassOut));
		} 
	}
	if(apetite>0&&hungerLevel<1&&SleepingTicks<1){
		apetite--;
	}
	if(document.getElementById("petgif")!=null) {document.getElementById("petgif").src="./Assets/"+state+".gif";}
	if(document.getElementById("petpng")!=null) {document.getElementById("petpng").src="./Assets/"+state+".png";}
	if(document.getElementById("petjpg")!=null) {document.getElementById("petjpg").src="./Assets/"+state+".jpg";}
},1000);


setInterval(async function HungerTick(){
	if(apetite>0){return;}
	if(channel==null){return;}
	if(SleepingTicks>0){return;}
	if(hungerLevel>4){return;}
	hungerLevel++;
	var message = ProccessRegix(alertMessages['hungerReachLevel'+hungerLevel]);
	client.say(channel,message)
	
},HungerLevelIncreaseMS)


document.addEventListener("DOMContentLoaded", function(event) {
	document.querySelectorAll('img').forEach(function(img){
	   img.onerror = function(){this.remove(this)};
	})
 });


