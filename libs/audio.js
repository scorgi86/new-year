function audioPlayer(opts) {

    var audio = null;
    var getOptions = _.memoize(function() {
        return _.merge({
            songPath: './audio/bobby_helms-jingle_bells_rock.mp3'
        }, opts || {});
    })



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
        // audio.muted = true;
        audio.volume = 0.1;
        audio.autoplay = true;
    }

    function createAudio() {
        return new Audio(getOptions().songPath);
    }
}
