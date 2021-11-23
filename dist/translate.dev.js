"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translate = void 0;

var translate = function translate(letter) {
  if (letter === " ") return "/";
  if (letter === "a") return ".-";
  if (letter === "b") return "-...";
  if (letter === "c") return "-.-.";
  if (letter === "d") return "-..";
  if (letter === "e") return ".";
  if (letter === "f") return "..-.";
  if (letter === "g") return "--.";
  if (letter === "h") return "....";
  if (letter === "i") return "..";
  if (letter === "j") return ".---";
  if (letter === "k") return "-.-";
  if (letter === "l") return ".-..";
  if (letter === "m") return "--";
  if (letter === "n") return "-.";
  if (letter === "o") return "---";
  if (letter === "p") return ".--.";
  if (letter === "q") return "--.-";
  if (letter === "r") return ".-.";
  if (letter === "s") return "...";
  if (letter === "t") return "-";
  if (letter === "u") return "..-";
  if (letter === "v") return "...-";
  if (letter === "w") return ".--";
  if (letter === "x") return "-..-";
  if (letter === "y") return "-.--";
  if (letter === "z") return "--..";
};

exports.translate = translate;