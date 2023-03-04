<template>
  <div class="model-box">
    <template>
      <div class="demo-type">
        <div>
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </div>
        <div>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <div>
          <el-avatar> user </el-avatar>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ZhanShiLeiXing extends Vue {}
</script>

<style lang="scss" scoped>
.demo-type {
  display: flex;

  > div {
    flex: 1;
    text-align: center;

    &:not(:last-child) {
      border-right: 1px solid rgba(224, 230, 237, 0.5);
    }
  }
}
</style>
