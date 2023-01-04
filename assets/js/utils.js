const { gsap } = require("gsap/dist/gsap");
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const utils = {
  getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
  },
  setFirstAttacker(player1Speed, player2HPSpeed) {
    return player1Speed >= player2HPSpeed ? 1 : 2;
  }
}

export default utils