chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.type == 'play_sound') {
        var audio = new Audio('wakeup.mp3');
        audio.play();
    }
});