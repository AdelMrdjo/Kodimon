export { default as AttackButton } from '../..\\components\\blocks\\AttackButton.vue'
export { default as HomeLogo } from '../..\\components\\blocks\\HomeLogo.vue'
export { default as LogsBox } from '../..\\components\\blocks\\LogsBox.vue'
export { default as MenuButtons } from '../..\\components\\blocks\\MenuButtons.vue'
export { default as PlayerBox } from '../..\\components\\blocks\\PlayerBox.vue'
export { default as PlayerImage } from '../..\\components\\blocks\\PlayerImage.vue'
export { default as PlayerProgressBar } from '../..\\components\\blocks\\PlayerProgressBar.vue'
export { default as PlayerStats } from '../..\\components\\blocks\\PlayerStats.vue'
export { default as ScreenGameOver } from '../..\\components\\screens\\ScreenGameOver.vue'
export { default as ScreenInGame } from '../..\\components\\screens\\ScreenInGame.vue'
export { default as ScreenNewGame } from '../..\\components\\screens\\ScreenNewGame.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
