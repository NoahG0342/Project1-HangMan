let answers = ["coffe", "creamer", "mug", "espresso", "beans", "decaf", "barista"]

let randomNum = Math.floor(Math.random() * answers.length)
let chosenWord = answers[randomNum]
chosenWord = chosenWord.split('')
let underScoreArray = []

for (let i = 0; i < chosenWord.length; i++) {
    underScoreArray.push('_ ')
}

document.querySelector('.answer-container').innerHTML = underScoreArray.join('')



console.log(chosenWord)
console.log(underScoreArray)