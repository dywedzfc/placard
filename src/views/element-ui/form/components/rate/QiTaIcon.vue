<template>
  <div class="model-box">
    <el-rate
      v-model="value"
      :icon-classes="iconClasses"
      void-icon-class="icon-rate-face-off"
      :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
    >
    </el-rate>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class QiTaIcon extends Vue {
  value = null
  iconClasses = ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
}
</script>

<style lang="scss" scoped></style>
