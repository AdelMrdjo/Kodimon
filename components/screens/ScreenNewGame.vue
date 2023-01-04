<template>
  <div class="new-game-screen">
    <HomeLogo />
    <button @click="$emit('startNewGame')">New Game</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.new-game-screen {
  display: grid;
  justify-content: center;
  align-content: center;
  height: 100%;
}
button {
  margin: 32px auto 0;
}
</style>