this module is still in progress!

FAQ:

1. Do you support youtube streaming?
sadly as the directory says this is the "twitch tools"
i might make this module for youtube later on but right now im focusing on finishing the base project
2. Is there a cost to this tool? do i need to credit you?
Nope! this (and all my tools) are covered by the BSD 2-Clause License, meaning you can modify the code and use it for free!
aldo i will appricate credit to my website (3rdactive.com) or the github repository so other people can discover the modules!
3. My module isnt working... what do i do?
File a bug report! if your module isnt working please file a bug report on the repository and make sure to put as much details as possible
so i can solve it as fast as i can!
4. Can i make modifications to your code?
Yes! feel free to use my code for your own projects or other things! my project is however covered by the BSD 2-Clause License
meaning if you modify the code or re-write it. you must also link your project under the BSD 2-Clause License (meaning people can also take your code and modify it as they wish)



How to use:
• Authenticate your connection:
the first step (and most important one) is to authenticate your account!
this bot does not have an account of its own, that means your going to have to use an account you own
for the bot client. we suggest not using your main account so chatters wont confuse your chats with the bot's message

To authenticate your connection go into the "config.js" file in the "Twitch-Pet" directory
you will then see this line:

var Auth = "";

you will need to insert your auth token (Which u can generate here: https://twitchapps.com/tmi/)
inside the brackets, an auth token should like this: "oauth:123412341234123412341234123412" 
remember to INCLUDE the "oauth:" part of the text

you should also see a line saying:

var UsId = "";

insert the username of the account u used to generate the Auth token inside the brackets


and now, the last thing is this line:

var Channel = "";

This is fairly simple, insert the name of your channel (the channel the bot should run on) inside the brackets

 • Overlay:
Now its time to make your little pet show up on stream!
following is the steps to implement in all supported streaming services:
• Obs:
Now, for the first step locate the "Sources" area in obs.

Then click on the plus icon or "add"

Select "browser" (should have a little earth icon)

Then select "Create new" and click "OK"

Then an options menu will open, select "Local File"

Then click the "browse" button below the "Local File" Switch

After that a file browser should open, when that happens select the "main.html" file from the "Twitch-Pet' directory

After that click "OK"

If you did everything ok, your pet should appear on screen! (the chat bot will only be active if the browser source is active)

 If you want to add the pet to another scene but u already have the pet in another scene follow these steps:

locate the "Sources" area in obs.

Then click on the plus icon or "add"

Select "browser" (should have a little earth icon)

Then click "Add existing" and select the name of the source of your pet

Once doing that your pet should appear on the other scene without causing a duplicate error!

• Streamlabs:

First locate the "Sources" area.

Then click the plus or "add" button

A menu will appear, select the "Browser source" option under "General Sources"

You will then need to input a name. feel free to type anything, this wont be important.

Another menu will then appear, Select the "Local file" option.

You will then need to select "Browse" a file browser will then open. select the "main.html" file from the "Twitch-Pet" directory

Make sure to toggle "Shutdown source when not visible"

Then just click "Close" in the bottom right.

if you did everything correct, your pet should appear on the screen!

• Twitch Studio:

First locate the "Scenes" menu in the left, select the scene you want to add your pet to and click "edit"

Locate and press the "Add layer" button with the plus icon in the bottom left 

Then select the "Browser source" option and click "Add"

The browser source should be in the scene but the pet wont appear yet, to do that locate the "Webpage" area in the middle right

Then click "Browse for local HTML file" a file explorer should appear, after that happens select "main.html" in the "Twitch-Pet" directory

Your pet should now be on the screen!

 If you want to add the crab to another scene follow the next steps:

First locate the "Scenes" menu in the left, select the scene you added your original pet to and click "edit"

Find the browser source of the pet and select it.

3 icons should appear on the left near the name, an eye (Hide layer) a lock (Lock layer) and a chain (Link layer)

select the chain (Link Layer) then click "Got it"

Congratulations! your source is now linked!

now locate the "Scenes" menu in the left, then select the scene you want to add your pet to and click "edit"

Locate and press the "Add layer" button with the plus icon in the bottom left 

Then select the "Browser source" option

In the middle a menu should appear saying: "Existing Linked Layers" Select the name of the browser source of the pet and click "Add"

Once doing that your pet should appear on the other scene without causing a duplicate error!

if the streaming service you are using is not listed here, you can try and implement it yourself.
but beware, these services are not supported.
