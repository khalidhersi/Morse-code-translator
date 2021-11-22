import { it, expect } from "@jest/globals";
import { translate } from "./main";

/* Alphabet translation */

// Translates " " to /
it(`Translates " " to /` , () => {
    const result = translate(" ")
    expect(result).toBe("/")
})
//Translates a to .-
it("Translates a to .-" , () => {
    const result = translate("a")
    expect(result).toBe(".-")
})
    //Translates b to -...
it("Translates b to -..." , () => {
    const result = translate("b")
    expect(result).toBe("-...")
})
//Translates c to -.-.
it("Translates c to -.-." , () => {
    const result = translate("c")
    expect(result).toBe("-.-.")
})
//Translates d to -..
it("Translates d to -.." , () => {
    const result = translate("d")
    expect(result).toBe("-..")
})
//Translates e to .
it("Translates e to ." , () => {
    const result = translate("e")
    expect(result).toBe(".")
})
//Translates f to ..-.
it("Translates f to ..-." , () => {
    const result = translate("f")
    expect(result).toBe("..-.")
})
//Translates g to --.
it("Translates g to --." , () => {
    const result = translate("g")
    expect(result).toBe("--.")
})
//Translates h to ....
it("Translates h to ...." , () => {
    const result = translate("h")
    expect(result).toBe("....")
})
//Translates i to ..
it("Translates i to .." , () => {
    const result = translate("i")
    expect(result).toBe("..")
})
//Translates j to .---
it("Translates j to .---" , () => {
    const result = translate("j")
    expect(result).toBe(".---")
})
//Translates k to -.-
it("Translates k to -.-" , () => {
    const result = translate("k")
    expect(result).toBe("-.-")
})
//Translates l to .-..
it("Translates l to .-.." , () => {
    const result = translate("l")
    expect(result).toBe(".-..")
})
//Translates m to --
it("Translates m to --" , () => {
    const result = translate("m")
    expect(result).toBe("--")
})
//Translates n to -.
it("Translates n to -." , () => {
    const result = translate("n")
    expect(result).toBe("-.")
})
//Translates o to ---
it("Translates o to ---" , () => {
    const result = translate("o")
    expect(result).toBe("---")
})
//Translates p to .--.
it("Translates p to .--." , () => {
    const result = translate("p")
    expect(result).toBe(".--.")
})
//Translates q to --.-
it("Translates q to --.-" , () => {
    const result = translate("q")
    expect(result).toBe("--.-")
})
//Translates r to .-.
it("Translates r to .-." , () => {
    const result = translate("r")
    expect(result).toBe(".-.")
})
//Translates s to ...
it("Translates s to ..." , () => {
    const result = translate("s")
    expect(result).toBe("...")
})
//Translates t to -
it("Translates t to -" , () => {
    const result = translate("t")
    expect(result).toBe("-")
})
//Translates u to ..-
it("Translates u to ..-" , () => {
    const result = translate("u")
    expect(result).toBe("..-")
})
//Translates v to ...-
it("Translates v to ...-" , () => {
    const result = translate("v")
    expect(result).toBe("...-")
})
//Translates w to .--
it("Translates w to .--" , () => {
    const result = translate("w")
    expect(result).toBe(".--")
})
//Translates x to -..-
it("Translates x to -..-" , () => {
    const result = translate("x")
    expect(result).toBe("-..-")
})
//Translates y to -.--
it("Translates y to -.--" , () => {
    const result = translate("y")
    expect(result).toBe("-.--")
})
//Translates z to --..
it("Translates z to --.." , () => {
    const result = translate("z")
    expect(result).toBe("--..")
})


