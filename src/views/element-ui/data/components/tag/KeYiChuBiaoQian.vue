<template>
  <div class="model-box">
    <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
      {{ tag.name }}
    </el-tag>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class KeYiChuBiaoQian extends Vue {
  tags = [
    { name: '标签一', type: '' },
    { name: '标签二', type: 'success' },
    { name: '标签三', type: 'info' },
    { name: '标签四', type: 'warning' },
    { name: '标签五', type: 'danger' },
  ]
}
</script>

<style lang="scss" scoped></style>
