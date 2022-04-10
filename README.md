# Morse-code-translator

### Author - Khalid Hersi  

## General info
This is an English to Morse translator built using test-writing-first principles in my fifth week of my _nology course.

Steps
=====
1. npm, jest & babel install 
2. html css & js boilerplates
3. test file + all conditions
4. js functions to translate english to morse code 
5. test to see if functions work 


### Technologies used
HTML, CSS, SCSS, JavaScript, Jest(for testing purposes only)


## How it works

The main component within my translation script is the `morseTranslator()` function, which uses a morseDictionary variable, within which all the translations for the alphabets lie, and an input phrase.

The function then splits this input phrase into an array, which is looped over using array iterators such as map and filter to obtain the required translations.

Once I have an array of these translated phrases, I use `.join(" ")` to have them returned as a string.

This returned phrase is then shown in the output box with letters being separated by an empty space and words separated by a forward slash "/".

Having written the tests first gave me a much better idea on how to go about writing my JavaScript program, as well as what methodical steps I needed to take to ensure the program had as few bugs possible.

