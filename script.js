function calculateGramFormulaMass(compound) {
  const elementMasses = {H: 1.00794, He: 4.003, Li: 6.941, Be: 9.012, B: 10.81,C: 12.011,N: 14.01,O: 15.9994,F: 19.00,Ne: 20.18,Na: 22.99,Mg: 24.31,Al: 26.98,Si: 28.09,P: 30.97,S: 32.07,Cl: 35.45,Ar: 39.95,K: 39.10,Ca: 40.08,Sc: 44.96,Ti: 47.87,V: 50.94,Cr: 52.00,Mn: 54.94,Fe: 55.85,Ni: 58.69,Co: 58.93, Cu: 63.55, Zn: 65.38, Ga: 69.72, Ge: 72.63, As: 74.92, Se: 78.96, Br: 79.90, Kr: 83.80, Rb: 85.47, Sr: 87.62, Y: 88.91, Zr: 91.22};
  
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