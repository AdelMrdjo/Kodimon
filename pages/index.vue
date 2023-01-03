<template>
  <div class="container">
    <div class="new-game-screen">
      <div class="images">
        <img src="/kodimon.png" alt="kodi-image" class="kodi-image" />
        <img src="/Kodi-logo.svg" alt="logo" class="kodi-logo" />
      </div>
      <button>New Game</button>
    </div>
    <div class="in-game-screen"></div>
  </div>
</template>
<script>
export default {};
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
}
</style>
