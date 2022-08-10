// https://calculator.swiftutors.com/de-broglie-wavelength-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const deBroglieWavelengthRadio = document.getElementById('deBroglieWavelengthRadio');
const photonsMassRadio = document.getElementById('photonsMassRadio');
const velocityRadio = document.getElementById('velocityRadio');

let deBroglieWavelength;
const h = 6.6262e-34 
let photonsMass = v1;
let velocity = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

deBroglieWavelengthRadio.addEventListener('click', function() {
  variable1.textContent = '(m) Photon\'s Mass (kg)';
  variable2.textContent = '(v) Velocity (m/s)';
  photonsMass = v1;
  velocity = v2;
  result.textContent = '';
});

photonsMassRadio.addEventListener('click', function() {
  variable1.textContent = '(λ) De Broglie Wavelength (Å)';
  variable2.textContent = '(v) Velocity (m/s)';
  deBroglieWavelength = v1;
  velocity = v2;
  result.textContent = '';
});

velocityRadio.addEventListener('click', function() {
  variable1.textContent = '(λ) De Broglie Wavelength (Å)';
  variable2.textContent = '(m) Photon\'s Mass (kg)';
  deBroglieWavelength = v1;
  photonsMass = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(deBroglieWavelengthRadio.checked)
    result.textContent = `De Broglie Wavelength = ${computeDeBroglieWavelength()} Å`;

  else if(photonsMassRadio.checked)
    result.textContent = `Photon's Mass = ${computePhotonsMass().toFixed(2)} kg`;

  else if(velocityRadio.checked)
    result.textContent = `Velocity = ${computeVelocity().toFixed(2)} m/s`;
})

// calculation

function computeDeBroglieWavelength() {
  return h / (Number(photonsMass.value) * Number(velocity.value));
}

function computePhotonsMass() {
  return h / (Number(deBroglieWavelength.value) * Number(velocity.value));
}

function computeVelocity() {
  return h / (Number(photonsMass.value) * Number(deBroglieWavelength.value));
}