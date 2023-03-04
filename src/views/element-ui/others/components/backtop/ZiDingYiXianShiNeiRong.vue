<template>
  <div class="model-box">
    Scroll down to see the bottom-right button.
    <el-backtop target=".t-layout-body .index-body" :bottom="100">
      <div
        style="
           {
            height: 100%;
            width: 100%;
            background-color: #f2f5f6;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
            text-align: center;
            line-height: 40px;
            color: #1989fa;
          }
        "
      >
        UP
      </div>
    </el-backtop>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ZiDingYiXianShiNeiRong extends Vue {}
</script>

<style lang="scss" scoped></style>
