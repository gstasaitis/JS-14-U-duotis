const questions = [{
    text: "Kam naudingos morkos?",
    choices: ["Niekam", "Akims", "Kepenims", "Odai"],
    answer: "Odai"
},
{
    text: "Kam naudingi obuoliai?",
    choices: ["Širdžiai", "Kojoms", "Delfinams", "Virškinimui"],
    answer: "Virškinimui"
},
{
    text: "Kokias ligas padeda gydyti agrastai?",
    choices: ["Cukrini diabetą", "Kepenų cirozę", "Nemiga", "Vėžį"],
    answer: "Cukrini diabetą"
},
{
    text: "Kokio vitamino gausu apelsinuose?",
    choices: ["Vitamino E", "Vitamino A", "Vitamino C", "Vitamino B"],
    answer: "Vitamino C"
},
{
    text: "Kokiais dalykais yra turtingi arbūzai?",
    choices: ["Vitaminais", "Mineralais", "Antioksidantais", "Visi teisingi"],
    answer: "Visi teisingi"
}
]
const questionTop = document.querySelector('h5')
const btn1 = document.querySelectorAll('button')[0]
const btn2 = document.querySelectorAll('button')[1]
const btn3 = document.querySelectorAll('button')[2]
const btn4 = document.querySelectorAll('button')[3]
const questionNumber = document.querySelector('span')

console.log(questionTop, btn1, btn2, btn3, btn4, questionNumber)

class Quiz {
    constructor(questions) {
        this.questions = questions
        this.number = 0
    }

    currentQuestion() {
        const questionLine = this.questions[this.number]
        questionTop.innerText = questionLine.text
        btn1.innerText = questionLine.choices[0]
        btn2.innerText = questionLine.choices[1]
        btn3.innerText = questionLine.choices[2]
        btn4.innerText = questionLine.choices[3]
        questionNumber.innerText = this.number + 1
    }

    clicker() {
        this.number++
        this.currentQuestion()
    }
}

const quiz = new Quiz(questions)
quiz.currentQuestion()

btn1.addEventListener('click', function() {
    quiz.clicker(0)
})

btn2.addEventListener('click', function() {
    quiz.clicker(1)
})

btn3.addEventListener('click', function() {
    quiz.clicker(2)
})

btn4.addEventListener('click', function() {
    quiz.clicker(3)
})
