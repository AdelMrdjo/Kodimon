<template>
  <div id="main-layout">
    <Nuxt />
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
#main-layout {
  position: relative;
  overflow: hidden;
}
</style>
