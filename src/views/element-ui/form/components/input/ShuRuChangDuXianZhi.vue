<template>
  <div class="model-box">
    <el-input type="text" placeholder="请输入内容" v-model="text" maxlength="10" show-word-limit> </el-input>
    <div style="margin: 20px 0"></div>
    <el-input type="textarea" placeholder="请输入内容" v-model="textarea" maxlength="30" show-word-limit> </el-input>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ShuRuChangDuXianZhi extends Vue {
  text = ''
  textarea = ''
}
</script>

<style lang="scss" scoped></style>
