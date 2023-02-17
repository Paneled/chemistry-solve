function parseFormula(){
  var formula = document.getElementById("myFormula").value;

  var grams = document.getElementById("givenMass").value;

  var moles = grams/formula;

  var out = (Math.round(100*moles)/100)+" moles"
  //console.log(gram);
  document.getElementById("output").innerHTML = out;
}