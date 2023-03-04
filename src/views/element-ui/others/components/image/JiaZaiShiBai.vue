<template>
  <div class="model-box">
    <div class="demo-image__error">
      <div class="block">
        <span class="demonstration">默认</span>
        <el-image></el-image>
      </div>
      <div class="block">
        <span class="demonstration">自定义</span>
        <el-image>
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JiaZaiShiBai extends Vue {}
</script>

<style lang="scss" scoped></style>
