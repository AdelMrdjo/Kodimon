<template>
  <div class="container">
    <ScreenNewGame @startNewGame="newGame()" />
    <div class="in-game-screen"></div>
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
  },
  methods: {
    ...mapMutations(["SET_PLAYER"]),
    setPlayer(data) {
      this.SET_PLAYER(data);
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
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
}
</style>
