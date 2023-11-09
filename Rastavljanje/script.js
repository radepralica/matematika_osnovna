
//Gornje

const btnGen1Gor = document.getElementById('btnGen1Gor');
const inpGor1Des = document.getElementById('inpGor1Des');
const inpGor2Des = document.getElementById('inpGor2Des');
const inpGor3Des = document.getElementById('inpGor3Des');
const inpGor4Des = document.getElementById('inpGor4Des');
const inpGor5Des = document.getElementById('inpGor5Des');
const inpGor1Jed = document.getElementById('inpGor1Jed');
const inpGor2Jed = document.getElementById('inpGor2Jed');
const inpGor3Jed = document.getElementById('inpGor3Jed');
const inpGor4Jed = document.getElementById('inpGor4Jed');
const inpGor5Jed = document.getElementById('inpGor5Jed');
const inpGor1Rez = document.getElementById('inpGor1Rez');
const inpGor2Rez = document.getElementById('inpGor2Rez');
const inpGor3Rez = document.getElementById('inpGor3Rez');
const inpGor4Rez = document.getElementById('inpGor4Rez');
const inpGor5Rez = document.getElementById('inpGor5Rez');
const btnGor1Provj = document.getElementById('btnGor1Provj');
const btnGor2Provj = document.getElementById('btnGor2Provj');
const btnGor3Provj = document.getElementById('btnGor3Provj');
const btnGor4Provj = document.getElementById('btnGor4Provj');
const btnGor5Provj = document.getElementById('btnGor5Provj');

btnGen1Gor.addEventListener('click', function (e) {
  e.preventDefault();
  rndGore()
});

btnGor1Provj.addEventListener('click', function (e) {
  e.preventDefault();
  rezultatGore(inpGor1Rez,inpGor1Des,inpGor1Jed)
});
btnGor2Provj.addEventListener('click',function(e){
  e.preventDefault();
  rezultatGore(inpGor2Rez,inpGor2Des,inpGor2Jed)
});

btnGor3Provj.addEventListener('click',function(e){
  e.preventDefault();
  rezultatGore(inpGor3Rez,inpGor3Des,inpGor3Jed)
});
btnGor4Provj.addEventListener('click',function(e){
  e.preventDefault();
  rezultatGore(inpGor4Rez,inpGor4Des,inpGor4Jed)
});
btnGor5Provj.addEventListener('click',function(e){
  e.preventDefault();
  rezultatGore(inpGor5Rez,inpGor5Des,inpGor5Jed)
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

function rezultatGore (rez,des,jed) {
    if (rez.value == des.value + jed.value) {
       return tacno();
      }
      else{
        return netacno();
      }
};


function rndGore () {
    const rnd1 = Math.floor(Math.random() * 9 + 1);
    const rnd2 = Math.floor(Math.random() * 9 + 1);
    const rnd3 = Math.floor(Math.random() * 9 + 1);
    const rnd4 = Math.floor(Math.random() * 9 + 1);
    const rnd5 = Math.floor(Math.random() * 9 + 1);
    const rnd6 = Math.floor(Math.random() * 9 + 1);
    const rnd7 = Math.floor(Math.random() * 9 + 1);
    const rnd8 = Math.floor(Math.random() * 9 + 1);
    const rnd9 = Math.floor(Math.random() * 9 + 1);
    const rnd10 = Math.floor(Math.random() * 9 + 1);
  
  
    inpGor1Des.value = rnd1;
    inpGor1Jed.value = rnd2;
    inpGor2Des.value = rnd3;
    inpGor2Jed.value = rnd4;
    inpGor3Des.value = rnd5;
    inpGor3Jed.value = rnd6;
    inpGor4Des.value = rnd7;
    inpGor4Jed.value = rnd8;
    inpGor5Des.value = rnd9;
    inpGor5Jed.value = rnd10;
    inpGor1Rez.value=''
    inpGor2Rez.value=''
    inpGor3Rez.value=''
    inpGor4Rez.value=''
    inpGor5Rez.value=''
    inpGor1Rez.focus()
};

rndGore()


//Donje

const inpRez1Donje=document.getElementById('inpRez1Donje'); 
const inpRez2Donje=document.getElementById('inpRez2Donje'); 
const inpRez3Donje=document.getElementById('inpRez3Donje'); 
const inpRez4Donje=document.getElementById('inpRez4Donje'); 
const inpRez5Donje=document.getElementById('inpRez5Donje'); 

const inpDes1Donje=document.getElementById('inpDes1Donje'); 
const inpDes2Donje=document.getElementById('inpDes2Donje'); 
const inpDes3Donje=document.getElementById('inpDes3Donje'); 
const inpDes4Donje=document.getElementById('inpDes4Donje'); 
const inpDes5Donje=document.getElementById('inpDes5Donje'); 

const inpJed1Donje=document.getElementById('inpJed1Donje'); 
const inpJed2Donje=document.getElementById('inpJed2Donje'); 
const inpJed3Donje=document.getElementById('inpJed3Donje'); 
const inpJed4Donje=document.getElementById('inpJed4Donje'); 
const inpJed5Donje=document.getElementById('inpJed5Donje'); 

const btnGenDonje=document.getElementById('btnGenDonje'); 
const btn1DonjeProvj=document.getElementById('btn1DonjeProvj');
const btn2DonjeProvj=document.getElementById('btn2DonjeProvj');
const btn3DonjeProvj=document.getElementById('btn3DonjeProvj');
const btn4DonjeProvj=document.getElementById('btn4DonjeProvj');
const btn5DonjeProvj=document.getElementById('btn5DonjeProvj');


function rndDolje () {
    const rnd1 = Math.floor(Math.random() * 90 + 10);
    const rnd2 = Math.floor(Math.random() * 90 + 10);
    const rnd3 = Math.floor(Math.random() * 90 + 10);
    const rnd4 = Math.floor(Math.random() * 90 + 10);
    const rnd5 = Math.floor(Math.random() * 90 + 10);
    
  
  
    inpRez1Donje.value = rnd1;
    inpRez2Donje.value = rnd2;
    inpRez3Donje.value = rnd3;
    inpRez4Donje.value = rnd4;
    inpRez5Donje.value = rnd5;
    inpJed1Donje.value=''
    inpJed2Donje.value=''
    inpJed3Donje.value=''
    inpJed4Donje.value=''
    inpJed5Donje.value=''
    inpDes1Donje.value=''
    inpDes2Donje.value=''
    inpDes3Donje.value=''
    inpDes4Donje.value=''
    inpDes5Donje.value=''
    inpDes1Donje.focus()
};

btnGenDonje.addEventListener('click',rndDolje)

function rezultatDolje (rez,des,jed) {
    if (rez.value == des.value + jed.value) {
       return tacno();
      }
      else{
        return netacno();
      }
};

btn1DonjeProvj.addEventListener('click',function(e){
  e.preventDefault();
  rezultatDolje(inpRez1Donje,inpDes1Donje,inpJed1Donje)
});

btn2DonjeProvj.addEventListener('click',function(e){
  e.preventDefault();
  rezultatDolje(inpRez2Donje,inpDes2Donje,inpJed2Donje)
});

btn3DonjeProvj.addEventListener('click',function(e){
    e.preventDefault();
    rezultatDolje(inpRez3Donje,inpDes3Donje,inpJed3Donje)
  });

  btn4DonjeProvj.addEventListener('click',function(e){
    e.preventDefault();
    rezultatDolje(inpRez4Donje,inpDes4Donje,inpJed4Donje)
  });

  btn5DonjeProvj.addEventListener('click',function(e){
    e.preventDefault();
    rezultatDolje(inpRez5Donje,inpDes5Donje,inpJed5Donje)
  });
  


