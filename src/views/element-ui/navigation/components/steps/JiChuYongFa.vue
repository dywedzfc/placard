<template>
  <div class="model-box">
    <el-steps :active="active" finish-status="success">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <el-button style="margin-top: 12px" @click="next">下一步</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JiChuYongFa extends Vue {
  active = 0

  next() {
    if (this.active++ > 2) {
      this.active = 0
    }
  }
}
</script>

<style lang="scss" scoped></style>
