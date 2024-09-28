function main() {

  function updateclock() {
    const d = new Date();
    document.getElementById("funky").innerHTML = d.getTime();
    document.getElementById("chicken").innerHTML = 10000*Math.round(d.getTime() % (1000 * 60 * 60 * 24)/10000) / 1000000;
    setTimeout(updateclock, 100)
  }

  updateclock()

}

main();