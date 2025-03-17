function main() {

  const d = new Date();

  var millisecondssince01011970 = d.getTime();

  var millisecondstoday = d.getTime() % (1000 * 60 * 60 * 24);

  var secondstoday = millisecondstoday / 1000;
  var minutestoday = secondstoday / 60;
  var hourstoday = minutestoday / 60;

  var decimalhourstoday = hourstoday / 2.4;
  var decimalminutestoday = hourstoday / 0.24;
  var decimalsecondstoday = hourstoday /0.024;

    document.getElementById("funky1").innerHTML = "Seconds elapsed since Jan 1st 1970:";
  document.getElementById("chicken1").innerHTML = Math.round(millisecondssince01011970 / 1000000000) + "bn";

  document.getElementById("funky2").innerHTML = "Seconds elapsed today:";
  document.getElementById("chicken2").innerHTML = Math.floor(secondstoday) + " seconds";

  document.getElementById("funky3").innerHTML = "Coordinated Universal Time:";
  document.getElementById("chicken3").innerHTML = Math.floor(hourstoday) + "h " + Math.floor(minutestoday) % 60 + "m " + Math.floor(secondstoday) % 60 + "s";

  document.getElementById("funky4").innerHTML = "Metric Time:";
  document.getElementById("chicken4").innerHTML = Math.floor(secondstoday / 10000) + "Ms " + Math.floor(secondstoday % 10000 / 1000) + "ks " + Math.floor(secondstoday % 1000 / 100) + "hs " + Math.floor(secondstoday % 100 / 10) + "ds " + Math.floor(secondstoday % 10) + "s";

  document.getElementById("funky5").innerHTML = "Decimal Time:";
  document.getElementById("chicken5").innerHTML = Math.floor(decimalhourstoday) + "h " + Math.floor(decimalminutestoday) + "m " + Math.floor(decimalsecondstoday) + "m";

  setTimeout(main, 100)

}

main();