<template>
  <div class="model-box">
    <div class="tag-group">
      <span class="tag-group__title">Dark</span>
      <el-tag v-for="item in items" :key="item.label" :type="item.type" effect="dark">
        {{ item.label }}
      </el-tag>
    </div>
    <div class="tag-group">
      <span class="tag-group__title">Plain</span>
      <el-tag v-for="item in items" :key="item.label" :type="item.type" effect="plain">
        {{ item.label }}
      </el-tag>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BuTongZhuTi extends Vue {
  items = [
    { type: '', label: '标签一' },
    { type: 'success', label: '标签二' },
    { type: 'info', label: '标签三' },
    { type: 'danger', label: '标签四' },
    { type: 'warning', label: '标签五' },
  ]
}
</script>

<style lang="scss" scoped>
.model-box {
  .tag-group__title {
    display: inline-block;
    width: 45px;
    font-size: 14px;
    color: #606266;
  }
  .tag-group + .tag-group {
    margin-top: 10px;
  }
}
</style>
