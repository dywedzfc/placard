<template>
  <div class="model-box">
    <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
    <div>
      <el-button-group>
        <el-button icon="el-icon-minus" @click="decrease"></el-button>
        <el-button icon="el-icon-plus" @click="increase"></el-button>
      </el-button-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class YiBiaoPanXingJinDuTiao extends Vue {
  percentage = 10
  colors = [
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 },
  ]

  increase() {
    this.percentage += 10
    if (this.percentage > 100) { this.percentage = 100 }
  }
  decrease() {
    this.percentage -= 10
    if (this.percentage < 0) { this.percentage = 0 }
  }
}
</script>

<style lang="scss" scoped></style>
