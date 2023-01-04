<template>
  <div class="menu-container">
    <p class="label">Menu</p>
    <div class="buttons">
      <button @click="setGameStarted(false)">Home</button>
      <button @click="$emit('startNewGame')">New game</button>
      <button>New opponent</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["GAME_STARTED"]),
    setGameStarted(bool) {
      this.GAME_STARTED(bool);
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  font-weight: bold;
  text-align: left;
  margin-bottom: 8px;
}
.menu-container {
  width: 260px;
  .buttons {
    border: 4px solid $yellow;
    background: $yellow-light;
    border-radius: 16px;
    padding: 12px 0;
    display: grid;
    justify-content: center;
    gap: 12px;
  }
}
</style>