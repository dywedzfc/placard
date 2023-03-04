<template>
  <div class="model-box">
    <el-button plain @click="open"> 使用 HTML 片段 </el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ShiYongHtmlPianDuan extends Vue {
  open() {
    this.$notify({
      title: 'HTML 片段',
      dangerouslyUseHTMLString: true,
      message: '<strong>这是 <i>HTML</i> 片段</strong>',
    })
  }
}
</script>

<style lang="scss" scoped></style>
