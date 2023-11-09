'use strict';
//Selektovanje elemenata
const oper = document.querySelector('#operator');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const prvi = document.querySelector('#prvi');
const drugi = document.querySelector('#drugi');
const btnNovo = document.querySelector('#novo');
const lblRez = document.querySelector('#lblRez');
const lblRezZnak = document.querySelector('#lblRezZnak');
const btnIzracun = document.querySelector('#btnIzracunaj');
let rez = document.querySelector('#rez');
const btnNovoVeceManje = document.querySelector('#novo-vece-manje');
const prviVeceManje = document.querySelector('#prviVeceManje');
const drugiVeceManje = document.querySelector('#drugiVeceManje');
const veceManjeZnak = document.querySelector('#veceManjeZnak');
const lblVeceManjeZnak = document.querySelector('#lblVeceManjeZnak');
const lblVeceManje = document.querySelector('#lblVeceManje');
const btnPrikaziVeceManje = document.querySelector('#btnPrikaziVeceManje');
const btnNovoJednGornji = document.querySelector('#btnNovoJednGornji');
const btnNovoJednDonji = document.querySelector('#btnNovoJednDonji');
const postotak = document.querySelector('#postotak');
const btnIzrProc = document.querySelector('#btnIzrProc');
const operatorJednGor = document.querySelector('#operatorJednGor');
const rezJednGornji = document.querySelector('#rezJednGornji');
const drugiJednGor = document.querySelector('#drugiJednGor');
const operatorJednDonji = document.querySelector('#operatorJednDonji');
const prviJednDonji = document.querySelector('#prviJednDonji');
const rezJednDonji = document.querySelector('#rezJednDonji');
let tacno = [];
let netacno = [];
const procVm = document.getElementById('procVm');
const btnOcjena = document.querySelector('#btnOcjena');
let tableVeceManje = document.querySelector('#tableVeceManje');
let rIndex;
let table = document.querySelector('#table');
getIndex();
//!--------------------------Funkcije ----------------------------------
const generisiPolja = function () {
  //clearArray();
  const rnd = Math.floor(Math.random() * 45) + 35;
  const rnd1 = Math.floor(Math.random() * 10) + 21;
  prvi.value = rnd;
  drugi.value = rnd1;
  rez.value = '';
  rez.focus();
};
const generisiPoljaVeceManje = function () {
  //clearArray();
  const rnd = Math.floor(Math.random() * 20) + 1;
  const rnd1 = Math.floor(Math.random() * 20) + 1;
  prviVeceManje.value = rnd;
  drugiVeceManje.value = rnd1;
  veceManjeZnak.value = '';
  veceManjeZnak.focus();
};
const generisiPoljaJedn = function (drugi, result, btn) {
  //clearArray();
  const rndVeci = Math.floor(Math.random() * 19) + 7;
  const rndManji = Math.floor(Math.random() * 7) + 1;
  if (operatorJednGor.selectedIndex === 0) {
    drugi.value = rndManji;
    result.value = rndVeci;
  } else if (operatorJednGor.selectedIndex === 1) {
    drugi.value = rndVeci;
    result.value = rndManji;
    result.focus();
  }
  finalGornji.focus();
};
const generisiPoljaJednDonji = function (prvi, result, btn) {
  const rndVeciDo = Math.floor(Math.random() * 19) + 7;
  const rndManjiDo = Math.floor(Math.random() * 7) + 1;
  if (operatorJednDonji.selectedIndex === 0) {
    prvi.value = rndManjiDo;
    result.value = rndVeciDo;
  } else if (operatorJednDonji.selectedIndex === 1) {
    prvi.value = rndVeciDo;
    result.value = rndManjiDo;
  }
};
const postotakDonji = document.querySelector('#postotakDonji');
//Prikaz tačno računanje
function lblPrikazTacno() {
  lblRez.innerHTML = 'Tačno';
  lblRezZnak.innerHTML = '✅';
  tacno.push(lblRez.innerHTML);
}
function lblPrikazNetacno() {
  lblRez.innerHTML = 'Netačno';
  lblRezZnak.innerHTML = '❌';
  netacno.push(lblRez.innerHTML);
}
//Clear
const ocisti = function () {
  prvi.value = drugi.value = rez.value = '';
};
//Tabela za prikaz rezultata
//Tabela Računanja
function addHtmlTableRow() {
  const newRow = table.insertRow(table.length);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  cell1.innerHTML = getIndex();
  cell2.innerHTML = lblRez.innerHTML;
  if (lblRez.textContent === 'Tačno') {
    colorTacno(cell1, cell2);
  } else {
    colorNetacno(cell1, cell2);
  }
}
//Tabela Veće Manje
function addHtmlTableVeceManje() {
  const newRow = tableVeceManje.insertRow(tableVeceManje.length);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  cell1.innerHTML = getIndexVM();
  cell2.innerHTML = lblVeceManje.innerHTML;
  if (lblVeceManje.textContent === 'Tačno') {
    colorTacno(cell1, cell2);
  } else {
    colorNetacno(cell1, cell2);
  }
}
function colorTacno(val1, val2) {
  val1.style.color = 'green';
  val1.style.fontWeight = 'bold';
  val1.style.textAlign = 'center';
  val2.style.color = 'green';
  val2.style.fontWeight = 'bold';
  val2.style.textAlign = 'center';
}
function colorNetacno(val1, val2) {
  val1.style.color = 'red';
  val1.style.fontWeight = 'bold';
  val1.style.textAlign = 'center';
  val2.style.color = 'red';
  val2.style.fontWeight = 'bold';
  val2.style.textAlign = 'center';
}
function getIndex() {
  for (let i = 1; (i = table.rows.length - 3); i++) {
    return i;
  }
}
function getIndexVM() {
  for (let i = 1; (i = tableVeceManje.rows.length - 3); i++) {
    return i;
  }
}
getIndexVM();
const tableJedn = document.querySelector('#tableJedn');
function getIndexJedn() {
  for (let i = 1; (i = tableJedn.rows.length - 3); i++) {
    return i;
  }
}
getIndexJedn();
function addHtmlTableJednacine() {
  const newRow = tableJedn.insertRow(tableJedn.length);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  cell1.innerHTML = getIndexJedn();
  cell2.innerHTML = lblRezJednGornji.innerHTML;
  if (lblRezJednGornji.textContent === 'Tačno') {
    colorTacno(cell1, cell2);
  } else {
    colorNetacno(cell1, cell2);
  }
}
function addHtmlTableJednacineDonje() {
  const newRow = tableJedn.insertRow(tableJedn.length);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  cell1.innerHTML = getIndexJedn();
  cell2.innerHTML = lblRezJednDonji.innerHTML;
  if (lblRezJednDonji.textContent === 'Tačno') {
    colorTacno(cell1, cell2);
  } else {
    colorNetacno(cell1, cell2);
  }
}
function veceManjeTacno() {
  lblVeceManje.innerHTML = 'Tačno';
  lblVeceManjeZnak.innerHTML = '✅';
  tacno.push(lblVeceManje.innerHTML);
}
function veceManjeNetacno() {
  lblVeceManje.innerHTML = 'Netačno';
  lblVeceManjeZnak.innerHTML = '❌';
  netacno.push(lblVeceManje.innerHTML);
}
const finalGornji = document.querySelector('#finalGornji');
const finalDonji = document.querySelector('#finalDonji');
const btnIzracunajGornji = document.querySelector('#btnIzracunajGornji');
function izrJednGor() {
  if (operatorJednGor.selectedIndex === 0) {
    let plus = Number(rezJednGornji.value) - Number(drugiJednGor.value);
    let resultGornji = finalGornji.value;
    if (resultGornji == plus) {
      lblPrikazJednGorTacno();
      addHtmlTableJednacine();
    } else {
      lblPrikazJednGorNetacno();
      addHtmlTableJednacine();
    }
  } else if (operatorJednGor.selectedIndex === 1) {
    let minus = Number(rezJednGornji.value) + Number(drugiJednGor.value);
    let resultGornji = finalGornji.value;
    if (resultGornji == minus) {
      lblPrikazJednGorTacno();
      addHtmlTableJednacine();
    } else {
      lblPrikazJednGorNetacno();
      addHtmlTableJednacine();
    }
  }
}
const lblRezJednGornji = document.querySelector('#lblRezJednGornji');
const lblRezJednGornjiZnak = document.querySelector('#lblRezJednGornjiZnak');
const lblRezJednDonji = document.querySelector('#lblRezJednDonji');
const lblRezJednDonjiZnak = document.querySelector('#lblRezJednDonjiZnak');
function lblPrikazJednGorTacno() {
  lblRezJednGornji.innerHTML = 'Tačno';
  lblRezJednGornjiZnak.innerHTML = '✅';
  tacno.push(lblRezJednGornji.innerHTML);
}
function lblPrikazJednGorNetacno() {
  lblRezJednGornji.innerHTML = 'Netačno';
  lblRezJednGornjiZnak.innerHTML = '❌';
  netacno.push(lblRezJednGornji.innerHTML);
}
function lblPrikazJednDonjiTacno() {
  lblRezJednDonji.innerHTML = 'Tačno';
  lblRezJednDonjiZnak.innerHTML = '✅';
  tacno.push(lblRezJednDonji.innerHTML);
}
function lblPrikazJednDonjiNetacno() {
  lblRezJednDonji.innerHTML = 'Netačno';
  lblRezJednDonjiZnak.innerHTML = '❌';
  netacno.push(lblRezJednDonji.innerHTML);
}
btnIzracunajGornji.addEventListener('click', function () {
  //e.preventDefault()
  izrJednGor();
  generisiPoljaJedn(drugiJednGor, rezJednGornji, btnNovoJednGornji);
  rezJednGornji.innerHTML = rezJednGornji;
  drugiJednGor.innerHTML = drugiJednGor;
  finalGornji.value = '';
  finalGornji.focus();
});
operator.addEventListener('click', function (e) {
  generisiPolja();
  e.preventDefault();
});
function izrJednDonji() {
  if (operatorJednDonji.selectedIndex === 0) {
    let plusDonji = Number(rezJednDonji.value) - Number(prviJednDonji.value);
    let resultDonji = finalDonji.value;
    if (resultDonji == plusDonji) {
      lblPrikazJednDonjiTacno();
      addHtmlTableJednacineDonje();
    } else {
      lblPrikazJednDonjiNetacno();
      addHtmlTableJednacineDonje();
    }
  } else if (operatorJednGor.selectedIndex === 1) {
    let minus = Number(prviJednDonji.value) - Number(rezJednDonji.value);
    let resultDonji = finalDonji.value;
    if (resultDonji == minus) {
      lblPrikazJednDonjiTacno();
      addHtmlTableJednacineDonje();
    } else {
      lblPrikazJednDonjiNetacno();
      addHtmlTableJednacineDonje();
    }
  }
}
const btnIzracunajDonji = document.querySelector('#btnIzracunajDonji');
btnIzracunajDonji.addEventListener('click', function () {
  izrJednDonji();
  generisiPoljaJednDonji(prviJednDonji, rezJednDonji, btnNovoJednDonji);
  finalDonji.value = '';
  finalDonji.focus();
});
//#--------------------------Event listeners ----------------------------------
btnIzracun.addEventListener('click', function () {
  const rezx = document.getElementById('rez');
  if (rezx.value === '') {
    Swal.fire({
      icon: 'info',
      title: 'Nemate izračuna',
      text: 'Rezultat je prazan',
    });
  } else {
    if (oper.selectedIndex === 0) {
      let zbir = Number(prvi.value) + Number(drugi.value);
      let result = rez.value;
      if (result == zbir) {
        lblPrikazTacno();
        addHtmlTableRow();
      } else {
        lblPrikazNetacno();
        addHtmlTableRow();
      }
    } else if (oper.selectedIndex === 1) {
      let razlika = Number(prvi.value) - Number(drugi.value);
      let result = rez.value;
      if (result == razlika) {
        lblPrikazTacno();
        addHtmlTableRow();
      } else {
        lblPrikazNetacno();
        addHtmlTableRow();
      }
    }
  }
  generisiPolja();
});
btnNovo.addEventListener('click', generisiPolja);
btnNovoVeceManje.addEventListener('click', generisiPoljaVeceManje);
btnPrikaziVeceManje.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    Number(prviVeceManje.value) > Number(drugiVeceManje.value) &&
    veceManjeZnak.value === '>'
  ) {
    veceManjeTacno();
  } else if (
    Number(prviVeceManje.value) < Number(drugiVeceManje.value) &&
    veceManjeZnak.value === '<'
  ) {
    veceManjeTacno();
  } else if (
    Number(prviVeceManje.value) === Number(drugiVeceManje.value) &&
    veceManjeZnak.value === '='
  ) {
    veceManjeTacno();
  } else {
    veceManjeNetacno();
  }
  generisiPoljaVeceManje();
  addHtmlTableVeceManje();
});
btnIzrProc.addEventListener('click', function (rez) {
  if (tacno.length === 0 && netacno.length === 0) {
    Swal.fire({
      icon: 'error',
      title: 'Nemate izračuna',
      text: 'Nemate još ništa izračunato.Uradite par primjera da vidite procenat.',
    });
  } else {
    rez = Math.round((tacno.length * 100) / (tacno.length + netacno.length));
   
if(rez<15){
  postotak.innerHTML = 'Ocjena je: 1';
}
else if (rez>=15 && rez <=35) {
  postotak.innerHTML = 'Ocjena je: 2';
}
else if (rez>35 && rez <=50) {
  postotak.innerHTML = 'Ocjena je: 3';
}
else if (rez>50 && rez <=80) {
  postotak.innerHTML = 'Ocjena je: 4';
}
else if (rez>80 && rez <=99) {
  postotak.innerHTML = 'Ocjena je: 5';
}
else if (rez===100) {
  postotak.innerHTML = 'Perfektno bez greške';
}



  }
});
btnOcjena.addEventListener('click', function (rez) {
  if (tacno.length === 0 && netacno.length === 0) {
    Swal.fire({
      icon: 'error',
      title: 'Nemate izračuna',
      text: 'Nemate još ništa izračunato.Uradite par primjera da vidite procenat.',
    });
  } else {
    rez = Math.round((tacno.length * 100) / (tacno.length + netacno.length));

    if(rez<15){
      postotakDonji.innerHTML = 'Ocjena je: 1';
    }
    else if (rez>=15 && rez <=35) {
      postotakDonji.innerHTML = 'Ocjena je: 2';
    }
    else if (rez>35 && rez <=50) {
      postotakDonji.innerHTML = 'Ocjena je: 3';
    }
    else if (rez>50 && rez <=80) {
      postotakDonji.innerHTML = 'Ocjena je: 4';
    }
    else if (rez>80 && rez <=99) {
      postotakDonji.innerHTML = 'Ocjena je: 5';
    }
    else if (rez===100) {
      postotakDonji.innerHTML = 'Perfektno bez greške';
    }

    
  }
});
const postotakVeceManje = document.querySelector('#postotakVeceManje');
procVm.addEventListener('click', function (rez) {
  if (tacno.length === 0 && netacno.length === 0) {
    Swal.fire({
      icon: 'error',
      title: 'Nemate izračuna',
      text: 'Nemate još ništa izračunato.Uradite par primjera da vidite procenat.',
    });
  } else {
    rez = Math.round((tacno.length * 100) / (tacno.length + netacno.length));

    if(rez<15){
      postotakVeceManje.innerHTML = 'Ocjena je: 1';
    }
    else if (rez>=15 && rez <=35) {
      postotakVeceManje.innerHTML = 'Ocjena je: 2';
    }
    else if (rez>35 && rez <=50) {
      postotakVeceManje.innerHTML = 'Ocjena je: 3';
    }
    else if (rez>50 && rez <=80) {
      postotakVeceManje.innerHTML = 'Ocjena je: 4';
    }
    else if (rez>80 && rez <=99) {
      postotakVeceManje.innerHTML = 'Ocjena je: 5';
    }
    else if (rez===100) {
      postotakVeceManje.innerHTML = 'Perfektno bez greške';
    }
    


   

    
    
  }
});
function clearArray() {
  tacno = netacno = [];
}
btnNovoJednGornji.addEventListener('click', function () {
  generisiPoljaJedn(drugiJednGor, rezJednGornji, btnNovoJednGornji);
  rezJednGornji.innerHTML = rezJednGornji;
  drugiJednGor.innerHTML = drugiJednGor;
});
operatorJednGor.addEventListener('click', function () {
  generisiPoljaJedn(drugiJednGor, rezJednGornji, btnNovoJednGornji);
  rezJednGornji.innerHTML = rezJednGornji;
  drugiJednGor.innerHTML = drugiJednGor;
});
btnNovoJednDonji.addEventListener('click', function () {
  generisiPoljaJednDonji(prviJednDonji, rezJednDonji, btnNovoJednDonji);
  prviJednDonji.innerHTML = prviJednDonji;
  rezJednDonji.innerHTML = rezJednDonji;
  finalDonji.focus();
});
operatorJednDonji.addEventListener('mouseup', function () {
  generisiPoljaJednDonji(prviJednDonji, rezJednDonji, btnNovoJednDonji);
  prviJednDonji.innerHTML = prviJednDonji;
  rezJednDonji.innerHTML = rezJednDonji;
});

const sati=function (val) {
  let sat = val <= 12  ? val : val - 12;
  return sat;
}

console.log(sati(12));