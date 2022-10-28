

const html = document.documentElement;
const body = document.body;
const menuLinks = document.querySelectorAll(".admin-menu a");
const collapseBtn = document.querySelector(".admin-menu .collapse-btn");
const toggleMobileMenu = document.querySelector(".toggle-mob-menu");
const switchInput = document.querySelector(".switch input");
const switchLabel = document.querySelector(".switch label");
const switchLabelText = switchLabel.querySelector("span:last-child");
const collapsedClass = "collapsed";
const lightModeClass = "light-mode";

/*TOGGLE HEADER STATE*/
// collapseBtn.addEventListener("click", function () {
//   body.classList.toggle(collapsedClass);
//   this.getAttribute("aria-expanded") == "true"
//     ? this.setAttribute("aria-expanded", "false")
//     : this.setAttribute("aria-expanded", "true");
//   this.getAttribute("aria-label") == "collapse menu"
//     ? this.setAttribute("aria-label", "expand menu")
//     : this.setAttribute("aria-label", "collapse menu");
// });

/*TOGGLE MOBILE MENU*/
// toggleMobileMenu.addEventListener("click", function () {
//   body.classList.toggle("mob-menu-opened");
//   this.getAttribute("aria-expanded") == "true"
//     ? this.setAttribute("aria-expanded", "false")
//     : this.setAttribute("aria-expanded", "true");
//   this.getAttribute("aria-label") == "open menu"
//     ? this.setAttribute("aria-label", "close menu")
//     : this.setAttribute("aria-label", "open menu");
// });

/*SHOW TOOLTIP ON MENU LINK HOVER*/
// for (const link of menuLinks) {
//   link.addEventListener("mouseenter", function () {
//     if (
//       body.classList.contains(collapsedClass) &&
//       window.matchMedia("(min-width: 768px)").matches
//     ) {
//       const tooltip = this.querySelector("span").textContent;
//       this.setAttribute("title", tooltip);
//     } else {
//       this.removeAttribute("title");
//     }
//   });
// }

/*TOGGLE LIGHT/DARK MODE*/
if (localStorage.getItem("dark-mode") === "false") {
  html.classList.add(lightModeClass);
  switchInput.checked = false;
  switchLabelText.textContent = "Light";
}

switchInput.addEventListener("input", function () {
  html.classList.toggle(lightModeClass);
  if (html.classList.contains(lightModeClass)) {
    switchLabelText.textContent = "Light";
    localStorage.setItem("dark-mode", "false");
  } else {
    switchLabelText.textContent = "Dark";
    localStorage.setItem("dark-mode", "true");
  }
});



const roomsActivate = document.querySelector("#roomsActivate");
const LecturersActivate = document.querySelector("#LecturersActivate");
const courseUnitsActivate = document.querySelector("#courseUnitsActivate");
const programsActivate = document.querySelector("#programsActivate");
const departmentsActivate = document.querySelector("#departmentsActivate");
const spacesActivate = document.querySelector("#spacesActivate");
const lecturesActivate = document.querySelector("#lecturesActivate");
const userRegisterActivate = document.querySelector("#userRegisterActivate");

const modalBg = document.querySelector(".modalBg");

//ROOMS MODAL========================
const closeRoomsModal = document.querySelector(".closeRoomsModal");
const roomsModal = document.querySelector("#roomsModal");
roomsActivate.addEventListener('click', ()=>{
  roomsModal.classList.add("modalActive");
});

closeRoomsModal.addEventListener('click', ()=>{
  roomsModal.classList.remove("modalActive");
});


//LECTURER MODAL========================
const closeLecturerModal = document.querySelector(".closeLecturerModal");
const lecturerModal = document.querySelector("#lecturerModal");
LecturersActivate.addEventListener('click', ()=>{
  lecturerModal.classList.add("modalActive");
});

closeLecturerModal.addEventListener('click', ()=>{
  lecturerModal.classList.remove("modalActive");
});


//COURSE UNITS MODAL========================
const closeCourseUnitsModal = document.querySelector(".closeCourseUnitsModal");
const courseUnitsModal = document.querySelector("#courseUnitsModal");
courseUnitsActivate.addEventListener('click', ()=>{
  courseUnitsModal.classList.add("modalActive");
});

closeCourseUnitsModal.addEventListener('click', ()=>{
  courseUnitsModal.classList.remove("modalActive");
});




//PROGRAMS MODAL========================
const closeProgramsModal = document.querySelector(".closeProgramsModal");
const programsModal = document.querySelector("#programsModal");
programsActivate.addEventListener('click', ()=>{
  programsModal.classList.add("modalActive");
});

closeProgramsModal.addEventListener('click', ()=>{
  programsModal.classList.remove("modalActive");
});



//DEPARTMENTS MODAL========================
const closeDepartmentsModal = document.querySelector(".closeDepartmentsModal");
const departmentsModal = document.querySelector("#departmentsModal");
departmentsActivate.addEventListener('click', ()=>{
  departmentsModal.classList.add("modalActive");
});

closeDepartmentsModal.addEventListener('click', ()=>{
  departmentsModal.classList.remove("modalActive");
});

//SPACES MODAL========================
const closeSpaceModal = document.querySelector(".closeSpaceModal");
const spacesModal = document.querySelector("#spacesModal");
spacesActivate.addEventListener('click', ()=>{
  spacesModal.classList.add("modalActive");
});

closeSpaceModal.addEventListener('click', ()=>{
  spacesModal.classList.remove("modalActive");
});


//uSER rEGISTER MODAL========================
const closeuserRegisterModal = document.querySelector(".closeuserRegisterModal");
const userRegisterModal = document.querySelector("#userRegisterModal");
userRegisterActivate.addEventListener('click', ()=>{
  userRegisterModal.classList.add("modalActive");
});

closeuserRegisterModal.addEventListener('click', ()=>{
  userRegisterModal.classList.remove("modalActive");
});

// close.addEventListener('click', ()=>{
  
//   lecturerModal.classList.remove("modalActive");
// });

// const boxes = document.querySelectorAll('#close');

// close.forEach(close => {

//   close.classList.remove('modalActive');

// });

//modalBg.addEventListener('click', ()=>{
 // if(modalBg.classList.contains('closeModalBg'){
  //modalBg.style.display='none';
    
 // });
//});


//SettingsBottomActive================

let SettingsBottomActive = document.querySelector('.SettingsBottomActive');
let settingsHeader = document.querySelector('.settingsHeader');
let settingsContent = document.querySelector('.settingsContent');
settingsHeader.addEventListener('click', ()=>{
  settingsContent.classList.toggle('SettingsBottomActive');
});



//DARK MODE SETTINGS======================================================================

//We're going to use "check" to get the ckeckbox element
const check=document.getElementById("check")

//If darkMode doesn’t exist in the LocalStorage, create it. False by default
if (localStorage.getItem('darkMode')===null){
    localStorage.setItem('darkMode', "false");
}

//Create a link tag to later link the CSS file we want
const link = document.createElement('link');
link.rel = 'stylesheet';

document.getElementsByTagName('HEAD')[0].appendChild(link);

//Or we can create the tag in the HTML and later reference in our code
//const link=document.getElementsByTagName("link");  

//checkStatus is only called one time in the program, when you reload the page
//It gives the page it's default look, depening on waht darkMode is set to it will load one css or another
checkStatus()

function checkStatus(){
    if (localStorage.getItem('darkMode')==="true"){
        check.checked = true;                           //the checkbox is checked (if you load the page by default it isn’t)
        link.href = 'assets/css/dark.css';                  //since it's true we load the dark theme CSS
    }else{
        check.checked = false;                          //the checkbox is unchecked
        link.href = '';
    }
}


function changeStatus(){                                //This function gets called every time the checkbox is clicked
    if (localStorage.getItem('darkMode')==="true"){     //if darkMode was active and this function is called it means the user now wants light
        localStorage.setItem('darkMode', "false");      //so we set it to false, to indicate we are in light mode
        link.href = '';
    } else{
        localStorage.setItem('darkMode', "true");       //same code but adapted for dark theme
        link.href = 'assets/css/dark.css';  
    }
}

// profile dropdow ===========================


//datatables=======================================

$(document).ready(function() {
  $('#exampleTable').DataTable();
} );






