<template>
  <div class="model-box">
    <el-button plain @click="open1"> 可自动关闭 </el-button>
    <el-button plain @click="open2"> 不会自动关闭 </el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JiBenYongFa extends Vue {
  open1() {
    const h = this.$createElement
    this.$notify({
      title: '标题名称',
      message: h(
        'i',
        { style: 'color: teal' },
        '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'
      ),
    })
  }
  open2() {
    this.$notify({ title: '提示', message: '这是一条不会自动关闭的消息', duration: 0 })
  }
}
</script>

<style lang="scss" scoped></style>
