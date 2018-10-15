
var guesses = 5

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
// document.querySelector('.answer-container').innerHTML = underScoreArray.join('')

const buttons = document.querySelectorAll('.button')

document.querySelector('.answer-container').innerHTML = underScoreArray.join('')

// making it where all my buttons that i click gome out lowwer case and not uppercase 
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        console.log(buttons[i].value.toLowerCase())
        let letterSelection = buttons[i].value.toLowerCase()
        answer(letterSelection)


        document.querySelector('.answer-container').innerHTML = underScoreArray.join('')

        // if this value is in choesen word use method includes 
        //replace underscore for the value
        // if value is there apper in dom
        //if the value is not in array then lose a life 
        // if everything is completed then asume we win 
    })
}
// how i got it to showall the letters 
function answer(letter) {

    for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === letter) {
            underScoreArray[i] = letter
        }else{
            guesses -= 1
            if (guesses = 0 )
        }
    }


}




console.log(chosenWord)
console.log(underScoreArray)