<template>
  <div class="model-box">
    <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TuoZhuaiShangChuan extends Vue {}
</script>

<style lang="scss" scoped></style>
