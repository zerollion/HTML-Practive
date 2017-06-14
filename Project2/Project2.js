var btn1,btn2,co,ft,bodytext,tar,image,ba;
window.onload = function (){
  btn1 = document.getElementById("b1");
  btn2 = document.getElementById("b2");
  co = document.getElementById("co");
  bodytext = document.getElementById("bo");
  tar = document.getElementById("nav0");
  ft = document.getElementById("ft");
  image = document.getElementById("image");
  if (btn1 != null) btn1.addEventListener('click', mySubmit);
  if (btn2 != null) btn2.addEventListener('click', myClear);
  if (image != null) image.addEventListener('click', myback);
  document.addEventListener("scroll", currentnav);

  //set background image
  ba = localStorage.getItem("myback");
  if (ba == null || ba == undefined) ba = "./images/4.jpg";

  //local storge
  var x = localStorage.getItem("mycolor");
  var y = localStorage.getItem("myfont");
  document.getElementById("bo").style.color = x;
  document.getElementById("bo").style.font = y;

  //disply background image
  document.body.style.backgroundImage = "url(" + ba + ")";
}
// custmize page
function mySubmit(){
  var f = ft.value;
  var c = co.value;
  document.getElementById("bo").style.color = c;
  document.getElementById("bo").style.font = f;

  localStorage.setItem("mycolor", c);
  localStorage.setItem("myfont", f);
}
function myClear(){
  ft.value = "";
  co.value = "#000000";
  var f = ft.value;
  var c = co.value;
  document.getElementById("bo").style.color = c;
  document.getElementById("bo").style.font = f;

  localStorage.setItem("mycolor", c);
  localStorage.setItem("myfont", f);
}
// color change in nav bar
function currentnav(event){
  //console.log(document.body.scrollTop);
  //console.log(document.body.offsetHeight);
  if (tar == null) return;
  var t = document.body.scrollTop/document.body.offsetHeight;
  //console.log(t);
  if (t < 0.078){
    tar.style.background = "#dddddd";
    tar = document.getElementById("nav0");
    tar.style.background = "#fe280d";
  }else if(t >= 0.078 && t < 0.24){
    tar.style.background = "#dddddd";
    tar = document.getElementById("nav1");
    tar.style.background = "#fe280d";
  }else if(t >= 0.24 && t < 0.51){
    tar.style.background = "#dddddd";
    tar = document.getElementById("nav2");
    tar.style.background = "#fe280d";
  }else if(t >= 0.51 && t < 0.6){
    tar.style.background = "#dddddd";
    tar = document.getElementById("nav3");
    tar.style.background = "#fe280d";
  }else{
    tar.style.background = "#dddddd";
    tar = document.getElementById("nav4");
    tar.style.background = "#fe280d";
  }

  //console.log(tar);
}
function myback(e){
  if ( e.target.src != undefined){
    ba = e.target.src;
    localStorage.setItem("myback", ba);
    document.body.style.backgroundImage = "url(" + ba + ")";
  }
}
