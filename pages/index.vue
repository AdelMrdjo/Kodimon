<template>
  <div class="container">
    <div class="new-game-screen">
      <div class="images">
        <img src="/kodimon.png" alt="kodi-image" class="kodi-image" />
        <img src="/Kodi-logo.svg" alt="logo" class="kodi-logo" />
      </div>
      <button @click="newGame()">New Game</button>
    </div>
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
        opponent2 = utils.getRandomNumber(1, 2); // get second opponent ID
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
.new-game-screen {
  display: grid;
  justify-content: center;
  align-content: center;
  height: 100%;
}
.images {
  position: relative;
  .kodi-image {
    width: 600px;
  }
  .kodi-logo {
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    rotate: -30deg;
    z-index: -1;
  }
}
button {
  cursor: pointer;
  height: 48px;
  width: 230px;
  border-radius: 50px;
  background: $blue;
  border: 4px solid $blue-light;
  color: $white;
  font-size: 16px;
  margin: 32px auto 0;
  transition: border ease-in-out 0.25s;
  &:hover {
    border-color: $blue;
  }
}
</style>
