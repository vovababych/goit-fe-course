"use strict";

const runTaskRef = document.querySelector(".run-task-04");
runTaskRef.addEventListener("click", () => {
  const formatString = function (string) {
    return (string = string.length > 40 ? `${string.slice(0, 40)}...` : string);
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
