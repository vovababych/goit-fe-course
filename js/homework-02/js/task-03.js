"use strict";

const runTaskRef = document.querySelector(".run-task-03");
// console.log(runTaskRef);
runTaskRef.addEventListener("click", function () {
  const findLongestWord = function (string) {
    const words = string.split(" ");
    let longestWord = words[0];
    for (let i = 1; i < words.length; i += 1) {
      if (longestWord.length < words[i].length) {
        longestWord = words[i];
      }
    }
    return longestWord;
  };

  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
  console.log(findLongestWord("Google do a roll"));
  console.log(findLongestWord("May the force be with you"));
});
