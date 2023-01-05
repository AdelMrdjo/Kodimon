<template>
  <div class="opponent">
    <PlayerProgressBar :energy="energy" :energyClass="energyClass" />
    <p class="name">{{ name }}</p>
    <PlayerImage
      :image="image"
      :loseHP="loseHP"
      :firstOrSecondGifClass="firstOrSecondGifClass"
    />
    <PlayerStats :hp="hp" :attack="attack" :defense="defense" :speed="speed" />
  </div>
</template>

<script>
export default {
  props: [
    "name",
    "image",
    "loseHP",
    "hp",
    "energy",
    "energyClass",
    "attack",
    "defense",
    "speed",
    "firstOrSecondGifClass",
  ],
};
</script>

<style lang="scss" scoped>
.name {
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 12px;
}
</style>