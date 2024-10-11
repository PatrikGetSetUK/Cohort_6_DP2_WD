function calculateMortgage() {
  // Inputs
  const principal = document.getElementById("principal").value;
  const interestRate = document.getElementById("interestRate").value / 100 / 12;
  const loanTermMonths = document.getElementById("loanTerm").value * 12;

  const mortgagePayment = (
    (principal * interestRate) /
    (1 - Math.pow(1 + interestRate, -loanTermMonths))
  ).toFixed(2);
  // convert this formula: (1 + r)n-1
  // into inverse formula: (1−(1+r)−n)

  // Output
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `Monthly mortgage payment: £${mortgagePayment}`;
}
