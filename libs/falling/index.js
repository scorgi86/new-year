function fallingAnimation(opts) {
    /**
     * @interface presentsNumber
     * @property { HTMLElement } presentField
     */

    var elemStore = [];

    /**
     * TODO:
     * Сделать рандомайзер под разные размеры экрана
     * Сделать вывод адаптива(Пока хз что должно быть)
     */

    var presentsMap = [
        [1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];

    var presentsMapMeta = [
        {
            className: 're-presents-field-row'
        },
        {
            className: 're-presents-field-row _space-around'
        },
        {
            className: 're-presents-field-row _space-around'
        },
        {
            className: 're-presents-field-row _space-around'
        }
    ]

    var getPresentsField = _.memoize(function() {
        return getGlobalOptions().presentsField || createPresentField();
    });

    var getWindowParams = _.memoize(function() {
        const pixelRatio = window.pixelRatio || 1;
        return {
            maxWidth: screen.availWidth / pixelRatio,
            maxHeight: screen.availHeight / pixelRatio,
        }
    });

    var getDefaultOptions = _.memoize(function() {
        return {
            spacingLeft: 20,
            spaccingRight: 20,
        }
    });

    /**
     *
     */
    return {
        run: function(config) {
            var config = _.merge(getDefaultOptions(), config);
            /**
             * @interface IConfig
             * @property { number } speed Скорость падаения элементов
             * @property { number } animationType тип анимании.
             * @property { number } presentsNumber Количество подарков которые будут падать.
             * Бесконечная(1)/Накопительня(2).
             */

            pasteItems();
        }
    }

    /**
     * @interface IElemStore
     * @property { number } Идентификатор элемента на странице
     * @property { number } left позиция элемента от левого края
     * @property { number } top позиция элемента от верхнего края
     */

    function getGlobalOptions() {
        return _.merge(getDefaultOptions(), opts || {});
    }

    function getMaxInRow() {
        var windowParams = getWindowParams();
        var globalOptions = getGlobalOptions();
        var presentPrams = getPresentPramas();
        return windowParams.availWidth /
            (presentPrams.width + globalOptions.spacingLeft + globalOptions.spacingRight);
    }

    /** Конфиг по умолчанию */
    function getDefaultRunConfig() {
        return {
            speed: 100,
            animationType: 1
        };
    };

    /** Вернет параметры картинки */
    function getPresentPramas() {
        return {
            leftSpacing: 20,
            rightSpacing: 20,
            width: 100,
            height: 111.1
        };
    }

    /** Вернет уникальный идентификатор для элемента */
    function genElemID() {
        return Date.now().valueOf();
    }

    /** Создаст элемент подарка */
    function createElem(config) {
        /**
         * @interface IElemConfig
         * @property { string } text текст с предсказанием
         * @property { string } imgPath путь к картинке падарка.
         */
        var elem = document.createElement('div', { class: 're-present', id: genElemID() });
        var position = getNextElemLeftTop();

        elem.style.left = position.left;
        elem.style.top = position.top;
        elem.classList.add('re-present');

        elem.innerHTML = `
            <div class="re-present__image">
                <img class="re-image" src="${config.imgPath}" alt="Открой меня!"/>
            </div>
        `;

        return elem;
    }

    /**
     * Вернет номенр строки и колонки элемента по отступам left/top
     */
    function getNextElemLeftTop() {
        var windowParams = getWindowParams();
        var position = _.last(elemStore);
        var maxInRow = getMaxInRow();
        var lastElemCol = position
            /** Если элемент есть */
            ? windowParams.width / position.left
            /** Если элемент первый */
            : 0;
        var newLeftPosition = lastElemCol >= maxInRow ? 1 : lastElemCol + 1;

        return {
            left: newLeftPosition,
            top: 0
        };
    }

    /**
     * Функция задаст начальную позиция для элемента,
     * относительно других элементов.
     */
    function getElemStartPosition(id) {
        var nextPosition = getNextElemLeftTop();

        elemStore.push({
            id: id,
            left: nextPosition.left,
            top: nextPosition.top
        });
    };

    function animateFall(el, row, index) {
        var windowParams = getWindowParams();
        var rotate = `rotate(${_.random(0, 1) ? -1 : 1 * _.random(10, 70)}deg)`;
        el.style.transform = `translateY(-${2 * windowParams.maxHeight}px)`;
        el.style.transition = '2s all';
        el.children[0].style.transform = 'rotate(0)';
        el.children[0].style.transition = el.style.transition;
        setTimeout(() => {
            requestAnimationFrame(() => {
                el.classList.remove('re-hidden');
                el.classList.add('re-present');
                el.style.transform = `translateY(0px)`;
                el.children[0].style.transform = rotate;
            });
        }, _.random(row * 1000, row * 2000));
    }

    /**
     * Если в настройки не пришел контейнер для подарков - создаст его и закинет в body.
     */
    function createPresentField() {
        var presentsField = document.createElement('div', { id: 'presents' });
        presentsField.id = 'presents';
        presentsField.classList.add('re-presents-field')
        document.body.appendChild(presentsField);
        return presentsField;
    }

    function createRowWithElems(items, rowIndex) {
        var elem = null;
        var row = document.createElement('div');
        row.className = 're-presents-field-row';

        items.forEach((isVisible, index) => {
            elem = createElem({
                text: 'Текст заглушка',
                imgPath: `./img/present-${ _.random(1,3) }.png`
            });

            elem.className = isVisible ? 're-present' : 're-hidden';
            row.className = presentsMapMeta[rowIndex].className;
            row.appendChild(elem);
            animateFall(elem, rowIndex + 1, index + 1);
        });

        return row;
    }

    function pasteItems() {
        var context = getPresentsField();
        presentsMap.forEach((el, index) => {
            context
                .appendChild(createRowWithElems(el, index));
        });
    }
}
