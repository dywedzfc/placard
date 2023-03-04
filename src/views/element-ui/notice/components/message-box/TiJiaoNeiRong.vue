<template>
  <div class="model-box">
    <el-button type="text" @click="open">点击打开 Message Box</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TiJiaoNeiRong extends Vue {
  open() {
    this.$prompt('请输入邮箱', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      inputPattern:
        /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
      inputErrorMessage: '邮箱格式不正确',
    })
      .then(({ value }: any) => {
        this.$message({ type: 'success', message: '你的邮箱是: ' + value })
      })
      .catch(() => {
        this.$message({ type: 'info', message: '取消输入' })
      })
  }
}
</script>

<style lang="scss" scoped></style>
