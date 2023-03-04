<template>
  <div class="model-box">
    <el-button type="text" @click="open">点击打开 Message Box</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ZiDingYi extends Vue {
  open() {
    const h = this.$createElement
    this.$msgbox({
      title: '消息',
      message: h('p', undefined, [h('span', undefined, '内容可以是 '), h('i', { style: 'color: teal' }, 'VNode')]),
      showCancelButton: true,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      beforeClose: (action: any, instance: any, done: any) => {
        if (action === 'confirm') {
          instance.confirmButtonLoading = true
          instance.confirmButtonText = '执行中...'
          setTimeout(() => {
            done()
            setTimeout(() => (instance.confirmButtonLoading = false), 300)
          }, 3000)
        } else {
          done()
        }
      },
    }).then((action: any) => {
      this.$message({ type: 'info', message: 'action: ' + action })
    })
  }
}
</script>

<style lang="scss" scoped></style>
