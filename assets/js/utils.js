const { gsap } = require("gsap/dist/gsap");
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const utils = {
  getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
  },
  capitalizeFirstLetter(string) {
    const capizalize = string.charAt(0).toUpperCase() + string.slice(1);
    return capizalize;
  },
  setFirstAttacker(player1Speed, player2HPSpeed) {
    return player1Speed >= player2HPSpeed ? 1 : 2;
  },
  setColorByHP(hp) {
    if (hp >= 50) return 'green'
    else if (hp >= 30 && hp < 50) return 'orange'
    else return 'red'
  },
  willYouMissTheShoot() {
    const random = this.getRandomNumber(1, 5); // get random number from 1-5, if you get 1 then miss the shoot, that's 20% chance to miss
    return random == 1 ? true : false
  }
}

export default utils