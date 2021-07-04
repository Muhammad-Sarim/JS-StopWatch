window.onload =  function myfunction(){

  var hours = 00;
  var minutes = 00;
  var seconds = 00;
  var tens = 00;

  var appendHours = document.getElementById("hours")
  var appendMinutes = document.getElementById("minutes")
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")

  var btnstart = document.getElementById("btn-start")
  var btnstop = document.getElementById("btn-stop")
  var btnreset = document.getElementById("btn-reset")

  var Interval ;

  btnstart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }

  btnstop.onclick  = function () {
    clearInterval(Interval);
  }

  btnreset.onclick = function () {
    clearInterval(Interval);
    hours = "00";
    minutes = "00";
    tens = "00";
    seconds = "00";
    appendHours.innerHTML = hours;
    appendMinutes.innerHTML = minutes;
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  }

  function startTimer () {
    tens++;

    if(tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9){
      appendTens.innerHTML = tens;
    }

    if (tens > 99){
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9){
      appendSeconds.innerHTML = seconds
    }
    
    if ( seconds > 59) {
      console.log("minutes")
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }

    if ( minutes > 59) {
      console.log("hours")
      hours++;
      minutes = 0;
      appendMinutes.innerHTML = "0" + 0;
    }

  }

}