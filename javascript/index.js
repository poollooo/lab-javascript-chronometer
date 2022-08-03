const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');
const resetAction = document.getElementsByClassName('reset');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printSeconds();
  printMinutes();
}



function printMinutes() {
  let minutesUnits = chronometer.getMinutes()
  minUniElement.textContent = Math.floor(minutesUnits % 10)
  if (chronometer.currentTime >= 600) {
    minDecElement.textContent = Math.floor((minutesUnits / 10) % 60)
  }
}

function printSeconds() {
  let secondsUnits = chronometer.getSeconds()

  secUniElement.textContent = Math.floor(secondsUnits % 10)

  if (chronometer.currentTime >= 10) {
    secDecElement.textContent = Math.floor((secondsUnits / 10) % 60)
  }
}

// ==> BONUS
function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (!chronometer.intervalId) {
    btnLeftElement.classList.remove('start')
    btnLeftElement.classList.add('stop')
    btnLeftElement.textContent = 'STOP'
    btnLeftElement.classList.remove('reset')
    btnRightElement.classList.add('split')
    btnRightElement.textContent = 'SPLIT'
    chronometer.start(printTime);
  }
  else {
    btnLeftElement.classList.remove('stop')
    btnLeftElement.classList.add('start')
    btnLeftElement.textContent = 'START'
    btnRightElement.classList.remove('split')
    btnRightElement.classList.add('reset')
    btnRightElement.textContent = 'RESET'
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('split')) {
    splitsElement.innerHTML += `<li>00:${chronometer.split()}</li>`
    console.log(chronometer.currentTime)
  }
  else {
    console.log('reset')
    chronometer.reset();
    minUniElement.textContent = '0'
    minDecElement.textContent = '0'
    secUniElement.textContent = '0'
    secDecElement.textContent = '0'
  }
});
