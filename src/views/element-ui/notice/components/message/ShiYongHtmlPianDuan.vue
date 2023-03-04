<template>
  <div class="model-box">
    <el-button :plain="true" @click="openHTML">使用 HTML 片段</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ShiYongHtmlPianDuan extends Vue {
  openHTML() {
    this.$message({ dangerouslyUseHTMLString: true, message: '<strong>这是 <i>HTML</i> 片段</strong>' })
  }
}
</script>

<style lang="scss" scoped></style>
