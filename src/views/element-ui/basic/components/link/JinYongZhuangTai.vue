<template>
  <div class="model-box">
    <el-link disabled>默认链接</el-link>
    <el-link type="primary" disabled>主要链接</el-link>
    <el-link type="success" disabled>成功链接</el-link>
    <el-link type="warning" disabled>警告链接</el-link>
    <el-link type="danger" disabled>危险链接</el-link>
    <el-link type="info" disabled>信息链接</el-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JinYongZhuangTai extends Vue {}
</script>

<style lang="scss" scoped>
.model-box .el-link + .el-link {
  margin-left: 5px;
}
</style>
