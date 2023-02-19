function calculateGramFormulaMass(compound) {
  const elementMasses = {H: 1.00794,He: 4.00260,Li: 6.941,Be: 9.01218,B: 10.81,C: 12.011,N: 14.0067,O: 15.9994,F: 18.9984,Ne: 20.180,Na: 22.98977,Mg: 24.305,Al: 26.98154,Si: 28.0855,P: 30.97376,S: 32.065,Cl: 35.453,Ar: 39.948,K: 39.0983,Ca: 40.08,Sc: 44.9559,Ti: 47.867,V: 50.9415,Cr: 51.996,Mn: 54.94,Fe: 55.845,Ni: 58.693,Co: 58.93,Cu: 63.546,Zn: 65.409,Ga: 69.723,Ge: 72.64,As: 74.9216,Se: 78.96,Br: 79.904,Kr: 83.798,Rb: 85.4678,Sr: 87.62,Y: 88.9059,Zr: 91.224,Nb: 92.9064,Mo: 95.94,Tc: 98.00,Ru: 101.07,Rh: 102.906,Pd: 106.42,Ag: 107.8682,Cd: 112.411,In: 114.818,Sn: 118.710,Sb: 121.760,Te: 127.60,I: 126.90447,Xe: 131.293,Cs: 132.9054,Ba: 137.327,La: 138.9055,Ce: 140.116,Pr: 140.9077,Nd: 144.24,Pm: 145.00,Sm: 150.36,Eu: 151.964,Gd: 157.25,Tb: 158.9253,Dy: 162.50,Ho: 164.9303,Er: 167.26,Tm: 168.9342,Yb: 173.054,Lu: 174.967,Hf: 178.49,Ta: 180.9479,W: 183.84,Re: 186.207,Os: 190.23,Ir: 192.217,Pt: 195.084,Au: 196.9666,Hg: 200.592,Tl: 204.3833,Pb: 207.2,Bi: 208.9804,Th: 232.0381,Pa: 231.0359,U: 238.0289,Np: 237.0482};

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