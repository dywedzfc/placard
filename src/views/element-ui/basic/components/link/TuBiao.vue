<template>
  <div class="model-box">
    <el-link icon="el-icon-edit">编辑</el-link>
    <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TuBiao extends Vue {}
</script>

<style lang="scss" scoped>
.model-box .el-link + .el-link {
  margin-left: 10px;
}
</style>
