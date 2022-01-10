var student = {
  fullName: "",
  type: "student"
};

document.addEventListner('DOMContentLoaded',contentLoaded);

function contentLoaded(event) {
  document.getElementById('fullName').addEventListner("keyup",keyup);
}

function keyup(event){calculateNumericOutput();}

function calculateNumericOutput() {
  student.fullName = document.getElementById('fullName').value;

  var totalNameValue = 0;
  for (var i=0; i<student.fullName.length;i++){
    totalNameValue += student.fullName.charCodeAt(i);
  }

  var output = "Total Numeric value of person`s nme is "+totalNameValue;
  document.getElementById('output').innerText = output;

}
