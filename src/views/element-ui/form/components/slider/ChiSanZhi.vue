<template>
  <div class="model-box">
    <div class="block">
      <span class="demonstration">不显示间断点</span>
      <el-slider v-model="value1" :step="10"> </el-slider>
    </div>
    <div class="block">
      <span class="demonstration">显示间断点</span>
      <el-slider v-model="value2" :step="10" show-stops> </el-slider>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ChiSanZhi extends Vue {
  value1 = 0
  value2 = 0
}
</script>

<style lang="scss" scoped>
.block {
  padding: 30px 24px;
  overflow: hidden;
  border-bottom: 1px solid #eff2f6;

  .demonstration {
    display: inline-block;
    line-height: 44px;

    + .el-slider {
      float: right;
      width: 70%;
      margin-right: 20px;
    }
  }
}
</style>
