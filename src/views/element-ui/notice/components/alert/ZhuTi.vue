<template>
  <div class="model-box">
    <el-alert title="成功提示的文案" type="success" effect="dark"> </el-alert>
    <el-alert title="消息提示的文案" type="info" effect="dark"> </el-alert>
    <el-alert title="警告提示的文案" type="warning" effect="dark"> </el-alert>
    <el-alert title="错误提示的文案" type="error" effect="dark"> </el-alert>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ZhuTi extends Vue {}
</script>

<style lang="scss" scoped></style>
