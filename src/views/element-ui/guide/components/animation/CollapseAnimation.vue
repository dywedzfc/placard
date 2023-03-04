<template>
  <div class="animation-container">
    <el-button @click="show = !show">Click Me</el-button>

    <div style="margin-top: 20px; height: 200px">
      <collapse-transition>
        <div v-show="show">
          <div class="transition-box">el-collapse-transition</div>
          <div class="transition-box">el-collapse-transition</div>
        </div>
      </collapse-transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

@Component({ components: { CollapseTransition } })
export default class CollapseAnimation extends Vue {
  show = true
}
</script>
