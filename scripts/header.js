let themebtn = document.querySelector(".themechanger");
let infobtn = document.querySelector(".info");

let isDarkTheme = true;

//local storage
const setTheme = (theme) =>{
  localStorage.setItem('theme', theme);
};


const darktheme = () =>{
  themebtn.innerHTML = "<i class='bx bxs-moon'></i>"
  document.documentElement.style.setProperty('--background-color', '#000');
  document.documentElement.style.setProperty('--text', '#fff');
  document.documentElement.style.setProperty('--text2', '#606060');
  document.documentElement.style.setProperty('--foreground', '#2d2d2d');
  setTheme('dark');
  isDarkTheme = true;
}

const lighttheme = () =>{
  themebtn.innerHTML = "<i class='bx bx-sun'></i>"
  document.documentElement.style.setProperty('--background-color', '#fff');
  document.documentElement.style.setProperty('--text', '#000');
  document.documentElement.style.setProperty('--foreground', '#e2e2e2');
  setTheme('light');
  isDarkTheme = false;
}

//consiton of clicking theme button
themebtn.addEventListener("click", ()=>{
  if(isDarkTheme){
    lighttheme();
  }else{
    darktheme();
  }
})

//getting the selected theme from user
const savedTheme = localStorage.getItem('theme');


if(savedTheme){
  if(savedTheme === 'dark'){
    darktheme();
  }else{
    lighttheme();
  }
};




//info button condition
let isinfo = false;
let info = document.querySelector(".info-section");
let appSec = document.querySelector(".app");
let createbtn = document.querySelector(".input-section");



const infoPage = (evt) =>{
  localStorage.setItem('infoPage', evt);
}

const onHomePage = () =>{
  infobtn.innerHTML = "<i class='bx bx-info-circle'></i>";
  info.setAttribute('style', 'display: none');
  appSec.setAttribute('style', 'display: flex');
  createbtn.setAttribute('style', 'display: flex')
  isinfo = false;
  infoPage('off');
}

const onThePage = () =>{
  infobtn.innerHTML = "<i class='bx bx-x'></i>";
  info.setAttribute('style', 'display: flex');
  appSec.setAttribute('style', 'display: none');
  createbtn.setAttribute('style', 'display: none')
  isinfo = true;
  infoPage('on');
}


infobtn.addEventListener("click", () => {
  if(isinfo){
    onHomePage();
  }else{
    onThePage();
  }
});

const savedinfo = localStorage.getItem('infoPage');
if(savedinfo){
  if(savedinfo === 'on'){
    onThePage();
  }else{
    onHomePage();
  }
}