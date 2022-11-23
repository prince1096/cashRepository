const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#button");
const message = document.querySelector("#message");
const noOfNotes = document.querySelectorAll(".no-notes");

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

function hideMessage() {
  message.style.display = "none";
}

function calculateChange(returnedAmount) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(returnedAmount / availableNotes[i]);

    returnedAmount %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function validateBillAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const returnedAmount = cashGiven.value - billAmount.value;
      calculateChange(returnedAmount);
    } else {
      showMessage("You have to wash plates to getout of here");
    }
  } else {
    showMessage("The Bill amount should be greater than 0");
  }
}

checkButton.addEventListener("click", validateBillAmount);
