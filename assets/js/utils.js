const { gsap } = require("gsap/dist/gsap");
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const utils = {
  getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
  },
}

export default utils