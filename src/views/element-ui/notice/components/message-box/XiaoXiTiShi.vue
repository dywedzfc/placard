<template>
  <div class="model-box">
    <el-button type="text" @click="open">点击打开 Message Box</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class XiaoXiTiShi extends Vue {
  open() {
    this.$alert('这是一段内容', '标题名称', {
      confirmButtonText: '确定',
      callback: (action: any) => {
        this.$message({ type: 'info', message: `action: ${action}` })
      },
    })
  }
}
</script>

<style lang="scss" scoped></style>
