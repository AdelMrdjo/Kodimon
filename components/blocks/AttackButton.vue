<template>
  <div class="action">
    <img src="/arrow.svg" alt="arrow" :class="{ rotate: attacker == 1 }" />
    <button :disabled="isAttackInProgress" @click="$emit('attack')">
      Attack!
    </button>
  </div>
</template>

<script>
export default {
  props: ["attacker", "isAttackInProgress"],
};
</script>

<style lang="scss" scoped>
.action {
  position: relative;
  bottom: 20px;
  img {
    display: block;
    margin: 0 auto 32px;
    &.rotate {
      rotate: 180deg;
    }
  }
}
</style>