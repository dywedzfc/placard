<template>
  <div class="model-box">
    <el-button type="text" @click="outerVisible = true"
      >点击打开外层 Dialog</el-button
    >

    <el-dialog title="外层 Dialog" :visible.sync="outerVisible">
      <el-dialog
        width="30%"
        title="内层 Dialog"
        :visible.sync="innerVisible"
        append-to-body
      >
      </el-dialog>
      <div slot="footer" class="dialog-footer">
        <el-button @click="outerVisible = false">取 消</el-button>
        <el-button type="primary" @click="innerVisible = true"
          >打开内层 Dialog</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class QianTaoDeDialog extends Vue {
  outerVisible = false
  innerVisible = false
}
</script>

<style lang="scss" scoped></style>
