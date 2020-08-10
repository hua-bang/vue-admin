<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
import { reactive, ref, onMounted, computed } from "@vue/composition-api";
export default {
  name: "SvgIcon",
  // props: ['iconClass', 'className'],
  props:{
    iconClass:{
      type:String
    },
    className:{
      type:String
    }
  },
  setup(props){
    const msg = ref("手把手1")
    const iconName = computed(() => `#icon-${props.iconClass}`)
    const svgClass = computed(() => {
      return props.className?`svg-icon ${props.className}`:`svg-icon`
    })

    return {
      msg,
      iconName,
      svgClass
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
</style>