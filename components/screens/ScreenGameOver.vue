<template>
  <div class="game-over">
    <p class="winner">
      <span>{{ winner.name }}</span> won!
    </p>
    <MenuButtons @startNewGame="$emit('startNewGame')" />
  </div>
</template>

<script>
export default {
  props: ["winner"],
};
</script>

<style lang="scss" scoped>
.game-over {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.75);
  display: grid;
  justify-content: center;
  align-content: center;
}
.winner {
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translate(-50%);
  font-size: 40px;
  font-weight: bold;
}
span {
  text-transform: capitalize;
}
.menu-container {
  width: 280px;
  :deep(.buttons) {
    padding: 16px 0;
    gap: 16px;
    button {
      height: 50px;
    }
  }
}
</style>