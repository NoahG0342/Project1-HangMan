
//making an array for the words that i want to use in my game
let answers = ["coffe", "creamer", "mug", "espresso", "beans", "decaf", "barista"]

//building a way to get a new word in my array
let randomNum = Math.floor(Math.random() * answers.length)
let chosenWord = answers[randomNum]

//putting the word that is chosin into an array of the letters in the array
chosenWord = chosenWord.split('')
let underScoreArray = []

//how i get each letter into the empty array
for (let i = 0; i < chosenWord.length; i++) {
    underScoreArray.push('_ ')
}
// how i put the words in the box 
document.querySelector('.answer-container').innerHTML = underScoreArray.join('')

const buttons = document.querySelectorAll('.button')

// making it where all my buttons that i click gome out lowwer case and not uppercase 
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        console.log(buttons[i].value.toLowerCase())
    })
}

