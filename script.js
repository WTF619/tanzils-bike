// Requirement (a): Welcome message on top page
document.getElementById("welcomeMessage").innerText =
  "Welcome to Tanzil Islam Bikes! 🚴‍♂️ Let's ride!";

// Requirement (c): Custom JS Function - Loan Estimator
function calculateLoan() {
  const price = parseFloat(document.getElementById("bikePrice").value);
  const months = parseInt(document.getElementById("months").value);
  
  if (!price || !months || price <= 0 || months <= 0) {
    document.getElementById("loanResult").innerText =
      "❌ Please enter valid values!";
    return;
  }

  const monthlyPayment = (price / months).toFixed(2);
  document.getElementById("loanResult").innerText =
    `💰 Your estimated monthly payment is: ¥${monthlyPayment}`;
}