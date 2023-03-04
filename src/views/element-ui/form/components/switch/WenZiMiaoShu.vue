<template>
  <div class="model-box">
    <el-switch v-model="value1" active-text="按月付费" inactive-text="按年付费"></el-switch>
    <el-switch
      style="display: block"
      v-model="value2"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="按月付费"
      inactive-text="按年付费"
    >
    </el-switch>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class WenZiMiaoShu extends Vue {
  value1 = true
  value2 = true
}
</script>

<style lang="scss" scoped>
.el-switch {
  margin: 20px 20px 20px 0;
}
</style>
