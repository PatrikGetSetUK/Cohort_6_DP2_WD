function validateStudentDetails(event) {
  event.preventDefault();

  // Inputs
  const firstName = document.getElementById("firstName").value;
  const codingGrade = document.getElementById("codingGrade").value;

  // Regular expressions for validating inputs
  // Only letters
  const textRegex = /^[a-zA-Z]+$/;
  // Only digits 1 to 5
  const numberRegex = /^[1-5]$/;

  if (!textRegex.test(firstName)) {
    document.getElementById("firstName").focus();
    alert("Please enter First name correctly. Only letters are allowed.");
  } else if (!numberRegex.test(codingGrade)) {
    document.getElementById("codingGrade").focus();
    alert("Only digits from 1 to 5 are allowed.");
  } else {
    generateTableRow(firstName, codingGrade);
    resetValues();
  }
}

function generateTableRow(firstName, codingGrade) {
  let row = `
    <tr>
        <td>${firstName}</td>
        <td><span class="${getBadgeClases(
          codingGrade
        )}">${codingGrade}</span></td>
        <td>${getNote(codingGrade)}</td>
    </tr>
    `;

  document.getElementById("row").innerHTML += row;
}

function getBadgeClases(codingGrade) {
  let clasess = "badge m-2 badge-";

  clasess += codingGrade == 5 ? "danger" : "success";
  return clasess;
}

function getNote(codingGrade) {
  if (codingGrade == 5) return "Failed";
  if (codingGrade > 1 && codingGrade <= 4) return "Need improvements";
  return "Excelent";
}

function resetValues() {
  document.getElementById("firstName").value = "";
  document.getElementById("codingGrade").value = "";

  document.getElementById("firstName").focus();
}
