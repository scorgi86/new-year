$(function() {
    $('.re-tile').magnificPopup({
        items: {
            src: `<div class="re-popup">
            Год для вас будет гармоничным. Удивительно, но наконец-то наступит момент, когда во всех сферах будет баланс. Вас устроит все, что будет происходить на работе, на личном фронте и дома. Окружающие заметят, как будут светиться по-новому ваши глаза.
            </div>`,
            type: 'inline'
        },
        closeBtnInside: true
    });

    var audio = audioPlayer();

    var fall = fallingAnimation();

    fall.run();

    function onMouseMove() {
        setTimeout(() => {
            audio.play();
        }, 1000);
        document.body.removeEventListener('mousemove', onMouseMove);
    }

    document.body.addEventListener('mousemove', onMouseMove);
});
