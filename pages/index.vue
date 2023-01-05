<template>
  <div class="container">
    <ScreenNewGame @startNewGame="newGame()" v-show="!isGameStarted" />
    <ScreenInGame @startNewGame="newGame()" v-if="isGameStarted" />
    <ScreenGameOver
      @startNewGame="newGame()"
      @newOpponent="newOpponent()"
      v-if="isGameStarted && winner"
      :winner="winner"
    />
  </div>
</template>
<script>
import utils from "~/assets/js/utils";
import { mapMutations } from "vuex";
export default {
  computed: {
    player1() {
      return this.$store.state.player1;
    },
    player2() {
      return this.$store.state.player2;
    },
    isGameStarted() {
      return this.$store.state.isGameStarted;
    },
    winner() {
      return this.$store.state.winner;
    },
  },
  methods: {
    ...mapMutations([
      "SET_PLAYER",
      "GAME_STARTED",
      "SET_ATTACKER",
      "SET_CONTINUE_GAME",
      "CLEAR_LOGS",
    ]),
    setPlayer(data) {
      this.SET_PLAYER(data);
    },
    setGameStarted(bool) {
      this.GAME_STARTED(bool);
    },
    setContinueGame() {
      this.SET_CONTINUE_GAME();
    },
    clearLogs() {
      this.CLEAR_LOGS();
    },
    setAttacker(attacker) {
      this.SET_ATTACKER(attacker);
    },
    async fetchPokemon(id) {
      let data = await this.$axios.$get(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
      );
      return data;
    },
    async newGame() {
      let opponent1 = utils.getRandomNumber(1, 50); // get first opponent ID
      let opponent2;
      do {
        opponent2 = utils.getRandomNumber(1, 50); // get second opponent ID
      } while (opponent1 == opponent2); // 'do-while' - avoid to get same opponent first==second
      this.setPlayer({
        // store player1 in VueX
        slot: "player1",
        data: await this.fetchPokemon(opponent1),
      });
      this.setPlayer({
        // store player2 in VueX
        slot: "player2",
        data: await this.fetchPokemon(opponent2),
      });
      this.setGameStarted(true);
      this.setAttacker(
        utils.setFirstAttacker(this.player1.speed, this.player2.speed) // set attacker depending on their speed
      );
      this.clearLogs();
    },
    async newOpponent() {
      let opponent1 = this.winner.id; // we'll keep the winner and set him as a player1
      let opponent2;
      do {
        opponent2 = utils.getRandomNumber(1, 50); // get second opponent ID
      } while (opponent1 == opponent2); // 'do-while' - avoid to get same opponent first==second
      this.setPlayer({
        // store player2 in VueX
        slot: "player2",
        data: await this.fetchPokemon(opponent2),
      });
      this.setContinueGame();
      this.setAttacker(
        utils.setFirstAttacker(this.player1.speed, this.player2.speed) // set attacker depending on their speed
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
}
</style>
