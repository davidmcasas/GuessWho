const GUESS_WHO_QUESTIONS = [
    {text: "¿Es una mujer?", attribute: "isWoman"},
    {text: "¿Tiene la piel oscura?", attribute: "hasDarkSkin"},
    {text: "¿Es rubio/a?", attribute: "isBlond"},
    {text: "¿Es pelirrojo/a?", attribute: "isRedhead"},
    {text: "¿Tiene el pelo canoso?", attribute: "hasGrayHair"},
    {text: "¿Tiene el pelo oscuro?", attribute: "hasDarkHair"},
    {text: "¿Tiene los labios cerrados?", attribute: "hasClosedLips"},
    {text: "¿Tiene bigote?", attribute: "hasMoustache"},
    {text: "¿Tiene barba?", attribute: "hasBeard"},
    {text: "¿Lleva algo en la cabeza?", attribute: "wearsHat"},
    {text: "¿Lleva gafas?", attribute: "wearsGlasses"},
    {text: "¿Lleva pendientes?", attribute: "wearsEarrings"},
];

const GUESS_WHO_CHARACTERS = [
    {
        id: 1,
        image: "images/characters/1.svg",
        name: "Antonio",
        attributes: {
            isWoman: 0, hasDarkSkin: 0, isBlond: 0, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 1,
            hasClosedLips: 0, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 0, wearsEarrings: 0,
        }
    },
    {
        id: 2,
        image: "images/characters/2.svg",
        name: "María",
        attributes: {
            isWoman: 1, hasDarkSkin: 0, isBlond: 1, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 0,
            hasClosedLips: 1, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 0, wearsEarrings: 0,
        }
    },
    {
        id: 3,
        image: "images/characters/3.svg",
        name: "Iván",
        attributes: {
            isWoman: 0, hasDarkSkin: 0, isBlond: 0, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 1,
            hasClosedLips: 1, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 0, wearsEarrings: 0,
        }
    },
    {
        id: 4,
        image: "images/characters/4.svg",
        name: "Susana",
        attributes: {
            isWoman: 1, hasDarkSkin: 0, isBlond: 1, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 0,
            hasClosedLips: 0, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 0, wearsEarrings: 0,
        }
    },
    {
        id: 8,
        image: "images/characters/8.svg",
        name: "Tom",
        attributes: {
            isWoman: 0, hasDarkSkin: 0, isBlond: 0, isRedhead: 1, hasGrayHair: 0, hasDarkHair: 0,
            hasClosedLips: 0, hasMoustache: 1, hasBeard: 1, wearsHat: 1, wearsGlasses: 0, wearsEarrings: 0,
        }
    },
    {
        id: 10,
        image: "images/characters/10.svg",
        name: "Rashid",
        attributes: {
            isWoman: 0, hasDarkSkin: 1, isBlond: 0, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 1,
            hasClosedLips: 0, hasMoustache: 1, hasBeard: 0, wearsHat: 0, wearsGlasses: 0, wearsEarrings: 0,
        }
    },
    {
        id: 11,
        image: "images/characters/11.svg",
        name: "Adela",
        attributes: {
            isWoman: 1, hasDarkSkin: 0, isBlond: 0, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 0,
            hasClosedLips: 0, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 1, wearsEarrings: 1,
        }
    },
    {
        id: 12,
        image: "images/characters/12.svg",
        name: "Joaquín",
        attributes: {
            isWoman: 0, hasDarkSkin: 0, isBlond: 0, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 1,
            hasClosedLips: 1, hasMoustache: 1, hasBeard: 1, wearsHat: 0, wearsGlasses: 1, wearsEarrings: 0,
        }
    },
    {
        id: 16,
        image: "images/characters/16.svg",
        name: "Hassan",
        attributes: {
            isWoman: 0, hasDarkSkin: 0, isBlond: 0, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 1,
            hasClosedLips: 0, hasMoustache: 1, hasBeard: 1, wearsHat: 1, wearsGlasses: 0, wearsEarrings: 0,
        }
    },
    {
        id: 17,
        image: "images/characters/17.svg",
        name: "Víctor",
        attributes: {
            isWoman: 0, hasDarkSkin: 0, isBlond: 0, isRedhead: 0, hasGrayHair: 1, hasDarkHair: 0,
            hasClosedLips: 0, hasMoustache: 1, hasBeard: 0, wearsHat: 0, wearsGlasses: 0, wearsEarrings: 0,
        }
    },
    {
        id: 19,
        image: "images/characters/19.svg",
        name: "Sergio",
        attributes: {
            isWoman: 0, hasDarkSkin: 0, isBlond: 0, isRedhead: 1, hasGrayHair: 0, hasDarkHair: 0,
            hasClosedLips: 0, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 0, wearsEarrings: 0,
        }
    },
    {
        id: 23,
        image: "images/characters/23.svg",
        name: "Bernardo",
        attributes: {
            isWoman: 0, hasDarkSkin: 0, isBlond: 0, isRedhead: 0, hasGrayHair: 1, hasDarkHair: 0,
            hasClosedLips: 1, hasMoustache: 1, hasBeard: 1, wearsHat: 0, wearsGlasses: 1, wearsEarrings: 0,
        }
    },
    {
        id: 24,
        image: "images/characters/24.svg",
        name: "Lorena",
        attributes: {
            isWoman: 1, hasDarkSkin: 0, isBlond: 0, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 1,
            hasClosedLips: 0, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 0, wearsEarrings: 0,
        }
    },
    {
        id: 26,
        image: "images/characters/26.svg",
        name: "Brian",
        attributes: {
            isWoman: 0, hasDarkSkin: 0, isBlond: 0, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 1,
            hasClosedLips: 1, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 1, wearsEarrings: 0,
        }
    },
    {
        id: 27,
        image: "images/characters/27.svg",
        name: "Kiara",
        attributes: {
            isWoman: 1, hasDarkSkin: 1, isBlond: 0, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 1,
            hasClosedLips: 0, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 1, wearsEarrings: 0,
        }
    },
    {
        id: 32,
        image: "images/characters/32.svg",
        name: "Juanjo",
        attributes: {
            isWoman: 0, hasDarkSkin: 0, isBlond: 0, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 1,
            hasClosedLips: 1, hasMoustache: 0, hasBeard: 0, wearsHat: 1, wearsGlasses: 0, wearsEarrings: 0,
        }
    },
    {
        id: 33,
        image: "images/characters/33.svg",
        name: "Marina",
        attributes: {
            isWoman: 1, hasDarkSkin: 0, isBlond: 1, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 0,
            hasClosedLips: 0, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 1, wearsEarrings: 0,
        }
    },
    {
        id: 36,
        image: "images/characters/36.svg",
        name: "Naomi",
        attributes: {
            isWoman: 1, hasDarkSkin: 1, isBlond: 0, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 1,
            hasClosedLips: 0, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 0, wearsEarrings: 0,
        }
    },
    {
        id: 40,
        image: "images/characters/40.svg",
        name: "Irene",
        attributes: {
            isWoman: 1, hasDarkSkin: 0, isBlond: 0, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 1,
            hasClosedLips: 0, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 1, wearsEarrings: 1,
        }
    },
    {
        id: 45,
        image: "images/characters/45.svg",
        name: "Lucía",
        attributes: {
            isWoman: 1, hasDarkSkin: 0, isBlond: 0, isRedhead: 1, hasGrayHair: 0, hasDarkHair: 0,
            hasClosedLips: 0, hasMoustache: 0, hasBeard: 0, wearsHat: 1, wearsGlasses: 0, wearsEarrings: 1,
        }
    },
    {
        id: 46,
        image: "images/characters/46.svg",
        name: "Macarena",
        attributes: {
            isWoman: 1, hasDarkSkin: 0, isBlond: 1, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 0,
            hasClosedLips: 0, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 0, wearsEarrings: 1,
        }
    },
    {
        id: 49,
        image: "images/characters/49.svg",
        name: "Joe",
        attributes: {
            isWoman: 0, hasDarkSkin: 1, isBlond: 0, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 1,
            hasClosedLips: 0, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 1, wearsEarrings: 0,
        }
    },
    {
        id: 52,
        image: "images/characters/52.svg",
        name: "Jeffrey",
        attributes: {
            isWoman: 0, hasDarkSkin: 1, isBlond: 0, isRedhead: 0, hasGrayHair: 1, hasDarkHair: 0,
            hasClosedLips: 1, hasMoustache: 0, hasBeard: 1, wearsHat: 0, wearsGlasses: 1, wearsEarrings: 0,
        }
    },
    {
        id: 53,
        image: "images/characters/53.svg",
        name: "Diana",
        attributes: {
            isWoman: 1, hasDarkSkin: 0, isBlond: 0, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 1,
            hasClosedLips: 0, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 0, wearsEarrings: 1,
        }
    },
    {
        id: 58,
        image: "images/characters/58.svg",
        name: "Maggie",
        attributes: {
            isWoman: 1, hasDarkSkin: 1, isBlond: 0, isRedhead: 0, hasGrayHair: 1, hasDarkHair: 0,
            hasClosedLips: 1, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 1, wearsEarrings: 1,
        }
    },
    {
        id: 59,
        image: "images/characters/59.svg",
        name: "Tobías",
        attributes: {
            isWoman: 0, hasDarkSkin: 0, isBlond: 0, isRedhead: 1, hasGrayHair: 0, hasDarkHair: 0,
            hasClosedLips: 1, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 0, wearsEarrings: 0,
        }
    },
    {
        id: 60,
        image: "images/characters/60.svg",
        name: "Esperanza",
        attributes: {
            isWoman: 1, hasDarkSkin: 0, isBlond: 0, isRedhead: 0, hasGrayHair: 1, hasDarkHair: 0,
            hasClosedLips: 1, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 0, wearsEarrings: 1,
        }
    },
    {
        id: 64,
        image: "images/characters/64.svg",
        name: "Pedro",
        attributes: {
            isWoman: 0, hasDarkSkin: 0, isBlond: 1, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 0,
            hasClosedLips: 1, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 0, wearsEarrings: 1,
        }
    },
    {
        id: 69,
        image: "images/characters/69.svg",
        name: "Nuria",
        attributes: {
            isWoman: 1, hasDarkSkin: 0, isBlond: 1, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 0,
            hasClosedLips: 0, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 1, wearsEarrings: 1,
        }
    },
    {
        id: 70,
        image: "images/characters/70.svg",
        name: "Leslie",
        attributes: {
            isWoman: 1, hasDarkSkin: 1, isBlond: 0, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 1,
            hasClosedLips: 0, hasMoustache: 0, hasBeard: 0, wearsHat: 1, wearsGlasses: 0, wearsEarrings: 1,
        }
    },
    {
        id: 72,
        image: "images/characters/72.svg",
        name: "Richard",
        attributes: {
            isWoman: 0, hasDarkSkin: 0, isBlond: 0, isRedhead: 1, hasGrayHair: 0, hasDarkHair: 0,
            hasClosedLips: 0, hasMoustache: 1, hasBeard: 1, wearsHat: 0, wearsGlasses: 0, wearsEarrings: 0,
        }
    },
    {
        id: 74,
        image: "images/characters/74.svg",
        name: "Miguel",
        attributes: {
            isWoman: 0, hasDarkSkin: 0, isBlond: 0, isRedhead: 1, hasGrayHair: 0, hasDarkHair: 0,
            hasClosedLips: 1, hasMoustache: 0, hasBeard: 0, wearsHat: 1, wearsGlasses: 1, wearsEarrings: 1,
        }
    },
    {
        id: 78,
        image: "images/characters/78.svg",
        name: "Billy",
        attributes: {
            isWoman: 0, hasDarkSkin: 1, isBlond: 0, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 1,
            hasClosedLips: 0, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 0, wearsEarrings: 0,
        }
    },
    {
        id: 80,
        image: "images/characters/80.svg",
        name: "Laura",
        attributes: {
            isWoman: 1, hasDarkSkin: 0, isBlond: 0, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 1,
            hasClosedLips: 0, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 1, wearsEarrings: 0,
        }
    },
    {
        id: 81,
        image: "images/characters/81.svg",
        name: "Daniel",
        attributes: {
            isWoman: 0, hasDarkSkin: 0, isBlond: 0, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 1,
            hasClosedLips: 0, hasMoustache: 1, hasBeard: 0, wearsHat: 0, wearsGlasses: 0, wearsEarrings: 0,
        }
    },
    {
        id: 84,
        image: "images/characters/84.svg",
        name: "Flor",
        attributes: {
            isWoman: 1, hasDarkSkin: 0, isBlond: 0, isRedhead: 1, hasGrayHair: 0, hasDarkHair: 0,
            hasClosedLips: 0, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 0, wearsEarrings: 1,
        }
    },
    {
        id: 90,
        image: "images/characters/90.svg",
        name: "Amalia",
        attributes: {
            isWoman: 1, hasDarkSkin: 0, isBlond: 0, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 1,
            hasClosedLips: 1, hasMoustache: 0, hasBeard: 0, wearsHat: 1, wearsGlasses: 0, wearsEarrings: 1,
        }
    },
    {
        id: 98,
        image: "images/characters/98.svg",
        name: "Marta",
        attributes: {
            isWoman: 1, hasDarkSkin: 0, isBlond: 0, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 1,
            hasClosedLips: 0, hasMoustache: 0, hasBeard: 0, wearsHat: 1, wearsGlasses: 0, wearsEarrings: 0,
        }
    },
    {
        id: 101,
        image: "images/characters/101.svg",
        name: "Pablo",
        attributes: {
            isWoman: 0, hasDarkSkin: 0, isBlond: 0, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 1,
            hasClosedLips: 0, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 1, wearsEarrings: 0,
        }
    },
    {
        id: 102,
        image: "images/characters/102.svg",
        name: "Alicia",
        attributes: {
            isWoman: 1, hasDarkSkin: 0, isBlond: 0, isRedhead: 0, hasGrayHair: 1, hasDarkHair: 0,
            hasClosedLips: 1, hasMoustache: 0, hasBeard: 0, wearsHat: 1, wearsGlasses: 0, wearsEarrings: 1,
        }
    },
    {
        id: 103,
        image: "images/characters/103.svg",
        name: "Rubén",
        attributes: {
            isWoman: 0, hasDarkSkin: 0, isBlond: 1, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 0,
            hasClosedLips: 0, hasMoustache: 0, hasBeard: 0, wearsHat: 0, wearsGlasses: 0, wearsEarrings: 0,
        }
    },
    {
        id: 106,
        image: "images/characters/106.svg",
        name: "Gerardo",
        attributes: {
            isWoman: 0, hasDarkSkin: 0, isBlond: 0, isRedhead: 0, hasGrayHair: 0, hasDarkHair: 1,
            hasClosedLips: 1, hasMoustache: 1, hasBeard: 1, wearsHat: 0, wearsGlasses: 0, wearsEarrings: 0,
        }
    },
];

let duplicateCharacterIds = checkDuplicates();
let characterPool = createRandomCharacterPool(24);
let secretCharacter = pickRandomCharacter(characterPool);
let pickedCharacter = null;
let shuffledQuestions = createShuffledQuestions();
let questionCount = 0;
let pickMode = false;

$(document).ready(function () {
    for (let char of characterPool) {
        $('#guesswho-characters').append(
            '<div class="character-portrait flipped" data-id="' + char.id + '">' +
            '<div class="character-portrait-inner">' +
            '<div class="character-portrait-front">' +
            '<img src="' + char.image + '">' +
            '<br><span class="character-name">' + char.name + '</span>' +
            '</div>' +
            '<div class="character-portrait-back">?</div>' +
            '</div>' +
            '</div>'
        );
    }

    setTimeout(function()  {
        $('.character-portrait').each(function() {
            $(this).click();
        })
    }, 200);

    $('#guesswho-wrapper').on('click', '.guesswho-question', function () {
        let attribute = $(this).data('attribute');

        $('#guesswho-answer-question').html($(this).html());

        let answer = "No lo sé";
        if (secretCharacter.attributes[attribute] !== undefined && secretCharacter.attributes[attribute] !== null) {
            answer = secretCharacter.attributes[attribute] ? 'Sí' : 'No';
        }
        $('#guesswho-answer-response').html(answer);
        questionCount++;

        shuffledQuestions = shuffledQuestions.filter(function (question) {
            return question.attribute !== attribute;
        });
        shuffledQuestions.sort(() => Math.random() - 0.5);
        showQuestions();

    }).on('click', '.character-portrait', function () {
        if (pickMode) {
            if ($(this).hasClass('flipped')) return;
            let selectedId = $(this).data('id');
            pickedCharacter = characterPool.find(char => char.id === selectedId);
            if (pickedCharacter.id === secretCharacter.id) {
                guessWhoWin();
            } else {
                guessWhoLose();
            }

        } else {
            if ($(this).hasClass('flipped')) {
                $(this).removeClass('flipped');
            } else {
                $(this).addClass('flipped');
            }
        }

    }).on('click', '#guesswho-pick-button', function () {
        pickMode = !pickMode;
        if (pickMode) {
            $('#guesswho-questions').addClass('d-none');
            $(this).text('Selecciona el personaje que creas correcto o pulsa aquí para cancelar');
        } else {
            $('#guesswho-questions').removeClass('d-none');
            $(this).text('¡LO TENGO!');
        }
    });

});

function guessWhoWin() {
    $('#guesswho-game').addClass('d-none');
    $('#guesswho-correct').addClass('d-none');
    $('#guesswho-result').removeClass('d-none');
    $('#guesswho-result-text').text('¡Enhorabuena! ¡Has acertado el personaje secreto en ' + questionCount + ' preguntas!')
    $('#guesswho-selected').html(
        '<img src="' + secretCharacter.image + '">' +
        '<br><span class="character-name">' + secretCharacter.name + '</span>'
    )

    if (typeof(window.guessWhoSubmit) === "function") {
        window.guessWhoSubmit(questionCount, 1);
    }
}

function guessWhoLose() {
    $('#guesswho-game').addClass('d-none');
    $('#guesswho-result').removeClass('d-none');
    $('#guesswho-result-text').text('¡Oh no! ¡Te has equivocado!')
    $('#guesswho-selected').html(
        '<span>Tu elección:</span><br>' +
        '<img src="' + pickedCharacter.image + '">' +
        '<br><span class="character-name">' + pickedCharacter.name + '</span>'
    )
    $('#guesswho-correct').html(
        '<span>Personaje secreto:</span><br>' +
        '<img src="' + secretCharacter.image + '">' +
        '<br><span class="character-name">' + secretCharacter.name + '</span>'
    )

    if (typeof(window.guessWhoSubmit) === "function") {
        window.guessWhoSubmit(questionCount, 0);
    }
}

function createShuffledQuestions() {
    let copy = GUESS_WHO_QUESTIONS.slice(0);
    copy.sort(() => Math.random() - 0.5);
    return copy;
}

function createRandomCharacterPool(qty) {
    let copy = GUESS_WHO_CHARACTERS.slice(0);
    copy.sort(() => Math.random() - 0.5);
    let result = [];
    while (qty > 0 && copy.length > 0) {
        let char = copy.pop();
        if (!duplicateCharacterIds.includes(char.id)) {
            qty--;
            result.push(char);
        }
    }
    return result;
}

function pickRandomCharacter(pool) {
    return pool[Math.floor(Math.random() * pool.length)];
}

function showQuestions() {
    let html = '';
    let i = 0;
    for (let question of shuffledQuestions) {
        i++;
        html += '<button class="guesswho-question" data-attribute="' + question.attribute + '">' + question.text + '</button><br>';
        if (i >= 4) {
            break;
        }
    }
    $('#guesswho-questions').html(html);
}

function checkDuplicates() {
    let duplicateCount = 0;
    let duplicateCharacters = [];
    for (let a of GUESS_WHO_CHARACTERS) {
        if (duplicateCharacters.includes(a.id)) continue;

        nextCharacter:
            for (let b of GUESS_WHO_CHARACTERS) {
                if (a === b) continue;

                for (let attribute in (a.attributes)) {
                    if (a.attributes[attribute] !== b.attributes[attribute]) {
                        continue nextCharacter;
                    }
                }
                duplicateCount++;
                duplicateCharacters.push(b.id);
            }
    }

    if(duplicateCount > 0) {
        console.log(duplicateCount + " duplicates found.");
    }

    return duplicateCharacters;
}

showQuestions();

window.addEventListener("beforeunload", function (e) {
    if (pickedCharacter) {
        return undefined;
    } else {
        e.returnValue = '';
    }
});
