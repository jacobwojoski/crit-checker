
/**
 * Run a custom funtion every time a crit happens
 * @param {chatMessage} Chat message obj in case we need to use any of the info, Currently unused
 */
function runCustomStuff(chatMessage){
    // Only run if your the GM. That way if clients have mod they dont run it too.
    if(game.user.isGM == true)
    {
        console.log("YO WE RUNNING THE CUSTOM STUFF IT WAS A CRIT");
        
        /* !!!!!! PASTE YOUR STUFF BETWEEN THE {} (AFTER THIS LINE) !!!!!! */
        let fileName = '';
        switch(chatMessage.speaker)
        {
            case 'PLAYER_UUID HERE':
                fileName = 'FILE_PLUS+PATH_HERE';
                break;
            case '':
                fileName = '';
                break;
            case '':
                fileName = '';
                break;
            case '':
                fileName = '';
                break;
            case '':
                fileName = '';
                break;
            default:
                console.log('NO PLAYER FOUND');
                return;
        }
        game.moules.get('share-media').API.shareFullscreenMediaToAll(fileName, title="", immersive=false, loop=false, mute=false);   
    }
}

function runCritChecker(chatMessage){
    // If we got a roll message 
    if(chatMessage.isRoll == true)
    {
        // Get roll obj
        let baseRoll = chatMessage.rolls[0];

        // If it was a 10 sided die roll
        if(baseRoll.dice[0].faces == 10) 
        {
            //If we got a crit
            if(baseRoll.total >= 19)
            {
                runCustomStuff(chatMessage);
            }
        }
    }
}

/* Do Something every time a message gets name */
Hooks.on('createChatMessage', (chatMessage) => {
    runCritChecker(chatMessage);
});