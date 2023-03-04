<template>
  <div class="model-box">
    <el-popconfirm title="这是一段内容确定删除吗？">
      <el-button slot="reference">删除</el-button>
    </el-popconfirm>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JiChuYongFa extends Vue {}
</script>

<style lang="scss" scoped></style>
