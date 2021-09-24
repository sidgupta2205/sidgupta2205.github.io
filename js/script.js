
function myFunction() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
    x.className += " responsive";
} else {
    x.className = "topnav";
}
}

function welcome()
{
    fir=document.getElementById("home")
    fir.style.display="block"
    startTime()
}

function startTime() {
    const today = new Date();
    document.getElementById('time').innerHTML =  today.toString();
    setTimeout(startTime, 950);
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

function first()
{

    fir=document.getElementById("home")
    sec=document.getElementById("education")
    thi=document.getElementById("experience")
    four=document.getElementById("projects")
    five=document.getElementById("resume")
    fir.style.display="block"
    sec.style.display="none"
    thi.style.display="none"
    four.style.display="none"
    five.style.display="none"
}

function second()
{

    fir=document.getElementById("home")
    sec=document.getElementById("education")
    thi=document.getElementById("experience")
    four=document.getElementById("projects")
    five=document.getElementById("resume")
    fir.style.display="none"
    sec.style.display="block"
    thi.style.display="none"
    four.style.display="none"
    five.style.display="none"

}

function third()
{

    fir=document.getElementById("home")
    sec=document.getElementById("education")
    thi=document.getElementById("experience")
    four=document.getElementById("projects")
    five=document.getElementById("resume")
    fir.style.display="none"
    sec.style.display="none"
    thi.style.display="block"
    four.style.display="none"
    five.style.display="none"
}

function fourth()
{

    fir=document.getElementById("home")
    sec=document.getElementById("education")
    thi=document.getElementById("experience")
    four=document.getElementById("projects")
    five=document.getElementById("resume")
    fir.style.display="none"
    sec.style.display="none"
    thi.style.display="none"
    four.style.display="block"
    five.style.display="none"
}

function fifth()
{

    fir=document.getElementById("home")
    sec=document.getElementById("education")
    thi=document.getElementById("experience")
    four=document.getElementById("projects")
    five=document.getElementById("resume")
    fir.style.display="none"
    sec.style.display="none"
    thi.style.display="none"
    four.style.display="none"
    five.style.display="block"
}