<template>
  <div class="model-box">
    <el-button :plain="true" @click="open">打开消息提示</el-button>
    <el-button :plain="true" @click="openVn">VNode</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JiChuYongFa extends Vue {
  open() {
    this.$message('这是一条消息提示')
  }
  openVn() {
    const h = this.$createElement
    this.$message({
      message: h('p', undefined, [h('span', undefined, '内容可以是 '), h('i', { style: 'color: teal' }, 'VNode')]),
    })
  }
}
</script>

<style lang="scss" scoped></style>
