let mainFrame = document.getElementById("main-frame");
mainFrame.classList = "border-2 p-2 flex";
let flagbox = document.createElement("div");



function getindiaFlag() {
  let indiaFlag = document.createElement("div");
  indiaFlag.classList = "border-2 w-31 m-2";

let orangeStrap = document.createElement("div");
orangeStrap.classList = "h-10 w-30 bg-orange-500";

let whiteStrap = document.createElement("div");
whiteStrap.classList = "h-10 w-30 justify-items-center";

let greenStrap = document.createElement("div");
greenStrap.classList = "h-10 w-30 bg-green-500";

let blueDics = document.createElement("div");
blueDics.classList = "bg-blue-700 w-10 h-10 rounded-full";
whiteStrap.appendChild(blueDics);

indiaFlag.appendChild(orangeStrap);
indiaFlag.appendChild(whiteStrap);
indiaFlag.appendChild(greenStrap);
return indiaFlag;
}
function getjapanFlag() {
let japanFlag = document.createElement("div");
japanFlag.classList = "border-2 w-31 h-31 justify-items-center content-center m-2";

let redDics = document.createElement("div");
redDics.classList = "bg-red-700 w-10 h-10 rounded-full";
japanFlag.appendChild(redDics);
return japanFlag;
}

function getbanglaFlag() {
let banglaFlag = document.createElement("div");
banglaFlag.classList ="border-2 w-31 h-31 justify-items-center content-center m-2 bg-green-800";

let red2Dics = document.createElement("div");
red2Dics.classList = "bg-red-700 w-10 h-10 rounded-full";
banglaFlag.appendChild(red2Dics);
return banglaFlag;
}
function getrusFlag() {
let rusFlag = document.createElement("div");
rusFlag.classList = "border-2 w-31 m-2";

let white2Strap = document.createElement("div");
white2Strap.classList = "h-10 w-30 justify-items-center";

let blueStrap = document.createElement("div");
blueStrap.classList = "h-10 w-30 bg-blue-600";

let redStrap = document.createElement("div");
redStrap.classList = "h-10 w-30 bg-red-500";

rusFlag.appendChild(white2Strap);
rusFlag.appendChild(blueStrap);
rusFlag.appendChild(redStrap);
return rusFlag;
}
function getromaniaFlag() {
let romaniaFlag = document.createElement("div");
romaniaFlag.classList = "flex border-2 w-31 m-2 ";

let blue2Strap = document.createElement("div");
blue2Strap.classList = "h-30 w-10 bg-blue-600";

let yellowStrap = document.createElement("div");
yellowStrap.classList = "h-30 w-10 bg-yellow-400";  

let red3Strap = document.createElement("div");
red3Strap.classList = "h-30 w-10 bg-red-500";
romaniaFlag.appendChild(blue2Strap);
romaniaFlag.appendChild(yellowStrap);
romaniaFlag.appendChild(red3Strap);
return romaniaFlag;
}
function getperuFlag() {
let peruFlag = document.createElement("div");
peruFlag.classList = "flex border-2 w-31 m-2 ";

let laalStrap = document.createElement("div");
laalStrap.classList = "h-30 w-10 bg-red-700";

let safedStrap = document.createElement("div");
safedStrap.classList = "h-30 w-10 bg-white";  

let laal2Strap = document.createElement("div");
laal2Strap.classList = "h-30 w-10 bg-red-700";
peruFlag.appendChild(laalStrap);
peruFlag.appendChild(safedStrap);
peruFlag.appendChild(laal2Strap);
return peruFlag;
}
function polandFlag() {
let polandFlag = document.createElement("div");
polandFlag.classList = " border-2 w-31 m-2 ";

let white3Strap = document.createElement("div");
white3Strap.classList = "h-15 w-30 bg-white";

let red2Strap = document.createElement("div");
red2Strap.classList = "h-15 w-30 bg-red-500";
polandFlag.appendChild(white3Strap);
polandFlag.appendChild(red2Strap);
return polandFlag;
}
function getnigeriaFlag() {
let nigeriaFlag = document.createElement("div");
nigeriaFlag.classList = "flex border-2 w-30 m-2 ";

let nigeriagreenStrap = document.createElement("div");
nigeriagreenStrap.classList = "h-30 w-7 bg-emerald-500";

let white4Strap = document.createElement("div");
white4Strap.classList = "h-30 w-16  bg-white";  

let nigeriagreen2Strap = document.createElement("div");
nigeriagreen2Strap.classList = "h-30 w-7 bg-emerald-500";
nigeriaFlag.appendChild(nigeriagreenStrap);
nigeriaFlag.appendChild(white4Strap);
nigeriaFlag.appendChild(nigeriagreen2Strap);
return nigeriaFlag;
}



let countryname="india";
let input = document.createElement("input");
input.classList = " h-14 border-2 p-2 m-2" ;
input.placeholder = "Enter country name";

let searchbutton = document.createElement("button");

searchbutton.innerText = "Search Country";
searchbutton.classList = " h-14 border-2 p-2 m-2 bg-blue-500 text-white";
searchbutton.addEventListener("click", () => {
  let country = input.value;
  input.value = "";
  countryname = country;
  datalist.innerHTML = "";
  //flagbox.appendChild("");
  flagbox.innerHTML = "";

if (countryname == "india") {
  flagbox.appendChild(getindiaFlag());
} 
else if (countryname == "japan") {
  flagbox.appendChild(getjapanFlag());
}
else if (countryname == "bangladesh") {
  flagbox.appendChild(getbanglaFlag());
}
else if (countryname == "russia") {
  flagbox.appendChild(getrusFlag());
}
else if (countryname == "romania") {
  flagbox.appendChild(getromaniaFlag());
}
else if (countryname == "poland") {
  flagbox.appendChild(polandFlag());
}
else if (countryname == "nigeria") {
  flagbox.appendChild(getnigeriaFlag());
}
else if (countryname == "peru") {
  flagbox.appendChild(getperuFlag());
}
else {
  let error = document.createElement("div");
  error.classList = "text-red-500";
  error.innerText = "Country not found.";
  flagbox.appendChild(error);
}
console.log(countryname);
});


mainFrame.appendChild(input); 
mainFrame.appendChild(searchbutton);
mainFrame.appendChild(flagbox);
