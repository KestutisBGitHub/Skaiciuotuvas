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

/* sukurti mygtuka */

const createButton = (location, name) => {
  name.forEach(element => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.style.border = "1px solid black";
    button.style.width = "40px";
    button.style.height = "40px";
    document.querySelector(`.${location}`).append(button);
    button.textContent = `${element}`;
    button.value = `${element}`;
    //console.log(button.value);
  });
};

/* listener */

document.querySelector("body").addEventListener("click", event => {
  event.preventDefault();
  const verte = event.target.value;
  //console.log(verte);
  demenys(verte);
});

/* skaiciavimo funkcija */

const calculator = (pirmasDemuo, antrasDemuo, veiksmas) => {
  if (veiksmas === "+") {
    rezulttas = parseInt(pirmasDemuo) + parseInt(antrasDemuo);
  } else if (veiksmas === "-") {
    rezulttas = parseInt(pirmasDemuo) - parseInt(antrasDemuo);
  } else if (veiksmas === "/") {
    rezulttas = parseInt(pirmasDemuo) / parseInt(antrasDemuo);
  } else if (veiksmas === "x") {
    rezulttas = parseInt(pirmasDemuo) * parseInt(antrasDemuo);
  }
  document.querySelector(".screenDiv").append(`=${rezulttas}`);
  console.log(rezulttas);

  antrasDemuo = "";
  pirmasDemuo = rezulttas;
};

/* const pirmasDemuo = skaicius => {
  let pirmasDemuo = 0;
  pirmasDemuo = pirmasDemuo + skaicius;
  console.log(pirmasDemuo);
}; */
let pirmasDemuo = "";
let veiksmas = "";
let antrasDemuo = "";
let rezulttas = 0;

const demenys = btnVerte => {
  const skaicius = btnVerte;

  if (btnVerte === "C") {
    window.location.reload();
    return;
  }

  if (!btnVerte) {
    console.log("nepataikei i skaiciu");
  } else if (
    veiksmas === "" &&
    (btnVerte === "," || (btnVerte !== "=" && isNaN(btnVerte) === false))
  ) {
    pirmasDemuo += skaicius;
    console.log("darom pirma skaiciu");
    document.querySelector(".screenDiv").append(skaicius);
  } else if (btnVerte !== "," && btnVerte !== "=" && isNaN(btnVerte)) {
    veiksmas = "";
    veiksmas = skaicius;
    console.log(veiksmas);
    console.log("zenklas");
    document.querySelector(".screenDiv").append(skaicius);
  } else if (btnVerte !== "=") {
    antrasDemuo += skaicius;
    console.log("darom antra skaiciu");
    document.querySelector(".screenDiv").append(skaicius);
    /*     pirmasDemuo = pirmasDemuo + skaicius;
    console.log(pirmasDemuo); */
  } else if (btnVerte === "=") {
    calculator(pirmasDemuo, antrasDemuo, veiksmas);
  }
};

/* skaiciuotuvo dizainas */

const calculatorDesign = () => {
  const frame = document.createElement("div");
  frame.classList.add("frame");
  frame.style.border = "1px solid black";
  document.body.append(frame);
  frame.style.width = "162px";
  frame.style.padding = "5px";

  const screenDiv = document.createElement("div");
  screenDiv.classList.add("screenDiv");
  screenDiv.style.border = "1px solid black";
  document.querySelector(".frame").append(screenDiv);
  screenDiv.style.height = "40px";

  const keysDiv1 = document.createElement("div");
  keysDiv1.classList.add("keysDiv1");
  keysDiv1.style.border = "1px solid black";
  document.querySelector(".frame").append(keysDiv1);
  const buttonsRow1 = ["MR", "M+", "M-", "/"];
  createButton("keysDiv1", buttonsRow1);

  const keysDiv2 = document.createElement("div");
  keysDiv2.classList.add("keysDiv2");
  keysDiv2.style.border = "1px solid black";
  document.querySelector(".frame").append(keysDiv2);
  const buttonsRow2 = ["7", "8", "9", "x"];
  createButton("keysDiv2", buttonsRow2);

  const keysDiv3 = document.createElement("div");
  keysDiv3.classList.add("keysDiv3");
  keysDiv3.style.border = "1px solid black";
  document.querySelector(".frame").append(keysDiv3);
  const buttonsRow3 = ["4", "5", "6", "-"];
  createButton("keysDiv3", buttonsRow3);

  const keysDiv4 = document.createElement("div");
  keysDiv4.classList.add("keysDiv4");
  keysDiv4.style.border = "1px solid black";
  document.querySelector(".frame").append(keysDiv4);
  const buttonsRow4 = ["1", "2", "3", "+"];
  createButton("keysDiv4", buttonsRow4);

  const keysDiv5 = document.createElement("div");
  keysDiv5.classList.add("keysDiv5");
  keysDiv5.style.border = "1px solid black";
  document.querySelector(".frame").append(keysDiv5);
  const buttonsRow5 = ["C", "0", ",", "="];
  createButton("keysDiv5", buttonsRow5);
};

calculatorDesign();
