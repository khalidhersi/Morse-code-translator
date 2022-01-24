/* Translates 1 Letter at a time*/

//DOM interactions
const input = document.getElementById("input");
const output = document.getElementById("output");
const submit = document.getElementById("submit");
const input2 = document.getElementById("input2");
const output2 = document.getElementById("output2");
const submit2 = document.getElementById("submit2");

// Arrays
morseCodeLetters = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.." ]
englishLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// On click translate english to morse code
submit.addEventListener('click', () => {
    output.value = ""
    for (let i = 0; i < englishLetters.length; i++ ){
        for (let j = 0; j < morseCodeLetters.length; j++){
            if(input.value[i] === englishLetters[j]){
                output.value = output.value + morseCodeLetters[j] + "/"
                console.log(output.value)
            }

        }
    }
})

// submit2.addEventListener('click', () => {
//     output2.value = ""
//     for (let i = 0; i < englishLetters.length; i++ ){
//         for (let j = 0; j < englishLetters.length; j++){
//             if(input2.value[i] === morseCodeLetters[j]){
//                 output2.value = output2.value + englishLetters[j] + "/"
//                 console.log(output.value)
//             }

//         }
//     }
// })















    /*
        submit.addEventListener('click', () => {
    
        output.value = input.value

    */
