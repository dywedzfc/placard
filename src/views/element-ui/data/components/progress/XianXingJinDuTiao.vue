<template>
  <div class="model-box">
    <el-progress :percentage="50"></el-progress>
    <el-progress :percentage="100" :format="format"></el-progress>
    <el-progress :percentage="100" status="success"></el-progress>
    <el-progress :percentage="100" status="warning"></el-progress>
    <el-progress :percentage="50" status="exception"></el-progress>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class XianXingJinDuTiao extends Vue {
  format(percentage: any) {
    return percentage === 100 ? '满' : `${percentage}%`
  }
}
</script>

<style lang="scss" scoped></style>
