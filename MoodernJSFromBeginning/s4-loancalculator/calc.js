const form = document.getElementById("loan-form");

loadListerners();

function loadListerners() {
  form.addEventListener("submit", calc);
}

function calc(e) {
  console.log("Calculating....");
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("montyly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalinterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalinterest.value = (monthly * calculatedPayments - principal).toFixed(2);
  } else {
    console.log("error");
    shwoErrorDiv("Please Check Your Numbers");
  }
  e.preventDefault();
}

function shwoErrorDiv(error) {
  // create div and text
  const errorDiv = document.createElement("div");
  errorDiv.className = "alert alert-danger";
  errorDiv.appendChild(document.createTextNode(error));

  const card = document.querySelector(".card");
  // insert a dev into a node before another child node
  if (document.querySelector(".alert") === null) {
    document
      .querySelector(".card")
      .insertBefore(errorDiv, document.querySelector(".heading"));
  }

  // remove error div after 3 seconds
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
}
