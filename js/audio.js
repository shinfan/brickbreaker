// audio control object
var audio =  function() {
    // load the media files
    var isAudioEnabled = false;
    var hit = new Audio("audio/hit.wav");
    var powerUp = new Audio("audio/catch.wav");
    var missileLaunch = new Audio("audio/missile_launch.wav");
    var bounce = new Audio("audio/bounce.wav");
    var background = new Audio("audio/bg.wav");

    // muted
    var muted = false;

    // the background music is looped
    background.loop = true;

    // play audio helper function
    function playSound (sound) {
        if (muted)
            return;
        sound.play();
    }

    // play the different audios
    var play = function (kind) {
        if (!this.isAudioEnabled)
            return;
        if ($("#game_area").css("display") == "none")
            return;
        if (kind == "hit") {
            playSound(hit);
        } else if (kind == "powerUp") {
            playSound(powerUp);
        } else if (kind == "missileLaunch") {
            playSound(missileLaunch);
        } else if (kind == "bounce") {
            playSound(bounce);
        }
    }

    var mute = function () {
        if (!this.isAudioEnabled)
            return;
        muted = !muted;
        if ($("#game_area").css("display") == "none") {
            if (muted) {
                background.pause();
            } else {
                background.play();
            }
        }
    }

    // play background music
    var playBackground = function () {
        if (this.isAudioEnabled)
            background.play();
        };
    var pauseBackground = function () {
        if (this.isAudioEnabled)           
            background.pause();
        };
    return {
            isAudioEnabled: isAudioEnabled,
            muted: function(){return muted;},
            background: background,
            pauseBackground: pauseBackground,
            mute: mute,
            play: play,
            playBackground: playBackground
            };
}();

// play background music when the page is finish loading
$(document).ready( function () {
        $("#button_mute1").bind("click", function () {
            $(this).hide();
            $("#button_mute2").show();
            audio.mute();
        });
        $("#button_mute2").bind("click", function () {
            $(this).hide();
            $("#button_mute1").show();
            audio.mute();
        });
        audio.playBackground();
        $("#button_mute2").hide();
});


