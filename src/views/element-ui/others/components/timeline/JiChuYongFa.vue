<template>
  <div class="model-box">
    <div class="block">
      <div class="radio">
        排序：
        <el-radio-group v-model="reverse">
          <el-radio :label="true">倒序</el-radio>
          <el-radio :label="false">正序</el-radio>
        </el-radio-group>
      </div>
      <el-timeline :reverse="reverse">
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :timestamp="activity.timestamp"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JiChuYongFa extends Vue {
  reverse = true
  activities = [
    { content: '活动按期开始', timestamp: '2018-04-15' },
    { content: '通过审核', timestamp: '2018-04-13' },
    { content: '创建成功', timestamp: '2018-04-11' },
  ]
}
</script>

<style lang="scss" scoped>
.radio {
  margin-bottom: 15px;
}
</style>
