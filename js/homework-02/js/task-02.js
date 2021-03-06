"use strict";

const runTaskRef = document.querySelector(".run-task-02");
runTaskRef.addEventListener("click", function () {
  const calculateEngravingPrice = function (message, pricePerWord) {
    return message.split(" ").length * pricePerWord;
  };

  console.log(
    calculateEngravingPrice(
      "Proin sociis natoque et magnis parturient montes mus",
      10
    )
  );

  console.log(
    calculateEngravingPrice(
      "Proin sociis natoque et magnis parturient montes mus",
      20
    )
  );

  console.log(
    calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
  );

  console.log(
    calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
  );
});
