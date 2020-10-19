/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called
 */
class Beat {
  constructor(linkAudio) {
    this.audio = new Audio(linkAudio);
  }
  play() {
    this.audio.play();
    this.audio.currentTime = 0;
  }
}

/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
  constructor(color, keyCode) {
    this.color = color;
    this.keyCode = keyCode;
    this.element = document.getElementById(this.keyCode);
    this.setButtonColorInHTML();
    this.setEndTransaction();
  }
  //   changeColor() {
  //     let id = document.getElementById(`${this.keyCode}`).id;
  //     if (this.keyCode == id) {
  //       document.getElementById(`${id}`).classList.add("box-background");
  //       setTimeout(() => {
  //         document.getElementById(`${id}`).classList.toggle("box-background");
  //       }, 500);
  //     }
  //   }

  /**
   * Set the button color based on color specified
   */
  setButtonColorInHTML = () => {
    this.element.style.borderColor = this.color;
  };

  /**
   * Select function to set the background color and boxShadow
   */
  select = () => {
    this.element.style.backgroundColor = this.color;
    this.element.style.boxShadow = `0px 0px 13px ${this.color}`;
  };

  /**
   * Deselect function to reset background color and boxShadow
   */

  setEndTransaction = () => {
    this.element.addEventListener("transitionend", this.deselect);
  };

  deselect = () => {
    this.element.style.backgroundColor = "transparent";
    this.element.style.boxShadow = "none";
  };
}
