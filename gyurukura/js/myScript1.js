const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 5000,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
}, 60);
function nagyitasfrodo(){
  document.getElementById("Frodo").style.height = "365px";
  document.getElementById("Frodo").style.marginTop = "156px";
}
function kicsinyitesfrodo(){
  document.getElementById("Frodo").style.height = "265px";
  document.getElementById("Frodo").style.marginTop = "256px";
}
function nagyitasgandalf(){
  document.getElementById("Gandalf").style.height = "374px";
  document.getElementById("Gandalf").style.marginTop = "0px";
}
function kicsinyitesgandalf(){
  document.getElementById("Gandalf").style.height = "327px";
  document.getElementById("Gandalf").style.marginTop = "47px";
}
function nagyitasAragorn(){
  document.getElementById("Aragorn").style.height = "571px";
  document.getElementById("Aragorn").style.marginTop = "-50px";
}
function kicsinyitesAragorn(){
  document.getElementById("Aragorn").style.height = "521px";
  document.getElementById("Aragorn").style.marginTop = "0px";
}
function nagyitasSamu(){
  document.getElementById("Samu").style.height = "365px";
  document.getElementById("Samu").style.marginTop = "156px";
}
function kicsinyitesSamu(){
  document.getElementById("Samu").style.height = "265px";
  document.getElementById("Samu").style.marginTop = "256px";
}
function nagyitasTrufa(){
  document.getElementById("Trufa").style.height = "370px";
  document.getElementById("Trufa").style.marginTop = "151px";
}
function kicsinyitesTrufa(){
  document.getElementById("Trufa").style.height = "270px";
  document.getElementById("Trufa").style.marginTop = "251px";
}
function nagyitasPippin(){
  document.getElementById("Pippin").style.height = "370px";
  document.getElementById("Pippin").style.marginTop = "151px";
}
function kicsinyitesPippin(){
  document.getElementById("Pippin").style.height = "270px";
  document.getElementById("Pippin").style.marginTop = "251px";
}
function nagyitasBoromir(){
  document.getElementById("Boromir").style.height = "521px";
  document.getElementById("Boromir").style.marginTop = "0px";
}
function kicsinyitesBoromir(){
  document.getElementById("Boromir").style.height = "487px";
  document.getElementById("Boromir").style.marginTop = "34px";
}
function nagyitasGimli(){
  document.getElementById("Gimli").style.height = "430px";
  document.getElementById("Gimli").style.marginTop = "90px";
}
function kicsinyitesGimli(){
  document.getElementById("Gimli").style.height = "330px";
  document.getElementById("Gimli").style.marginTop = "190px";
}
function nagyitasLegolas(){
  document.getElementById("Legolas").style.height = "521px";
  document.getElementById("Legolas").style.marginTop = "0px";
}
function kicsinyitesLegolas(){
  document.getElementById("Legolas").style.height = "487px";
  document.getElementById("Legolas").style.marginTop = "34px";
}
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
