$(function () {
    let fall = fallingAnimation();
    let myaudio = document.getElementById('myaudio');
    let firstScene = document.getElementById('scene__first');
    let secondScene = document.getElementById('scene__second');
    let letter = document.getElementById('letter');
    let start = document.getElementById('start');
    let text = document.getElementById('text')
    let textWrapper = document.getElementById('scene_letter')
    let audio = new Audio('./audio/ho-ho-ho.mp3');

    audio.volume = 0.1

    if (localStorage.getItem('wish')) {
        setTimeout(function() {
            showWish(localStorage.getItem('wish'));
        }, 1000);
    } else {

        start && start.addEventListener('click', function () {
            fall.run()
            myaudio.volume = 0.05
            myaudio.play()

            firstScene.classList.add('re-hidden');
            secondScene.classList.remove('re-hidden');
            setTimeout(function () {
                firstScene.style.display = 'none'
            }, 1000)
            document
                .getElementById('presents')
                .addEventListener('click', function (event) {
                    let target = event.target
                    let present = target.closest('.re-present')

                    if (present) {
                        const wish = wishes[_.random(0, wishes.length)];
                        localStorage.setItem('wish', wish);

                        showWish(wish);
                    }
                })
        });
    }

    function showWish(wish) {
        text.textContent = wish;
        textWrapper.classList.remove('re-hidden');
        audio.play();
        setTimeout(() => {
            letter.style.transform = 'translateY(0)';
        }, 2300);
    }
});

var wishes = [
    "Счастье уже стоит за дверью.",
    "Прислушайтесь к советам интуиции.",
    "Счастье где-то рядом, обернитесь вокруг.",
    "Год слёз, но только от радости.",
    "В этом году Вас ждет море счастья.",
    "Дорога в тысячу миль начинается с первогошага.",
    "Будьте внимательны к подсказкам судьбы.",
    "Вперед и только вперед: дело, о котором Выдумаете, —правое!",
    "Доверьтесь интуиции, чем больше будетедумать, тем меньше будете понимать.",
    "Вы будете бодры и энергичны, и потому весь год пройдет отлично!",
    "Этот год будет самым лучшим и ярким.",
    "Новый год будет полон открытиями и успешными начинаниями",
    "Ни одно важное событие не пройдет мимо вас в Наступающем году!",
    "Новый год будет полон новыми открытиями и радостными событиями.",
    "Будь терпелив, и если твое решение правильно, Вселенная поддержит его.",
    "Здоровье Ваше крепче станет, вторая молодость настанет.",
    "Для сердца ожидает Вас услада -большое повышение оклада!",
    "Долой хандру и злость, и месть -получишь радостную весть.",
    "Покорив одну гору, начинай штурмовать другую...",
    "Год будет для вас ослепительным.",
    "От ярких событий и красок иногда захочется закрыть глаза.",
    "Внимательно смотрите по сторонам, чтобы не упуститьвозможность обрести свое счастье.",
    "Год для вас будет очень доходным.",
    "Год для вас будет очень результативным.",
    "Все проекты и дела, которые были намечены в прошлом, легко начнут реализовываться.",
    "Если будешь чаще улыбаться, все мечты твои начнут сбываться.",
    "Веселья полон будет год, хоть будет дел невпроворот."
]
