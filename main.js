/* Translates 1 Letter at a time*/


//DOM interactions
const input = document.getElementById("input");
const output = document.getElementById("output");
const submit = document.getElementById("submit");

// Arrays
morseCodeLetters = [
        ".-",
        "-...",
        "-.-.",
        "-..",
        ".",
        "..-.",
        "--.",
        "....",
        "..",
        ".---",
        "-.-",
        ".-..",
        "--",
        "-.",
        "---",
        ".--.",
        "--.-",
        ".-.",
        "...",
        "-",
        "..-",
        "...-",
        ".--",
        "-..-",
        "-.--",
        "--.."
]
englishLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// On click translate
submit.addEventListener('click', () => {
    for (let i = 0; i < input.value.length; i++ ){
        for (let j = 0; j < morseCodeLetters.length; j++){
            if(input.value === englishLetters[j]){
                output.value += morseCodeLetters[j]
                console.log(output.value)
            }
            
        }
    }
})












    /*
        submit.addEventListener('click', () => {
    
        output.value = input.value

    */
