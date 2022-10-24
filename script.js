// Skaičiuotuvo projektas

// Šio projekto metu turėsite sukurti savo skaičiuotuvą,
// kuris veikia taip, kaip visuose prietaisuose, pavyzdžiui,
// kompiuteryje, telefone ar fiziniame skaičiuotuve, kurį
// visiems teko ir tenka naudoti ir šiandien.

// Projekto tikslas - įtvirtinti savo JS įgūdžius ir juos
// pademonstruoti ne tik kolegoms, bet ir visam pasauliui (projektas
// turės atsidurti ir GitHub!), nes tai bus pirmasis realus JS
// darbas.

// Reikalavimai:
// - Sukurti naują projekto aplanką, inicijuoti git ir viso darbo
// metu tvarkingai ir prasmingai kurti commit'us;
// - Skaičiuotuvas turėtų būti kuriamas kaip ES6 klasė, kad visa
// logika būtų enkapsuliuota ir nepasiekiama išoriniams skriptams;
// - Idealus variantas būtų inicijuojant skaičiuotuvą (new keyword),
// kaip vienintelį parametrą, paduoti arba elementą, arba jo selektorių
// (klasę, id ar pan.), pagal ką jūsų inicijuota klasė sukurs visus
// reikiamus HTML elementus ir juos įterps į tą konkrečią vietą;
// - Skaičiuotuvas turi būti pilnai responsive ir stilizuotas. Dar geriau
// būtų jį padaryti fluid, jog išsidėstymą diktuotų konteineris, į kurį
// skaičiuotuvas bus įterpiamas;
// - Tai populiarus projektas, todėl aklai nekopijuokite kitų autorių kodų,
// priešingu atveju turėsit GitHub paminėti kieno kodą naudojot. Kitaip
// tariant - sukurkite autorinį darbą, kuris atspindės jūsų įgūdžius;

// Tiems, kuriems nepavyksta dirbti su klasėmis, galite rinktis
// alternatyvų būdą įgyvendinti šį projektą. Pavyzdžiui, tiesiog
// sukurti visą HTML pačiame dokumente ir atitinkamai selectinti visus elementus.

// Sėkmės!

/* skaiciuotuvo dizainas */

const calculatorDesign = () => {
  const frame = document.createElement("div");
  frame.classList.add("frame");
  frame.style.border = "1px solid black";
  document.body.append(frame);

  const screenDiv = document.createElement("div");
  screenDiv.classList.add("screenDiv");
  screenDiv.style.border = "1px solid black";
  document.querySelector(".frame").append(screenDiv);
  screenDiv.innerHTML = "test"; /// istrinti

  const keysDiv1 = document.createElement("div");
  keysDiv1.classList.add("keysDiv1");
  keysDiv1.style.border = "1px solid black";
  document.querySelector(".frame").append(keysDiv1);

  const firstRowFirst = document.createElement("button");
  firstRowFirst.classList.add("firstRowFirst");
  firstRowFirst.style.border = "1px solid black";
  document.querySelector(".keysDiv1").append(firstRowFirst);
  firstRowFirst.innerHTML = "MR"; /// istrinti

  const firstRowSecond = document.createElement("button");
  firstRowSecond.classList.add("firstRowSecond");
  firstRowSecond.style.border = "1px solid black";
  document.querySelector(".keysDiv1").append(firstRowSecond);
  firstRowSecond.innerHTML = "M+"; /// istrinti

  const firstRowThird = document.createElement("button");
  firstRowThird.classList.add("firstRowThird");
  firstRowThird.style.border = "1px solid black";
  document.querySelector(".keysDiv1").append(firstRowThird);
  firstRowThird.innerHTML = "M-"; /// istrinti

  const firstRowFourth = document.createElement("button");
  firstRowFourth.classList.add("firstRowFourth");
  firstRowFourth.style.border = "1px solid black";
  document.querySelector(".keysDiv1").append(firstRowFourth);
  firstRowFourth.innerHTML = "/"; /// istrinti

  const keysDiv2 = document.createElement("div");
  keysDiv2.classList.add("keysDiv2");
  keysDiv2.style.border = "1px solid black";
  document.querySelector(".frame").append(keysDiv2);

  const keysDiv3 = document.createElement("div");
  keysDiv3.classList.add("keysDiv3");
  keysDiv3.style.border = "1px solid black";
  document.querySelector(".frame").append(keysDiv3);

  const keysDiv4 = document.createElement("div");
  keysDiv4.classList.add("keysDiv4");
  keysDiv4.style.border = "1px solid black";
  document.querySelector(".frame").append(keysDiv4);

  const keysDiv5 = document.createElement("div");
  keysDiv5.classList.add("keysDiv5");
  keysDiv5.style.border = "1px solid black";
  document.querySelector(".frame").append(keysDiv5);

  const xxx = document.createElement("button");
  xxx.classList.add("xxx");
  xxx.style.border = "1px solid black";
  document.querySelector(".keysDiv1").append(xxx);
  xxx.innerHTML = "test"; /// istrinti
};

calculatorDesign();
