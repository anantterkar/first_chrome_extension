document.addEventListener('DOMContentLoaded', function() {
    var audio = new Audio('wakeup.mp3');
    var isPlaying = false;

    document.getElementById('meowButton').addEventListener('click', function() {
        if (!isPlaying) {
            audio.play();
            isPlaying = true;
        }
    });

    document.getElementById('pauseButton').addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
        }
    });
});
