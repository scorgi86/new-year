function isLocal() {
    return location.host.indexOf('localhost') > -1 ||
    location.host.indexOf('127.0.0') > -1;
}
$(function() {

    var fall = fallingAnimation();
    var $tree = document.getElementById('tree');
    var audio = document.getElementById('audio');

    audio.volume = 0.05;
    audio.play();

    fall.run();

    document
        .getElementById('presents')
        .addEventListener('click', function(event) {
            var target = event.target;
            var present = target.closest('.re-present');

            if (present) {
                $tree.classList.add('_move-to-right');
            }
        });
});
