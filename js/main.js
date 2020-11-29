function isLocal() {
    return location.host.indexOf('localhost') > -1 ||
    location.host.indexOf('127.0.0') > -1;
}

// function animateText(el, text) {
//     var i;
//     for(i = 0; i < text.length; i++) {
//         setTimeout(((letterIndex) =>
//             () => el.textContent = text.substr(0,letterIndex))(i),
//         i * 200);
//     }
// }

$(function() {

    var fall = fallingAnimation();
    var $tree = document.getElementById('tree');
    var myaudio = document.getElementById('myaudio');
    var start = document.getElementById('start');
    var modal = document.getElementById('modal');
    var text = document.getElementById('text');
    var textWrapper = document.getElementById('textWrapper')
    start.addEventListener('click', function() {
        fall.run();
        myaudio.volume = 0.05;
        myaudio.play();
        modal.style.display="none"
        document
            .getElementById('presents')
            .addEventListener('click', function(event) {
                var target = event.target;
                var present = target.closest('.re-present');

                if (present) {
                    // $tree.classList.add('_move-to-right');
                    text.textContent = wishes[_.random(0, wishes.length)];
                    textWrapper.classList.add('_visible');
                }
            });
    });
});
var wishes = [
    "Счастье уже стоит за дверью. ",
    "Будьте внимательны к своему здоровью. ",
    "Прислушайтесь к советам интуиции.",
    " Люди, что сейчас рядом, будут помогать весь год. ",
    "Нужная встреча произойдет совсем скоро. ",
    "Любовь улыбается и ждет своего часа. ",
    "Везение в денежных вопросах. ",
    "Удача в любом начинании. ",
    "Счастье где-то рядом, обернитесь вокруг. ",
    "Год слёз, но только от радости. ",
    "Вас ожидает поездка в новую страну. ",
    "Этот год кардинально изменит Вашу жизнь. ",
    "Карьерный рост будет стремителен и успешен. ",
    "Мир и покой в семье весь год. ",
    "Любое дело обречено на успех. ",
    "Путешествие для души подарит необходимый отдых и новые впечатления.",
    " Откройте сердце любви в этом году. ",
    "Семья подарит настоящую поддержку. ",
    "В этом году ожидается множество новых знакомств. ",
    "Пора отдохнуть и заняться хобби. ",
    "В этом году Вас ждет море счастья. ",
    "Фортуна ответит да на любой вопрос. ",
    "Рискуйте и обязательно выиграете. ",
    "Этот год принесет только счастье и успех. ",
    "Тебя ожидает мешок подарков, а дальше всё зависит от тебя!",
    "Вы находитесь на верном пути.",
    "Пришло время действовать!",
    "Пришло время закончить старое и начать новое.",
    "Работайте над дипломатическими способностями - они очень пригодятся для реализации идей.",
    "Размышляйте и не спешите с действиями.",
    "Результат Ваших действий может оказаться неожиданным.",
    "С этого момента ваша доброта приведет вас к успеху.",
    "Семь раз отмерьте, один раз отрежьте!",
    "Слушайте каждого. Идеи приходят отовсюду.",
    " Сосредоточьтесь на семье и гармонии с окружающим миром.",

    "Счастливая жизнь прямо перед вами.",
    "Теперь настало время попробовать что-то новое.",
    "Терпение! Вы почти у цели.",
    "Тот, кто знает, достаточно богат.",
    "Делайте то, чего просит душа и тело",
    "Тот, кто не ждет благодарности, никогда не будет разочарован.",
    "Удача проводит Вас через все трудные времена.",
    "Уделите особое внимание старой дружбе.",
    "Хорошее время, чтобы закончить старые начинания.",
    "Хорошие новости придут к вам по почте.",
    "Хорошо сделанное лучше, чем хорошо сказанное.",
    "Хоть некоторые и пытаются вам помешать, вы все равно достигнете поставленных целей.",
    " Новые знания принесут Вам успех.",
    "Это время, чтобы двигаться. Ваше настроение улучшится.",
    "Вам предстоит рассмотреть неожиданное предложение",
    "Не оставляйте усилий и получите желаемое",
    "Кто-то нуждается в вашей поддержке",
    "В жизни есть главное и не главное, а мы часто тратим силы на пустяки.",
    "Не так хорошо, как хотелось, но и не так плохо, как могло было быть!",
    "Обратная сторона кризиса - новые возможности.",
    "Дорога в тысячу миль начинается с первого шага.",
    "Никогда не бойся делать то, что ты не умеешь.",
    "Помни, ковчег был построен любителем. Профессионалы строили Титаник!",
    "Лучше жалеть о том, что сделал, а не о том, что не сделал.",
    "Делайте, что можете, используя то, что есть, там, где вы сейчас.",
    "Если в себя не веришь, то ничего и не начнешь. А если ничего не начинать, то ничего и не произойдет.",
    "Вас ждет встреча с важным человеком.",
    "Будьте внимательны к подсказкам судьбы.",
    "Пришло время закончить старое и начать новое.",
    "Будьте терпеливы, и если решение Ваше правильно, Вселенная поддержит его.",
    "Присмотритесь к своему здоровью.",
    "Наслаждайтесь удачей и делитесь ею с окружающими Вас людьми.",
    "Очень скоро придет важное известие.",
    "Размышляйте и не спешите с действиями.",
    "Если Вы проявите инициативу, успех не заставит себя ждать.",
    "Ваши надежды и планы сбудутся сверх всяких ожиданий.",
    "В Вашу жизнь войдет нечто новое, что значительно повлияет на Вашу личность.",
    "Вперед и только вперед: дело, о котором Вы думаете, — правое!",
    "Подождите немножко, и следующий день принесет вам неожиданную долгожданную радость.",
    "Скоро вас ожидает лучший шанс.",
    "Посеянное вами «зерно» год назад взойдет при убывающей луне. Урожай ожидается очень богатый, главное, следите, чтобы его никто не потоптал.",
    "Вы долго и упорно ухаживали за деревом, инаконец, оно дало много плодов. Его ветки сгибаются под их невыносимой тяжестью – пришло время собирать заслуженный урожай.",
    "Скоро ты избавишься от плохой привычки и приобретешь две новых.",
    "Все, что вы от души дадите другим, вернется к вам вдвойне.",
    "Наберитесь смелости: и тогда удача придет к вам из волшебных стран.",
    "Огромной любовью тебя повернут к бурной жизни",
    "Вас ожидает нечто волнительное",
    "Вас ожидает романтическое путешествие первым классом",
    "Вы будете безмерно счастливы",
    "Вас ожидает нечто особенное",
    "Вас ожидает необычная поездка",
    "Доверьтесь интуиции, чем больше будете думать, тем меньше будете понимать",
    "Вас будет согревать тепло любимого человека",
    "Вы находитесь в начале чего-то нового",
    "Вас завалят подарками",
    "Ваша жизнь не будет скучной",
    "Вас ждет ураган эмоций",
    "Кто-то будет о Вас очень нежно заботиться",
    "Вас ждут признания в любви",
    "Любовь Вас согреет изнутри",
    "Вам будет с кем подурачиться",
    "Ваши романтические мечты сбудутся",
    "Ловите тысячу поцелуев",
    "Кто-то ищет путь к Вашему сердцу",
    "Вам предстоит сделать крупнейшую ставку в вашей жизни",
    "Вы будете блистать ярче звезд",
    "Вам предстоит роскошный отдых",
    "Ловите воздушные поцелуи…",
    "Ждите необычного признания в любви",
    "Мысли о любви помогут Вам свернуть горы",
    "Кто-то очень ждет встречи с Вами",
    "Вас ждет сумасшедшее веселье",
    "Ждите романтический телефонный звонок",
    "Взгляните на жизнь с другого ракурса",
    "Сконцентрируй все силы на воплощении главной мечты.",
    "События развиваются стремительно. Доверься их течению",
    "Не меняй свой курс.",
    "Не пугайся препятствий, они сделают результат еще более сладким.",
    "Вы полны сил и в любви можете сдвинуть горы.",
    "Настал момент обновлений.",
    "В твоей жизни пока затишье, но впереди ожидается подъем.",
    "Ты у заветной цели или очень близок к ней.",
    "Тебя ожидает радостное событие, но нужно быть максимально доброжелательным.",
    "Осуществятся лишь хорошо продуманные планы.",
    "Исполнение заветного желания уже близко.",
    "Старайся не принимать скоропалительных решений - скоро наступит ясность.",
    "Смелее строй планы!",
    "Твой лозунг - терпение и никакой спешки.",
    "Если следовать выбранному направлению, результат превзойдет все ожидания.",
    "Очень удачное время для воплощения ваших желаний.",
    "Вас будет бросать в жар от чувств и эмоций",
    "Забудьте о прошлом и откроются новые двери",
    "Учителя открывают дверь. Входишь ты сам.",
    "Сегодня тебе признаются в любви.",
    "В Новом году перед тобой открываются все двери.",
    "Из радостных дней 2020 года слепится большое счастье!",
    "В Новом году зарплата растёт, любовь цветёт, мечты сбываются, а тобой все вокруг восхищаются.",
    "Счастье и удача станут твоими верными спутниками.",
    "Будет мир на Земле и деликатесы на столе!",
    "Между заботами, между делами старательно будешь лежать на диване.",
    "Ждет Вас поездка в Европу и удача по гороскопу!",
    "Денег будет немерено!– И не фальшивых, а проверенных!",
    "Вы будете бодры и энергичны, и потому весь год пройдет отлично!",
    "Хорошая в семье атмосфера и головокружительная личная карьера!",
    "Здоровье Ваше крепче станет, вторая молодость настанет.",
    "Найдете крепкую опору для Вас и вашего делового партнера!",
    "Будут у Вас доходы законные и толковые подчиненные!",
    "Для сердца ожидает Вас услада - большое повышение оклада!",
    "Ждите рост семейного дохода и отпуск в любимое время года!",
    "Ждет тебя вскоре поездка на море!",
    "Долой хандру и злость, и месть - получишь радостную весть.",
    "Появится вдруг у тебя новый друг.",
    "Пряники и сладости - будет много радости!",
    "Тебя в конце недели ждет праздник и веселье.",
    "Солнце вновь и счастье вновь - встретишь новую любовь!",
    "Каждый день и каждый час кто-то думает о вас!",
    "Будет у тебя всегда в доме вкусная еда!",
    "Сохранить желаю стиль! Будет вам автомобиль!",
    "Вам удачи, счастья, мира! Будет вам своя квартира!",
    "Теперь настало время попробовать что-то новое.",
    "За здоровье ваше тост! Будет вам карьерный рост!",
    "Впечатлений много разных в путешествиях прекрасных!",
    "Не скучать желаю зря, будут новые друзья!",
    "Тебя ожидает мешок подарков, а дальше всё зависит от тебя!",
    "Покорив одну гору, начинай штурмовать другую.",
    "Этот год будет самым лучшим и ярким.",
    "Новый год будет полон открытиями и успешными начинаниями",
    "В вашем доме навсегда поселятся счастье и любовь.",
    "Ваши надежды и планы сбудутся сверх всяких ожиданий.",
    "Если Вы проявите инициативу, успех не заставит себя ждать.",
    "Готовьтесь к романтическим приключениям.",
    "Ни одно важное событие не пройдет мимо вас в Наступающем году!",
    "Новый год будет полон новыми открытиями и радостными событиями.",
    "Новый год подарит много волшебных моментов.",
    "Новогодним хороводом спешат к вам деньги, успех, удача.",
    "Новости будут только радостными, дела — успешными, знакомства — приятными.",
    "Пусть желанья исполняются, а карманы наполняются.",
    "Пусть твой доход растет круглый год.",
    "Пусть желанья исполняются, а карманы наполняются.",
    "Будь терпелив, и если твое решение правильно, Вселенная поддержит его.",
    " Твоя цель достижима!",
    "Наслаждайся удачей и делись ею с окружающими людьми.",
    "Жди сюрприз.",
    "Посмотри в зеркало и ты увидишь обаятельную мордашку. ",
    " Ты чему-то очень удивишься!",
    " Делай что должен, и будь что будет.",
    "Твой кошелек не будет пуст: знать будет ежедневно денег хруст!",
    "В Новом Году ты будешь иметь удовольствие тратить много денег, а так же иметь удовольствие их заработать",
    "Будет мир на Земле и деликатесы на столе!",
    "На даче, в поле, в огороде ищите вдохновенье у природы.",
    "Впереди у Вас новогодний салют и домашний уют!",
    "Ждет Вас Любовь прекрасная, разделенная и разнообразная!",
    "Хорошая будет погода для Вас и вашего огорода!",
    "Будут у Вас торты, сладости и прочие мелкие радости!",
    "Будет Ваш счастливый смех и в светском обществе успех!",
    "Жди друзей хороших, настоящих! Особенно, среди вышестоящих!",
    "Вы будете бодры и энергичны, и потому весь год пройдет отлично!",
    "Хорошая в семье атмосфера и головокружительная личная карьера!",
    "Здоровье Ваше крепче станет, вторая молодость настанет.",
    "Будут у Вас доходы законные и толковые подчиненные!",
    "Для сердца ожидает Вас услада - большое повышение оклада!",
    "Вы жить привыкли в гуще дел, работа - главный Ваш удел.",
    "Вы баловень судьбы, а значит, Вас ждут успехи и удачи.",
    "С сих пор Вы будете и впредь всё хорошеть и молодеть!",
    "Вам предстоит, друзья, и впредь работой творческой гореть.",
    "Ждите рост семейного дохода и отпуск в любимое время года!",
    "Долой хандру и злость, и месть - получишь радостную весть.",
    "Жди заката, жди рассвета, жди от девушки привета!",
    "Каждый день и каждый час кто-то думает о вас!",
    "Веселей смотри вперед - там тебя богатство ждет!",
    "Подожди немного, ждет тебя дорога.",
    "Пряники и сладости - будет много радости!",
    "Тебя в конце недели ждет праздник и веселье.",
    "Появится вдруг у тебя новый друг.",
    "Солнце вновь и счастье вновь - встретишь новую любовь!",
    "К следующей субботе жди успех в работе!",
    "Будет у тебя всегда в доме вкусная еда!",
    "Покорив одну гору, начинай штурмовать другую...",
    "Прилив энергии поможет Вам справиться с большим объемом незапланированных работ.",
    "Примите то, что вы не можете изменить, и вы будете чувствовать себя лучше.",
    "Пришло время действовать!",
    "Пришло время закончить старое и начать новое.",
    "Пусть мир наполнится спокойствием и доброжелательностью.",
    "Размышляйте и не спешите с действиями.",
    "Результат Ваших действий может оказаться неожиданным.",
    "Романтика переместит вас в новом направлении.",
    "С этого момента ваша доброта приведет вас к успеху.",
    "Сегодня у вас будет красивый день.",
    "Сосредоточьтесь на семье и гармонии с окружающим миром.",
    "Счастливая жизнь прямо перед вами.",
    "Теперь настало время попробовать что-то новое.",
    "Терпение! Вы почти у цели.",
    "Тот, кто знает, достаточно богат.",
    "Тот, кто не ждет благодарности, никогда не будет разочарован.",
    "Удача проводит Вас через все трудные времена.",
    "Уделите особое внимание старой дружбе.",
    "Физическая активность значительно улучшит ваши взгляды на жизнь сегодня.",
    "Хорошее время, чтобы закончить старые начинания.",
    "Хорошие новости придут к вам по почте.",
    "Хорошо сделанное лучше, чем хорошо сказанное.",
    "Хоть некоторые и пытаются вам помешать, вы все равно достигнете поставленных целей.",
    "Человек никогда не стар, чтобы учиться. Новые знания принесут Вам успех.",
    "Это время, чтобы двигаться. Ваше настроение улучшится.",
    "Вам предстоит рассмотреть неожиданное предложение",
    "Делайте то, чего просит душа и тело",
    "Не оставляйте усилий и получите желаемое",
    "Кто-то нуждается в вашей поддержке",
    "Я желаю вам везенья! Ждет в семье вас прибавленье!",
    "Окружал вас чтоб уют! А доходы возрастут!",
    "Пусть сопутствует успех! Вам учиться лучше всех!",
    "Впечатлений много разных в путешествиях прекрасных!",
    "Год будет для вас ослепительным. От ярких событий и красок иногда захочется закрыть глаза. ",
    "Внимательно смотрите по сторонам, чтобы не упустить  возможность обрести свое счастье. ",
    "Год для вас будет очень доходным. ",
    "Год для вас будет очень результативным. Все проекты и дела, которые были намечены в прошлом, легко начнут реализовываться.  ",
    "Год для вас будет романтичным. Откройте свое сердце для любви и перестаньте бояться быть счастливым человеком.  ",
    "Год для вас будет гармоничным. Удивительно, но наконец-то наступит момент, когда во всех сферах будет баланс.  ",
    "Будешь жить весь год не плача, – поспешит к тебе удача.",
    "Будет денег очень много. Ждет тебя успешная дорога!",
    "Не будет никакой заботы, но главное – начать работать!",
    "Если будешь чаще улыбаться, все мечты твои начнут сбываться.",
    "Будет у тебя всегда в доме вкусная еда.",
    "Вы сможете внезапно сесть на мель, где расположен пятизвездочный отель!",
    "Внимание! Это сообщение содержит вирус любви! Он находит самого доброго и хорошего человека!",
    "К осени чувства не ослабнут, а станут сильнее.    ",
    "Вас ожидают легкие романтические увлечения.",
    "Через неделю вас с наскоку поцелует ваша судьба.",
    "Поцелуй - это то, что вы не можете дать, не взяв, и взять не отдав.    ",
    "Для каждого найдется кусочек рая на планете.    ",
    "Это виртуальный поцелуй. Прижать к сердцу. Повторить 7 раз.",
    "Ни одно важное событие не пройдет мимо вас в Наступающем году!",
    "Новогодние и рождественские праздники привнесут в вашу жизнь благодать!",
    "Новогодние и рождественские праздники принесут надежды на лучшее",
    "Новогодние праздники будут полны веселья и новых знакомств!",
    "Новогодние праздники отметьте в кругу друзей",
    "Новогодние снежинки подарят вам ощущение рождественской сказки",
    "Новогодний морозец настроит вас на игривый лад",
    "Новое знакомство в Новом году будет началом романтических отношений",
    "В праздничные дни осторожность за рулем не помешает",
    "Веселья полон будет год, хоть будет дел невпроворот.",
    "Судьба позолотит вам ручку, послав огромную получку.",
    "Жить приятно и вольготно, коль кошелек набит деньгами плотно.",
    "В новом году вас ждет повышение по службе: ваш отдел переедет тремя этажами выше.",
    "Взлетая по карьерной лестнице, смотрите под ноги, чтобы избежать головокружительных последствий.",
    "В наступающем году ожидается большой взрыв: лопнут со злости все твои недруги и конкуренты.",
    "В январе не обращай внимания на громкие хлопки за окном – это лопаются от злости твои завистники!",
    "Если будешь рано вставать каждый день, то в течение 12 месяцев ни разу не опоздаешь на работу.",
    " Долой и злость, и месть, получишь радостную весть.",
    " Жди заката, жди рассвета, жди от милого привета.",
    "Веселей смотри вперед, там богатство тебя ждет.",
    " Подожди немного, ждет тебя дорога.",
    " Тебя в конце недели ждут праздник и веселье.",
    " Появится вдруг у тебя новый друг.",
    " Жди, не плача, придет к тебе удача.",
    " Солнце вновь и счастье вновь - встретишь новую любовь.",
    "К следующей субботе жди успех в работе.",
    "Будет у тебя всегда в доме вкусная еда.",
    "Попытайтесь отдыхать на Багамах раз шесть в год и тогда Вам непременно, непременно вероятно повезет.",
    "Если Вы надолго голым ляжете зимой на лед, никакой микроб зловредный к Вам уже не заползет.",
    "В наступающем году повезет кому-то снова, может Вам или соседу - надо быть всегда готовым.",
    " Ожидают перемены Вас в начале января, к ним готовьтесь постепенно - не теряйте время зря.",
    "Постарайтесь осторожно бегать ночью в гололед, и тогда вполне возможно встретите Вы Новый год.",
    "Год будет для вас ослепительным. От ярких событий и красок иногда захочется закрыть глаза. Наслаждайтесь тем, что принесет этот год. Внимательно смотрите по сторонам, чтобы не упустить  возможность обрести свое счастье.",
    "• Год для вас будет благополучным. Все поводы волноваться останутся в прошлом. Семья и близкие будут радовать, коллеги по работе помогут в новом проекте.  Денежных средств будет хватать и на отдых, и на инвестиции в свое будущее.",
    " Год для вас будет очень доходным. К вам не только устремятся новые денежные потоки, но и поступят предложения о выгодном инвестировании. Приятными покупками станут новый автомобиль или уютная квартира.",
    " Год для вас будет наполнен страстью. Вы давно ждали, чтобы внутри порхали бабочки, и приятная теплота разносилась по телу от прикосновения близкого человека. Новый прилив чувств может полностью поглотить вас. Страсть откроется и в работе, где захочется добиться намеченных ранее целей.",
    " Год для вас будет очень результативным. Все проекты и дела, которые были намечены в прошлом, легко начнут реализовываться. Возможно, вы сами в это не верили. Большого успеха удастся добиться и на личном фронте. Заведите блокнот, чтобы фиксировать все то хорошее, что приготовил для вас будущий год.",
    "Год для вас будет романтичным. Откройте свое сердце для любви и перестаньте бояться быть счастливым человеком. В ответ вы получите поток нежности, о которой так мечтали. Соглашайтесь на романтичные свидания, устраивайте события и сюрпризы для близких. Обретя новый смысл в жизни, все остальное нормализуется тут же.",
    "Год для вас будет сладким. Жизнь в шоколаде чревата тем, что можно заполучить лишний вес. Поэтому купаясь в своем счастье, не забывайте оглядываться по сторонам, чтобы вовремя скорректировать свое поведение. Излишне слащавых людей из окружения лучше убрать, чтобы они не портили гармоничную картину.",
    "Год для вас будет гармоничным. Удивительно, но наконец-то наступит момент, когда во всех сферах будет баланс. Вас устроит все, что будет происходить на работе, на личном фронте и дома. Окружающие заметят, как будут светиться по-новому ваши глаза.",
    " Год для вас будет удивительным. Вы уже отвыкли к тому, что судьба дарит приятные сюрпризы. Именно их она припасла на предстоящий год. Удивят даже те, кого вы, казалось, знали как свои пять пальцев. Даже от весьма авантюрных предложений в этом году лучше не отказываться.",
    "Год для вас будет ошеломительным. Успех, который обрушится на вас, денежный поток и обилие новых знакомств приведут в состояние шока. Приходите в чувство и наслаждайтесь тем, что заготовил новый год для вас.",
    " Год для вас будет наполнен общением. Если даже раньше вы не любили новые знакомства и частые встречи, в этом году это станет основой вашей жизни. Именно через общение вы обретете новых друзей, партнеров или покупателей, а также найдете новую сферу применения своей голове.",
    "Год для вас будет потрясающим. Приготовьтесь, что получаемые вами результаты, успех в делах и яркие отношения с любимыми могут стать предметом зависти. Чтобы не испытать печальных потрясений от недругов, продумайте свою защиту заранее.",
    " Год для вас будет необычным. Вы откроете в себе скрытые резервы, что позволит решиться на самые безумные поступки. ",
    "Год для вас будет активным. Быть в тонусе вам нравится. В отличие от других ваша активность всегда имеет четкую рациональную основу. Действуйте, чтобы добиться успеха: на работе, дома, в бизнесе, в спорте. Ваша активность заразит других, что сделает год богатым на результаты.",
    " Год для вас будет незабываемым. Про него вы не будете рассказывать внукам, но с удовольствием станете вспоминать в глубокой старости, сидя у камина. Яркие отношения, необычные встречи, новые открытия и путешествия оставят неизгладимый след в жизненной истории.",
    " Год для вас будет крутым. Переворот в жизни позволит получить доступ к новым ресурсам. Это откроет возможности для реализации намеченных планов и исполнения мечты. То, что раньше казалось недоступным, вдруг окажется в руках.",
    " Год для вас будет наполнен любовью. Быть в центре внимания, может, и непривычно, но окружающие захотят часто говорить о своих чувствах. Не бойтесь этого внимания. Любовь еще никому не вредила. Она способна преодолеть любые преграды, поэтому свои чувства тоже нет смысла скрывать.",
    "Год для вас будет наполнен добротой. Доброе сердце позволит справиться даже с самыми изощренными кознями. ",
    "Терпение и упорство приведут к положительным результатам.",
    "Этот год принесет много развлечений. Не забывайте о главном в карнавале веселья.",
    "Год сулит чудеса и восторги со стороны окружающих. Готовьтесь стать центром компании и обрести новых друзей.",
    " Вам предстоит много работы, но и повышение дохода, как результат упорного труда. Пробуйте новые сферы, вас ждет успех.",
    "В этом году предстоит решить немало важных вопросов. Каждое принятое решение повлияет на дальнейшую жизнь. Будьте внимательны.",
    "Год благоприятен для самореализации. Все задуманное осуществится легко, как по волшебству. Поверьте в сказку и примите подарки судьбы.",
    "В этом году придется постараться, чтобы удержаться на плаву. В трудной ситуации помогут самые близкие. Не стесняйтесь просить о помощи, и обязательно ее получите.",
    " Вас ждет огромная любовь. Сделайте правильный выбор и она останется с вами на долгое время.",
    "Год хорош для крупных приобретений. Новая машина не будет ломаться, а дом подарит тепло и уют.",
    "В этом году удача будет преследовать Вас во всем. Вероятны крупные выигрыши и серьезные находки.",
    "Год потери спокойствия. Будет казаться, что все идет не так, как Вы того бы хотели. Стоит расслабиться, взять отпуск и собраться с мыслями, чтобы преодолеть сложный период.",
    "Год перемен. Меняйте все, в любых новых начинаниях Вас ждет успех. Побольше решительности, судьба редко дает подобные шансы.",
    "Год четко покажет кто друг, а кто нет. В сложных ситуациях отношение знакомых будет проявляться особенно отчетливо.",
    "Год для Вас. Не бойтесь говорить “нет” и поступать так, как считаете нужным. В противном случае фортуна не станет помогать.",
    " В этом году ваша семья увеличится. Возможны несколько свадеб родственников. Пойманный букет в этом году – особо действенная примета на близкий брак."
];
