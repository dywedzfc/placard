<template>
  <div class="model-box">
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ZhaoPianQiang extends Vue {
  dialogImageUrl = ''
  dialogVisible = false

  handleRemove(file: any, fileList: any) {
    console.log(file, fileList)
  }
  handlePictureCardPreview(file: any) {
    this.dialogImageUrl = file.url
    this.dialogVisible = true
  }
}
</script>

<style lang="scss" scoped></style>
