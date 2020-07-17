"use strict";

const runTaskRef = document.querySelector(".run-task-05");
runTaskRef.addEventListener("click", () => {
  const checkForSpam = function (message) {
    return (
      message.toLowerCase().includes("sale") ||
      message.toLowerCase().includes("spam")
    );
  };
  console.log(checkForSpam("Latest technology news"));
  console.log(checkForSpam("JavaScript weekly newsletter"));
  console.log(checkForSpam("Get best sale offers now!"));
  console.log(checkForSpam("[SPAM] How to earn fast money?"));
});
