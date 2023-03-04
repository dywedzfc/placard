<template>
  <div class="model-box">
    <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
    <el-link type="primary">主要链接</el-link>
    <el-link type="success">成功链接</el-link>
    <el-link type="warning">警告链接</el-link>
    <el-link type="danger">危险链接</el-link>
    <el-link type="info">信息链接</el-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JiChuYongFa extends Vue {}
</script>

<style lang="scss" scoped>
.model-box .el-link + .el-link {
  margin-left: 5px;
}
</style>
