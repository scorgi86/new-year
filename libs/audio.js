function audioPlayer(opts) {

    var jingleBellsSong = './audio/bobby_helms-jingle_bells_rock.mp3';
    var audio = null;

    init();

    return {
        play: function() {
            audio.play();
        },

        pause: function() {
            audio.pause();
        },

        stop: function() {
            audio.pause();
        },

        volume: function() {

        },
    }

    function init() {
        audio = createAudio();
        audio.volume = 0.1;
    }

    function createAudio() {
        return new Audio(jingleBellsSong);
    }

    function play() {

    }

    function stop() {

    }

    function pause() {

    }

    function volume() {

    }
}
