const btnGenPrvi = document.getElementById('genPrvi');
const btnGenDrugi = document.getElementById('genDrugi');
const btnGenTreci = document.getElementById('genTreci');
const inpPrviBroj = document.getElementById('brojPrvi');
const inpDrugiBroj = document.getElementById('brojDrugi');
const inpTreciBroj = document.getElementById('brojTreci');
const btnProvjPrvi = document.getElementById('provjeriPrvi');
const btnProvjDrugi = document.getElementById('provjeriDrugi');
const btnProvjTreci = document.getElementById('provjeriTreci');
const inpDesPrvi = document.getElementById('desPrvi');
const inpDesDrugi = document.getElementById('desDrugi');
const inpJedPrvi = document.getElementById('jedPrvi');
const inpJedTreci = document.getElementById('jedTreci');

btnProvjPrvi.addEventListener('click', function (e) {
  e.preventDefault();
  const des = inpPrviBroj.value / 10;
  const jed = inpPrviBroj.value % 10;

  if (inpDesPrvi.value == Math.floor(des) && inpJedPrvi.value == jed) {
    tacno();
  } else {
    netacno();
    inpDesPrvi.value = '';
    inpJedPrvi.value = '';
  }
});

btnProvjDrugi.addEventListener('click', function (e) {
  e.preventDefault();
  const des = inpDrugiBroj.value / 10;
  if (inpDesDrugi.value == Math.floor(des)) {
    tacno();
  } else {
    netacno();
    inpDesDrugi.value = '';
  }
});

btnProvjTreci.addEventListener('click', function (e) {
  e.preventDefault();
  if (inpJedTreci.value === inpTreciBroj.value) {
    tacno();
  } else if (inpJedTreci.value === '') {
    Swal.fire({
      icon: 'info',
      text: 'Niste upisali vrijednost jedinice!',
    });
  } else {
    netacno();
    inpJedTreci.value = '';
  }
});

//Funkcije

function tacno() {
  Swal.fire({
    icon: 'success',
    text: 'Tačno',
  });
}

function netacno() {
  Swal.fire({
    icon: 'error',
    text: 'Nije Tačno Pokušaj ponovo !',
  });
}

function genRandom() {
  const rnd = Math.floor(Math.random() * 100 + 64);
  return rnd;
}

btnGenPrvi.addEventListener('click', function (e) {
  e.preventDefault();
  inpPrviBroj.value = genRandom();
  inpDesPrvi.value = '';
  inpJedPrvi.value = '';
  inpDesPrvi.focus();
});

btnGenDrugi.addEventListener('click', function (e) {
  e.preventDefault();
  inpDrugiBroj.value = genRandom() + 10;
  inpDesDrugi.value = '';
  inpDesDrugi.focus();
});

btnGenTreci.addEventListener('click', function (e) {
  e.preventDefault();
  inpTreciBroj.value = genRandom();
  inpJedTreci.value = '';
  inpJedTreci.focus();
});

//Brojevi desetice

const btnBrDes = document.getElementById('brDes');
const desBroj = document.getElementById('desBroj');
const jedan = document.getElementById('jedan');
const dva = document.getElementById('dva');
const tri = document.getElementById('tri');
const cetiri = document.getElementById('cetiri');
const pet = document.getElementById('pet');
const sest = document.getElementById('sest');
const sedam = document.getElementById('sedam');
const osam = document.getElementById('osam');
const devet = document.getElementById('devet');
const deset = document.getElementById('deset');
const btnProvBrDes = document.getElementById('provBrDes');

btnBrDes.addEventListener('click', function (e) {
  e.preventDefault();

  const rndDes = Math.floor(Math.random() * 10 + 1);
  desBroj.value = rndDes;
  jedan.value = '';
  dva.value = '';
  tri.value = '';
  cetiri.value = '';
  pet.value = '';
  sest.value = '';
  sedam.value = '';
  osam.value = '';
  devet.value = '';
  deset.value = '';
  jedan.focus();
});

btnProvBrDes.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    jedan.value == desBroj.value - 1 + '1' &&
    dva.value == desBroj.value - 1 + '2' &&
    tri.value == desBroj.value - 1 + '3' &&
    cetiri.value == desBroj.value - 1 + '4' &&
    pet.value == desBroj.value - 1 + '5' &&
    sest.value == desBroj.value - 1 + '6' &&
    sedam.value == desBroj.value - 1 + '7' &&
    osam.value == desBroj.value - 1 + '8' &&
    devet.value == desBroj.value - 1 + '9' &&
    deset.value == desBroj.value + '0'
  ) {
    tacno();
  } else if (
    desBroj.value == 1 &&
    jedan.value == '1' &&
    dva.value == '2' &&
    tri.value == '3' &&
    cetiri.value == '4' &&
    pet.value == '5' &&
    sest.value == '6' &&
    sedam.value == '7' &&
    osam.value == '8' &&
    devet.value == '9' &&
    deset.value == '10'
  ) {
    tacno();
  } else {
    netacno();
  }
});

//Parni brojevi

const btnGenParni = document.getElementById('btnGenParni');
const btnProvjParni = document.getElementById('btnProvjParni');
const inpParniBroj = document.getElementById('inpParniBroj');
const parniPrvi = document.getElementById('parniPrvi');
const parniDrugi = document.getElementById('parniDrugi');
const parniTreci = document.getElementById('parniTreci');
const parniCetvrti = document.getElementById('parniCetvrti');
const parniPeti = document.getElementById('parniPeti');

btnGenParni.addEventListener('click', function (e) {
  e.preventDefault();
  const rnd = Math.floor(Math.random() * 10 + 1);
  inpParniBroj.value = rnd;
  parniPrvi.value = '';
  parniDrugi.value = '';
  parniTreci.value = '';
  parniCetvrti.value = '';
  parniPeti.value = '';
  parniPrvi.focus();
});

btnProvjParni.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    parniPrvi.value == inpParniBroj.value - 1 + '2' &&
    parniDrugi.value == inpParniBroj.value - 1 + '4' &&
    parniTreci.value == inpParniBroj.value - 1 + '6' &&
    parniCetvrti.value == inpParniBroj.value - 1 + '8' &&
    parniPeti.value == inpParniBroj.value + '0'
  ) {
    tacno();
  } else if (
    parniPrvi.value == '2' &&
    parniDrugi.value == '4' &&
    parniTreci.value == '6' &&
    parniCetvrti.value == '8' &&
    parniPeti.value == '10'
  ) {
    tacno();
  } else {
    netacno();
  }
});

//Neparni brojevi

const btnGenNeparni = document.getElementById('btnGenNeparni');
const btnProvjNeparni = document.getElementById('btnProvjNeparni');
const inpNeparniBroj = document.getElementById('inpNeparniBroj');
const neparniPrvi = document.getElementById('neparniPrvi');
const neparniDrugi = document.getElementById('neparniDrugi');
const neparniTreci = document.getElementById('neparniTreci');
const neparniCetvrti = document.getElementById('neparniCetvrti');
const neparniPeti = document.getElementById('neparniPeti');

btnGenNeparni.addEventListener('click', function (e) {
  e.preventDefault();
  const rnd = Math.floor(Math.random() * 10 + 1);
  inpNeparniBroj.value = rnd;
  neparniPrvi.value = '';
  neparniDrugi.value = '';
  neparniTreci.value = '';
  neparniCetvrti.value = '';
  neparniPeti.value = '';
  neparniPrvi.focus();
});

btnProvjNeparni.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    neparniPrvi.value == inpNeparniBroj.value - 1 + '1' &&
    neparniDrugi.value == inpNeparniBroj.value - 1 + '3' &&
    neparniTreci.value == inpNeparniBroj.value - 1 + '5' &&
    neparniCetvrti.value == inpNeparniBroj.value - 1 + '7' &&
    neparniPeti.value == inpNeparniBroj.value - 1 + '9'
  ) {
    tacno();
  } else if (
    neparniPrvi.value == '1' &&
    neparniDrugi.value == '3' &&
    neparniTreci.value == '5' &&
    neparniCetvrti.value == '7' &&
    neparniPeti.value == '9'
  ) {
    tacno();
  } else {
    netacno();
  }
});

desPrvi.focus();
