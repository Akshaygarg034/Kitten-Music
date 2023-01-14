var mysong = document.getElementById("mysong");
var icon = document.getElementById("icon");
var kitten = document.getElementById("kitten");
icon.onclick=function(){
  if(mysong.paused){
    mysong.play();
    icon.src="./public/pause.png";
    kitten.src="./public/cat enjoying music.gif";
  }
  else{
    mysong.pause();
    icon.src="./public/play.png";
    kitten.src="./public/cat.png";
  }
}
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display="none";
})
