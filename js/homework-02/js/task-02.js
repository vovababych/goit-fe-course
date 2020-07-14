"use strict";

const runTaskRef = document.querySelector(".run-task-02");
runTaskRef.addEventListener("click", function () {
  const calculateEngravingPrice = function (message, pricePerWord) {
    const inputMessage = message.split(" ");
    //   amountWords = inputMessage.length;
    const price = pricePerWord * inputMessage.length;
    return price;
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
