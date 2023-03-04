<template>
  <div class="model-box">
    <el-link :underline="false">无下划线</el-link>
    <el-link>有下划线</el-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class XiaHuaXian extends Vue {}
</script>

<style lang="scss" scoped>
.model-box .el-link + .el-link {
  margin-left: 5px;
}
</style>
