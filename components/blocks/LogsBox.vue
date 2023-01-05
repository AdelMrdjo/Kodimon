<template>
  <div class="logs-container">
    <p class="label">Logs</p>
    <div class="logs" id="logs">
      <p v-for="(log, index) in logs" :key="index">{{ log }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["logs"],
};
</script>

<style lang="scss" scoped>
.label {
  font-weight: bold;
  text-align: left;
  margin-bottom: 8px;
}
.logs-container {
  .logs {
    border: 4px solid $yellow;
    background: $yellow-light;
    border-radius: 16px;
    padding: 12px;
    font-weight: bold;
    height: 240px;
    overflow-y: auto;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  }
}
</style>