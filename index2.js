const bill = document.querySelector("#bill-amount");
const cash = document.querySelector("#cash-given");
const button = document.querySelector("#button");

const message = document.querySelector("#message");

const output = document.querySelectorAll(".no-notes");

button.addEventListener("click", cashCalculator);

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

function findValue(returnedAmount) {
  for (let i = 0; i < notes.length; i++) {
    const noOfNotes = Math.trunc(returnedAmount / notes[i]);

    returnedAmount = returnedAmount % notes[i];

    output[i].innerText = noOfNotes;
  }
}

function cashCalculator() {
  hideMessage();

  if (Number(bill.value) > 0) {
    const returnedAmount = cash.value - bill.value;

    if (returnedAmount >= 0) {
      findValue(returnedAmount);
    } else {
      showMessage("You have to wash plate to get out of here");
    }
  } else {
    showMessage("amount should be greater than 0");
  }
}
