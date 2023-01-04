<template>
  <div class="images">
    <img src="/kodimon.png" alt="kodi-image" class="kodi-image" />
    <img src="/Kodi-logo.svg" alt="logo" class="kodi-logo" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
</style>