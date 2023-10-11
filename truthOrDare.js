
const add = document.getElementById("add"),
    subContainer = document.querySelector('.sub-container'),
    input = document.getElementById("input"),
    starGame = document.getElementById('start_game'),
    same = document.querySelectorAll('.same'),
    letPlayBtn = document.getElementById('let-play'),
    inputContainerHolder = document.querySelector('.input-conteiner-holder'),
    buttonSame2 = document.querySelectorAll('.same2'),
    questionText = document.querySelector(".question-text p"),
    selected = document.querySelector("#selected"),
    name2 = document.querySelector('#name2 span'),
    playerName = document.querySelector(".con-sub-four #name3"),
    punishmentText = document.querySelector(".sub-punishment-container .punishment-text"),
    acceptOrNOtDiv = document.querySelector(".acceptOr-not-container"),
    accepntOrNOt = document.querySelectorAll('.acceptOr-not-container button'),
    cancelPunishment = document.querySelector('.punishment-general-container button'),
    backContainer = document.querySelector(".back-container"),
    punisment = document.querySelector('.punishment-general-container'),
    done0 = document.getElementById('done0'),
    gameRules = document.getElementById('gameRules'),
    gameRulesContainer = document.querySelector('.gameRules-container'),
    done02 = document.getElementById("done02"),
    inputDareText = document.querySelector(".inputDare-text-holder"),
    inputTruthText = document.querySelector('.inputTruth-text-holder'),
    dareSubmit = document.getElementById('dareSubmit'),
    dareInput = document.getElementById('dareInp'),
    truthInput = document.getElementById("truthInp"),
    truthSubmit = document.getElementById("truthSubmit"),
    addDearContainer = document.querySelector(".addDearContainer"),
    addTruthContainer = document.querySelector(".addTruthContainer"),
    inputTruthCon = document.querySelector(".input-truth-con"),
    inputDareCon = document.querySelector(".input-dare-con"),
    truthBtn = document.querySelector("#truthBtn"),
    consubspan = document.querySelector("#inperr"),
    consubh2 = document.querySelector("#herro"),
    questionFourDiv = document.querySelector(".container-four-div");

let counter, counter6, joiner, joiner3, joiner2, joiner4, counter5, counter4, clearTime, clearTime2, random3, char, char2, counter3, inputContainerHolderInput, value, nameChecker, inputAttach, inputValue, array, obj, randomNumTruth, randomNumDare, playerNameArray, result, randomPlayerName;
counter = 0;
inputAttach = '';
inputValue = '';
array = [];
playerNameArray = [];
counter6 = 0;
nameChecker = 0;
counter5 = 0
counter3 = 0;
counter4 = 0;
joiner3 = '';
joiner2 = '';
joiner = '';
joiner4 = ''
obj = {
    truth_q: JSON.parse(localStorage.getItem('truthArray')) || [
        "When was the last time you went on a date? ",
        "If you could be alone on an island with only one person from this room who would it be? ",
        "What is the worst sin you have ever committed? ",
        "What is something you have stole? ",
        "Which player would you like to swap lives with for a week? ",
        "If you had to marry someone in this room who would it be? ",
        "Who's the smelliest person in the room? ",
        "What is your best physical attribute? ",
        "What is the least favorite thing about the person on your right? ",
        "What is the worst gift you've recived? ",
        "What is the dare you would never do? ",
        "Who is wearing the worst outfit in the room? ",
        "What is the meanest thing you have ever done? ",
        "Who do you think has the best hair in the room? ",
        "Who in this room would you rather not date? ",
        "If you had to kiss someone in this room, who would it be? ",
        "Do you Google new people you meet? ",
        "What is your worst fear? ",
        "What is the grossest thing you've ever eaten? ",
        "What is the most embarrassing thing in your web browser history?  ",
        "Have you ever had a one night stand? ",
        "On a scale of 1 to 10 how good looking would you rate yourself? ",
        "Who in this room would you like to be stuck on a boat? ",
        "Rate everyone in the room looks, on a scale of 1-10 ",
        "What is the last lie you told? ",
        "What is the weirdest thing you have ever done? ",
        "When was the last time you Googled your own name? ",
        "Who do you think is the most attractive person on Earth? ",
        "What was the most embarrassing moment of your life? ",
        "What is the worst rumor or gossip you said or repeated and at the end was something wrong? ",
        "What was the most disgusting joke ever played with someone? ",
        "Have you ever peed in a pool? ",
        "What is the most stupid thing you’ve done in front of a crowd? ",
        "Which of the players of this group considered to have the most sensual and daring clothes? ",
        "Say who (here) has a wrong partner or does not suit him. ",
        "Which of the people who are in this game, considered to have the best body? ",
        "If you could suddenly become invisible, what more naughty things you like to do? ",
        "What is your biggest fear in a relationship? ",
        "What is your weirdest habit? ",
        "How many kids would you like to have? ",
        "What is one embarrassing fact I should know about you? ",
        "Describe your worst date ever? ",
        "What is your dream job? ",
        "If you were trapped on an island for 3 days, what would you take with you? ",
        "Who is your favourite person in this group and why? ",
        "Do you prefer apple or android? ",
        "Do you believe in love at first sight? ",
        "What is your dream wedding? ",
        "Can you touch your tongue to your nose? ",
        "If you could take away one bad thing in the world, what would it be? ",
        "What country would like to live in if you had the chance? ",
        "If you could change one thing on your body, what would it be? ",
        "What do you daydream about the most? s",
        "Describe the weirdest dream you’ve ever had? ",
        "Can you lick your elbow? ",
        "What is your favourite season of the year? ",
        "Could you go a week without junk food? ",
        "How was your first kiss? ",
        "Describe your worst kiss ever? ",
        "Do you like to exercise? ",
        "What is the craziest thing that you have ever done while drunk? ",
        "Would you rather be a horse or a cow? Why? ",
        "Who is your crush at school? ",
        "Who is the most annoying person you know? ",
        "Have you ever pulled a prank on your teacher? ",
        "Have you ever lied to your parents about what you were doing after school? ",
        "Have you ever blamed something that you have done on one of your siblings? ",
        "How many boyfriends (or girlfriends) have you had? ",
        "Have you ever been kissed yet? If so, who was your best kiss? ",
        "What is the best vacation you’ve ever been on? ",
        "Have you ever told one of your best friend’s secrets, even if you said you wouldn’t? ",
        "Have you ever had a crush on someone that your best friend has dated? ",
        "What is the most annoying thing that one of your siblings has done? ",
        "If you were a billionaire, what would you spend your time doing? ",
        "What is the longest time that you think you could go without your cell phone? ",
        "What is the most expensive thing you own? ",
        "If you had the choice to live on your own right now, would you do it? ",
        "Would you ever get on a dating website? ",
        "Have you ever watched an adult film without your parents knowing? ",
        "If you could own your own business one day, what would it be? ",
        "What is your favourite kind of clothing? ",
        "What celebrity are you obsessed with? ",
        "What is the funniest youtube video you have ever seen? ",
        "Who is the worst teacher you have ever had, why? ",
        "What is the craziest thing that you have ever done without your parents knowing? ",
        "What he craziest thing that you have ever done without your parents knowing? ",
        "What is your favourite song that is out right now? ",
        "Could you go two months without talking to your friends? ",
        "Describe what you would like me to do to you. "
    ],
    dare_q: JSON.parse(localStorage.getItem('dareArray')) || [
        "Wear your socks on your hands for the rest of the game? ",
        "Try to juggle 2 or 3 items of the goup's choosing ",
        "Do the ice bucket challenge",
        "Get tickled by the player to your left for 30 seconds ",
        "Spill a glass of water your head ",
        "Do a handstand for 12 seconds ",
        "Do the hot sauce challenge ",
        "Lick the foot of the person sitting next to you ",
        "Let the group look through your phone for 2 minutes ",
        "Sing the alphabet with moving your mouth ",
        "Let the person on your right post a image of their choice on your Instagram account ",
        "Give a 3 minute stand-up comedy routine ",
        "Show the group your stomach ",
        "Do an improvised dance ",
        "Give a compliment to the person on your left ",
        "Post an embarrassing picture of yourself online ",
        "lick the floor ",
        "Freestyle rap for 30 seconds ",
        "Demonstrate how you would flirt with someone ",
        "Give a new nickname to everyone in the room ",
        "pick your favorite song and dance on a table top ",
        "Read the last text message you recived out loud ",
        "Arm wrestle the player opposite to you ",
        "Have a pillow fight with the person opposite to you ",
        "Imitate another player and have everyone guess who you are ",
        "Sniff the breath of everyone in the room and say who has the worst ",
        "Sing a song of your choice for 2 minutes ",
        "Put lipstick on another player without using your hands ",
        "Choose two people who have to kiss each other ",
        "Whisper an intimate secret to the person on your right "
    ],
    punishment: [
        'Jump for 30 seconds. Please don\'t waste our time', 'Drink two cups of water. Please don\'t waste our time', 'Do 10 press up. Please don\'t waste our time', 'squat for 30 seconds', 'Nod your head for 30 seconds. Please don\'t waste our time'
    ]
}



let map1 = obj.truth_q.map(truthConverU)

function truthConverU(item) {
    return item.toUpperCase().trim()
}
obj.truth_q = map1

let map2 = obj.dare_q.map(dareConverU)

function dareConverU(item) {
    return item.toUpperCase().trim()
}
obj.dare_q = map2





myFunction()

function pluseOne(n) {
    myFunction(counter += n)
    input.focus()
}

function myFunction() {
    same.forEach(function (e) {
        e.style.display = 'none'
    })
    same[counter].style.display = 'block'
}

input.addEventListener('change', function (event) {
    if (parseInt(event.target.value) < 1) { event.target.value = 1 }
    if (parseInt(event.target.value) > 20) { event.target.value = 20 }
})

input.addEventListener('input', function (event) {

    if (parseInt(event.target.value) < 1) { event.target.value = 1 }
    if (parseInt(event.target.value) > 20) { event.target.value = 20 }
})


add.addEventListener('click', function () {
    value = parseInt(input.value);
    let i;
    for (i = 0; i < value; i++) {
        if (parseInt(input.value) < 2) {
            inputContainerHolder.innerHTML = `<p>You must put a number that is greater than 1</p>`
            inputContainerHolder.querySelector('p').setAttribute('style', 'color:white;text-align:center;background-color:black;padding:10px')
            inputContainerHolder.setAttribute('style', 'display:flex;justify-content:center;align-items:center;')

        } else {

            inputAttach += `<input class='input-names transform5'  type="text"  placeholder=" Player ${(i + 1)} name" required >`
            inputContainerHolder.innerHTML = inputAttach
            let inputContainerHolderInput = inputContainerHolder.querySelectorAll(".transform5")
            inputContainerHolderInput.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add("transform6")
                    item.style.transitionDelay = `${0.3 * index}s`
                })

            })
            inputContainerHolder.setAttribute('style', 'display:block;')
        }

    }
    consubh2.style.display = 'none'
    inputAttach = ''
    input.value = ''
})


letPlayBtn.addEventListener('click', function () {
    inputName = document.querySelectorAll('.input-conteiner-holder input');
    inputName.forEach(function (items) {
        array.push(items)
        playerNameArray.push(items.value)
    })
    if (nameChecker === 0) {
        randomPlayerName = Math.floor(Math.random() * playerNameArray.length)
        playerName.innerHTML = playerNameArray[randomPlayerName]
        name2.innerHTML = playerNameArray[randomPlayerName]
    }

    result = array.every(checkerBoard)
    function checkerBoard(item) {
        return item.value.trim()
    }

    var nameChecker2 = playerNameArray.some((item, index) => playerNameArray.indexOf(item) !== index)

    var nameChecker3 = playerNameArray.filter((item, index) => playerNameArray.indexOf(item) !== index)



    if (nameChecker2 && result) {
        var last = []
        let repeated = nameChecker3.map(myRepeated);

        function myRepeated(item) {

            if (last.indexOf(item) == -1) {
                last.push(item)
                var okay = last
                return okay
            }
        }

        consubh2.setAttribute('style', 'font-size:14px;display:block; color:white;margin-top:8px;')
        consubspan.innerHTML = last.length > 0 ? `<p style='color:yellow'>The repeated  ${nameChecker3.length < 2 ? 'Name is: ' : 'Names are: '} <span style='color:red' >(${repeated[0]}) </span></p> ` : ''
        consubspan.setAttribute('style', 'color:white')
        consubh2.style.display = 'block'

        playerNameArray = []
    } else {
        consubh2.setAttribute('style', 'font-size:16px;display:none;')

        if (result && inputName.length >= 2) {
            counter++
            myFunction()
        } else if (!result && inputName && inputContainerHolder.querySelectorAll('input')) {
            alert("you must fill the input")
            playerNameArray = []

        }
    }

})


buttonSame2.forEach(function (item, i) {
    item.addEventListener("click", function (event) {

        counter++
        nameChecker++
        myFunction()
        if (event.target.matches('.box-truth')) {
            randomNumTruth = Math.floor(Math.random() * obj.truth_q.length)
            counter3 = 0
            joiner = ''
            questionText.innerHTML = ''
            function charAt2() {
                if (counter3 < obj.truth_q[randomNumTruth].length) {
                    char = obj.truth_q[randomNumTruth].charAt(counter3)
                    questionText.innerHTML += char
                    counter3++
                    setTimeout(charAt2, 100);
                    acceptOrNOtDiv.setAttribute('style', 'pointer-events:none;opacity:0.6;')

                } else {
                    acceptOrNOtDiv.setAttribute('style', 'pointer-events:auto;opacity:1;')
                }

            }

            charAt2()
            selected.innerHTML = 'TRUTH'
            imageSelector('t.jpeg', 'green', 'green')

        } else {
            randomNumDare = Math.floor(Math.random() * obj.dare_q.length)
            counter4 = 0;
            joiner2 = ''
            questionText.innerHTML = ''
            function charAt3() {
                if (counter4 < obj.dare_q[randomNumDare].length) {
                    char2 = obj.dare_q[randomNumDare].charAt(counter4)
                    questionText.innerHTML += char2
                    counter4++;
                    setTimeout(charAt3, 100)
                    acceptOrNOtDiv.setAttribute('style', 'pointer-events:none;opacity:0.6')

                } else {
                    acceptOrNOtDiv.setAttribute('style', 'pointer-events:auto;opacity:1;')

                }
            }
            charAt3()
            selected.innerHTML = 'DARE'
            imageSelector('Hero.jpeg', 'red', 'red')
        }

    })

})


accepntOrNOt.forEach(function (item) {
    item.addEventListener('click', function (event) {
        counter3 = 0
        joiner = ''
        counter4 = 0;
        joiner2 = ''
        questionText.innerHTML = ''
        if (event.target.matches('.completed')) {
            dontRepat1()
            counter--
            myFunction()

        } else {
            punisment.classList.toggle('parent1')
            punishmentText.classList.toggle('transform')
            random3 = Math.floor(Math.random() * obj.punishment.length)
            counter5 = 0
            punishmentText.innerHTML = ''
            function charAt4() {
                if (counter5 < obj.punishment[random3].length) {
                    console.log(random3)
                    joiner4 = obj.punishment[random3].charAt(counter5);
                    punishmentText.innerHTML += joiner4
                    counter5++
                    setTimeout(charAt4, 100)
                    cancelPunishment.setAttribute('style', 'pointer-events:none;opacity:0.6;')
                } else {
                    cancelPunishment.setAttribute('style', 'pointer-events:auto;opacity:1;')

                }
            }
            charAt4()

        }
    })

})


cancelPunishment.addEventListener('click', function () {
    punisment.classList.toggle('parent1')
    punishmentText.classList.toggle('transform')
    dontRepat1()
    counter--
    myFunction()


})

function dontRepat1() {
    randomPlayerName = Math.floor(Math.random() * playerNameArray.length)
    name2.innerHTML = playerNameArray[randomPlayerName]
    playerName.innerHTML = playerNameArray[randomPlayerName]
}

function imageSelector(img, col, shad, bg) {
    questionFourDiv.style.background = `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${img})`
    questionFourDiv.style.backgrounRepeat = 'no-repeat'
    questionFourDiv.style.backgroundSize = 'cover'
    questionFourDiv.style.backgroundPosition = 'center'
    questionText.style.boxShadow = `1px 2px 40px  ${col} inset`;
    backgroundColor = 'rgba(0, 0, 0, 0.719)'
    questionText.style.textShadow = `-1px 0 ${shad}, 0 1px ${shad}, 1px 0 ${shad}, 0 -1px ${shad}`
    playerName.style.textShadow = `-1px 0 ${shad}, 0 1px ${shad}, 1px 0 ${shad}, 0 -1px ${shad}`
}


function adder(a) {
    subContainer.classList.add('transformation2')
    backContainer.classList.add('transformation')
    document.querySelector(a).style.display = 'block'
    dareInput.focus()
    truthInput.focus()
}

done0.addEventListener('click', function () {
    subContainer.classList.remove('transformation2')
    backContainer.classList.remove('transformation')
    setTimeout(function () {
        document.querySelector('.addTruthContainer').style.display = 'none'
        document.querySelector('.addDearContainer').style.display = 'none'
    }, 200)

})

gameRules.addEventListener('click', function () {
    gameRulesContainer.classList.add('clipat-active')
})

done02.addEventListener('click', function () {
    gameRulesContainer.classList.remove('clipat-active')

})

localStorage.setItem('truthArray', JSON.stringify(obj.truth_q))
localStorage.setItem('dareArray', JSON.stringify(obj.dare_q))


const dareFunc = (item) => {
    const parentDiv = document.createElement('div')
    parentDiv.className = 'parentDiv'
    const li = document.createElement('li');
    const button = document.createElement("button")
    button.innerHTML = 'x'
    li.textContent = item.trim()
    parentDiv.append(li, button)
    inputDareText.appendChild(parentDiv)
}

const truthFunc = (item) => {
    const parentDiv = document.createElement('div')
    parentDiv.className = 'parentDiv'
    const li = document.createElement('li');
    const button = document.createElement("button")
    button.innerHTML = 'x'
    button.className = 'btn'
    li.textContent = item.trim()
    parentDiv.append(li, button)
    inputTruthText.appendChild(parentDiv)
}

obj.dare_q.forEach(dareFunc)
obj.truth_q.forEach(truthFunc)

dareSubmit.addEventListener('click', function () {
    let trims = dareInput.value.trim().toUpperCase()
    if (trims && obj.dare_q.indexOf(trims) === -1) {
        obj.dare_q.push(trims)
        let m = trims
        dareFunc(m)

        localStorage.setItem('dareArray', JSON.stringify(obj.dare_q))
        dareInput.value = ''

        let div = document.createElement('div')
        div.setAttribute('style', 'background-color:green;padding:10px;color:white;text-align:center;font-family:fancy Fb;font-size:18px;')
        div.innerHTML = 'Successful Added to the Dare List';
        addDearContainer.insertBefore(div, inputDareCon)
        dareSubmit.style.pointerEvents = 'none'
        dareSubmit.style.opacity = '0.7'
        done0.style.opacity = '0'
        dareSubmit.disabled = true
        inputDareText.pointerEvents = 'auto'
        inputDareText.disabled = false

        setTimeout(() => {
            div.remove()
            dareSubmit.disabled = false
            dareSubmit.style.pointerEvents = 'auto'
            dareSubmit.style.opacity = '1'
            done0.style.opacity = '1'
            inputDareText.pointerEvents = 'none'
            inputDareText.disabled = true

        }, 1500)

    } else {
        let div = document.createElement('div')
        div.setAttribute('style', 'background-color:red;padding:10px;color:white;text-align:center;font-family:fancy Fb;font-size:18px;text-transform:uppercase')
        div.innerHTML = 'This item already exit';
        dareSubmit.style.pointerEvents = 'none'
        dareSubmit.style.opacity = '0.7'
        addDearContainer.insertBefore(div, inputDareCon)
        dareSubmit.style.pointerEvents = 'none'
        dareSubmit.style.opacity = '0.7'
        done0.style.opacity = '0'
        dareSubmit.disabled = true
        inputDareText.pointerEvents = 'auto'
        inputDareText.disabled = false
        setTimeout(() => {
            div.remove()
            dareSubmit.style.pointerEvents = 'auto'
            dareSubmit.disabled = false
            dareSubmit.style.opacity = '1'
            done0.style.opacity = '1'
            inputDareText.pointerEvents = 'none'
            inputDareText.disabled = true

        }, 2000)
    }
    if (obj.dare_q.length !== 0) {
        if (inputDareText.querySelector('p')) {

            inputDareText.querySelector('p').remove()
            inputDareText.setAttribute('style', 'display:block;')
        }
    }
    dareInput.focus()
})


truthSubmit.addEventListener('click', function () {
    let trims = truthInput.value.trim().toUpperCase()
    if (trims && obj.truth_q.indexOf(trims) === -1) {
        obj.truth_q.push(trims)
        let m = trims
        truthFunc(m)

        localStorage.setItem('truthArray', JSON.stringify(obj.truth_q))
        truthInput.value = ''

        let div = document.createElement('div')
        div.setAttribute('style', 'background-color:green;padding:10px;color:white;text-align:center;font-family:fancy Fb;font-size:18px;')
        div.innerHTML = 'Successful Added to the Truth List';
        addTruthContainer.insertBefore(div, inputTruthCon)
        truthSubmit.style.pointerEvents = 'none'
        truthSubmit.style.opacity = '0.7'
        done0.style.opacity = '0'
        truthSubmit.disabled = true
        inputTruthText.pointerEvents = 'auto'
        inputTruthText.disabled = false

        setTimeout(() => {
            div.remove()
            truthSubmit.disabled = false
            truthSubmit.style.pointerEvents = 'auto'
            truthSubmit.style.opacity = '1'
            done0.style.opacity = '1'
            inputTruthText.pointerEvents = 'none'
            inputTruthText.disabled = true
        }, 1500)

    } else {
        console.log('what the fuck')
        let div = document.createElement('div')
        div.setAttribute('style', 'background-color:red;padding:10px;color:white;text-align:center;font-family:fancy Fb;font-size:18px;text-transform:uppercase')
        div.innerHTML = 'This item already exit';
        truthSubmit.style.pointerEvents = 'none'
        truthSubmit.style.opacity = '0.7'
        addTruthContainer.insertBefore(div, inputTruthCon)
        done0.style.opacity = '0'
        truthSubmit.disabled = true
        inputTruthText.pointerEvents = 'auto'
        inputTruthText.disabled = false
        setTimeout(() => {
            div.remove()
            truthSubmit.disabled = false
            truthSubmit.style.pointerEvents = 'auto'
            truthSubmit.style.opacity = '1'
            done0.style.opacity = '1'
            inputTruthText.pointerEvents = 'none'
            inputTruthText.disabled = true

        }, 2000)
    }
    if (obj.truth_q.length !== 0) {
        if (inputTruthText.querySelector('p')) {
            inputTruthText.querySelector('p').remove()
            inputTruthText.setAttribute('style', 'display:block;')
        }
    }
    truthInput.focus()

})


document.body.addEventListener('click', (ev) => {
    let match = inputTruthText.querySelectorAll('li');
    let match2 = inputDareText.querySelectorAll("li")
    var btn, btn2
    if (obj.truth_q.length < 1) {
        inputTruthText.innerHTML = `<p> Please Insert some Truth in this list </p>`
        if (inputTruthText.querySelector('p')) {
            inputTruthText.querySelector('p').setAttribute('style', 'color:white;font-size:18px; text-align:center;font-family:fancy fb;')
            inputTruthText.setAttribute('style', 'display:flex;justify-content:center;align-items:center;text-align:center')
        }
    }

    if (obj.dare_q.length < 1) {
        inputDareText.innerHTML = `<p> Please Insert some Truth in this list </p>`
        if (inputDareText.querySelector('p')) {
            inputDareText.querySelector('p').setAttribute('style', 'color:white;font-size:18px; text-align:center;font-family:fancy fb')
            inputDareText.setAttribute('style', 'display:flex;justify-content:center;align-items:center;text-align:center')
        }

    }


    match.forEach((item, index) => {
        btn = item.parentElement.querySelector('button')
        btn.addEventListener('click', () => {
            if (obj.truth_q[index] === item.textContent) {
                item.parentElement.remove()
                obj.truth_q.splice(index, 1)
                localStorage.setItem('truthArray', JSON.stringify(obj.truth_q))
            }
        })
    })


    match2.forEach((item, index) => {
        btn2 = item.parentElement.querySelector('button')
        btn2.addEventListener('click', () => {
            if (obj.dare_q[index] === item.textContent) {
                item.parentElement.remove()
                obj.dare_q.splice(index, 1)
                localStorage.setItem('dareArray', JSON.stringify(obj.dare_q))
            }
        })
    })

    arrayLength()
})


function arrayLength() {
    if (obj.truth_q.length < 1 || obj.dare_q.length < 1) {
        starGame.style.pointerEvents = 'none'
        starGame.style.opacity = '0.5'

    } else {
        starGame.style.pointerEvents = 'auto'
        starGame.style.opacity = '1'
    }

}
arrayLength()






