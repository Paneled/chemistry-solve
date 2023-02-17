function calculateGramFormulaMass(compound) {
  const elementMasses = {H: 1.00794, He: 4.00260, Li: 6.941, Be: 9.01218, B: 10.81, C: 12.011, N: 14.0067,O: 15.9994, F: 18.9984, Ne: 20.180, Na: 22.9877, Mg: 24.305, Al: 26.98154, Si: 28.0855,P: 30.97376,S: 32.065,Cl: 35.453,Ar: 39.948,K: 39.0983,Ca: 40.08,Sc: 44.9559,Ti: 47.867,V: 50.9415,Cr: 51.996,Mn: 54.9380,Fe: 55.845,Ni: 58.693,Co: 58.9332, Cu: 63.546, Zn: 65.409, Ga: 69.723, Ge: 72.64, As: 74.9216, Se: 78.96, Br: 79.904, Kr: 83.798, Rb: 85.4678, Sr: 87.62, Y: 88.9059, Zr: 91.224};
  
  let mass = 0;
  let currentElement = '';
  let currentCount = '';
  
  for (let i = 0; i < compound.length; i++) {
    const char = compound[i];
    
    if (char >= 'A' && char <= 'Z') {
      if (currentElement !== '') {
        const elementMass = elementMasses[currentElement];
        const count = currentCount === '' ? 1 : parseInt(currentCount);
        mass += elementMass * count;
      }
      currentElement = char;
      currentCount = '';
    } else if (char >= 'a' && char <= 'z') {
      currentElement += char;
    } else if (char >= '0' && char <= '9') {
      currentCount += char;
    }
  }
  
  if (currentElement !== '') {
    const elementMass = elementMasses[currentElement];
    const count = currentCount === '' ? 1 : parseInt(currentCount);
    mass += elementMass * count;
  }
  
  return mass;
}


function parseFormula(){
  var formula = document.getElementById("myFormula").value;
  const mass = calculateGramFormulaMass(formula);
  var grams = document.getElementById("givenMass").value;
  var moles = grams/mass;
  var out = (Math.round(100*moles)/100)+" moles";
  
  document.getElementById("output").innerHTML = out;
}
