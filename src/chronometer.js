class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 1000);

    // this.intervalId = setInterval(() => {
    //   this.currentTime++;
    //   if (typeof printTimeCallback === "function") {
    //     printTimeCallback();
    //   }
    // }, 1000);
    // console.log(this.intervalId);
  }

  // let myInterval = this.intervalId(
  //   setInterval(() => {
  //     this.currentTime + 1;
  //   }, 1000)
  // );
  // this.intervalId

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    if (value.length === 1) {
      const updateDigits = value.push(0);
      return JSON.stringify(updateDigits);
    }
    // if (this.getMinutes.length || this.getSeconds.length === 1) {
    // }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
