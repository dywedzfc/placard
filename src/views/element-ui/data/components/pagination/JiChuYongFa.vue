<template>
  <div class="model-box">
    <div class="block">
      <span class="demonstration">页数较少时的效果</span>
      <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
    </div>
    <div class="block">
      <span class="demonstration">大于 7 页时的效果</span>
      <el-pagination layout="prev, pager, next" :total="1000"> </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JiChuYongFa extends Vue {}
</script>

<style lang="scss" scoped>
.block {
  padding: 0;
  margin-bottom: 15px;

  .demonstration {
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 500;
    color: #333333;
  }
}
</style>
