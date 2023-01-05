<template>
  <div class="image">
    <p class="hit-info" :class="loseHP == 0 ? 'miss' : 'shoot'">
      {{ loseHP == 0 ? "Miss !" : `${parseInt(loseHP)}dmg !` }}
    </p>
    <img :src="image" alt="opponent-1" class="real-image" />
    <img
      src="/fight.gif"
      alt="fight-gif"
      class="fight-gif"
      :class="firstOrSecondGifClass"
    />
  </div>
</template>

<script>
export default {
  props: ["image", "loseHP", "firstOrSecondGifClass"],
};
</script>

<style lang="scss" scoped>
.image {
  height: 150px;
}
.hit-info {
  position: absolute;
  top: 0;
  font-size: 40px;
  opacity: 0;
  &.miss {
    color: $black;
    rotate: -15deg;
  }
  &.shoot {
    color: $red;
    rotate: 15deg;
  }
}
.real-image {
  position: absolute;
  height: 150px;
  transform: translatex(-50%);
}
.fight-gif {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 250px;
  &.first {
    left: 0;
    display: none;
  }
  &.second {
    right: 0;
    display: none;
  }
}
</style>