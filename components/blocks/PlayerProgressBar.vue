<template>
  <div class="progress">
    <p>{{ energy }} %</p>
    <div class="progress-bar" :class="energyClass">
      <div class="loaded" :style="{ width: `${energy}%` }"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["energy", "energyClass"],
};
</script>

<style lang="scss" scoped>
.progress-bar {
  width: 220px;
  height: 24px;
  margin: 0 auto 8px;
  border-radius: 12px;
  .loaded {
    height: 100%;
    border-radius: 12px;
    transition: width ease-in-out 0.25s;
  }
  &.green {
    border: 4px solid $green;
    .loaded {
      background: $green-light;
    }
  }
  &.orange {
    border: 4px solid $yellow;
    .loaded {
      background: $yellow-light;
    }
  }
  &.red {
    border: 4px solid $red;
    .loaded {
      background: $red-light;
    }
  }
}
</style>