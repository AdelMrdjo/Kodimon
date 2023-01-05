<template>
  <div>
    <p class="label">Stats</p>
    <div class="stats">
      <p>HP: {{ hp }}</p>
      <p>Attack: {{ attack }}</p>
      <p>Defense: {{ defense }}</p>
      <p>Speed: {{ speed }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["hp", "attack", "defense", "speed"],
};
</script>

<style lang="scss" scoped>
.label {
  font-weight: bold;
  text-align: left;
  margin-bottom: 8px;
}
.stats {
  text-align: left;
  border: 4px solid $yellow;
  border-radius: 16px;
  width: 260px;
  background: $yellow-light;
  padding: 10px;
}
</style>