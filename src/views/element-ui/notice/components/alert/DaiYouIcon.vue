<template>
  <div class="model-box">
    <el-alert title="成功提示的文案" type="success" show-icon> </el-alert>
    <el-alert title="消息提示的文案" type="info" show-icon> </el-alert>
    <el-alert title="警告提示的文案" type="warning" show-icon> </el-alert>
    <el-alert title="错误提示的文案" type="error" show-icon> </el-alert>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DaiYouIcon extends Vue {}
</script>

<style lang="scss" scoped></style>
