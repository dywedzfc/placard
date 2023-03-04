<template>
  <div class="model-box">
    <el-button type="primary" :loading="true">加载中</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JiaZaiZhong extends Vue {}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
::v-deep .el-submenu .el-menu {
  list-style: none;
}
::v-deep .el-aside > .el-menu {
  margin: 0;
}
</style>
