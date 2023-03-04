<template>
  <div class="model-box">
    <el-result title="404" subTitle="抱歉，请求错误">
      <template slot="icon">
        <el-image
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        ></el-image>
      </template>
      <template slot="extra">
        <el-button type="primary" size="medium">返回</el-button>
      </template>
    </el-result>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ZiDingYiNeiRong extends Vue {}
</script>

<style lang="scss" scoped></style>
