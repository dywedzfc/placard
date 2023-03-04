<template>
  <div class="model-box">
    <el-button type="text" @click="open">点击打开 Message Box</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ShiYongHtmlPianDuan extends Vue {
  open() {
    this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', { dangerouslyUseHTMLString: true })
  }
}
</script>

<style lang="scss" scoped></style>
