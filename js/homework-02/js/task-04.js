"use strict";

const runTaskRef = document.querySelector(".run-task-04");
runTaskRef.addEventListener("click", () => {
  const formatString = function (string) {
    if (string.length > 40) {
      return string.slice(0, 40) + "...";
    }
    return string;
  };

  console.log(
    formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
  );
  console.log(formatString("Curabitur ligula sapien."));
  console.log(
    formatString(
      "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
    )
  );
});
