
const input = document.getElementById("input");
const output = document.getElementById("output");
const submit = document.getElementById("submit");

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


    submit.addEventListener('click', () => {
    
for (let i = 0; i < input.value.length; i++ ){
    for (let j = 0; j < morseCodeLetters.length; j++){
        if(input.value === englishLetters[j]){
            output.value += morseCodeLetters[j]
            console.log(output.value)
        }
        reset()
        
        
    }
}
    })


    /*
        submit.addEventListener('click', () => {
    
        output.value = input.value

    for (let j = 0; j < morseCodeLetters.length; j++){
        console.log(morseCodeLetters[j])
        console.log(englishLetters[j])
        if(input.value === englishLetters[j]){
            output.value = morseCodeLetters[j]
            console.log(output.value)
        }
    }
})


submit.addEventListener('click', (event) => {
    translate(output)
    outputDisplay = input
})



    const translate = translations.map((each) => {
        console.log(each)
    })

    const translate = translation.forEach(element => {
        
    });((each) => {
        console.log(translation)
    })
    })

    */
