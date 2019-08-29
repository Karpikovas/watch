(function () {
  var HOURHAND = document.getElementById("hand__hour-hand");
  var MINUTEHAND = document.getElementById("hand__minute-hand");
  var SECONDHAND = document.getElementById("hand__second-hand");


  function init() {
    runClock();
    var interval = setInterval(runClock, 1000);
  }

  function runClock(){
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrPosition = hr * 360 / 12 + ((min * 360 / 60) / 12) ;
    let minPosition = (min * 360 / 60) + (sec * 360 / 60) / 60;
    let secPosition = sec * 360 / 60;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
  }

  window.addEventListener('load', function () {
      init();
    });
  
})();

