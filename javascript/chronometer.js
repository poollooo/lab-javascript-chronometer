class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if (callback) {
      this.intervalId = setInterval(() => {
        callback();
        this.currentTime++;
      }, 1)
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime++;
      }, 100)
    }
  }

  getMinutes() {
    const numberOfMinutes = Math.floor(this.currentTime / (60))
    return numberOfMinutes
  }

  getSeconds() {
    const numberOfSeconds = this.currentTime % 60
    return numberOfSeconds
  }

  computeTwoDigitNumber(value) {
    let valueString = value.toString()

    if (valueString.length === 1) {
      valueString = "0" + valueString;
    }
    return valueString
  }

  stop() {
    clearInterval(this.intervalId)
    this.intervalId = false;
  }

  reset() {
    this.currentTime = 0;
    document.getElementsByClassName('number').textContent = "0";
  }

  //The split method should expect no arguments, and return a string where the time since the start is formatted as "mm:ss". Internally, the split method can make usage of previously declared methods such as getMinutes, getSeconds, and computeTwoDigitNumber.

  split() {
    const minutes = this.getMinutes()
    const seconds = this.getSeconds()
    const minutesTwoDigits = this.computeTwoDigitNumber(minutes)
    const secondsTwoDigits = this.computeTwoDigitNumber(seconds)
    return minutesTwoDigits + ":" + secondsTwoDigits
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}