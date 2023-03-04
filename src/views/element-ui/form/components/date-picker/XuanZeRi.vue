<template>
  <div class="model-box">
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker v-model="value1" type="date" placeholder="选择日期"> </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker v-model="value2" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions">
      </el-date-picker>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class XuanZeRi extends Vue {
  pickerOptions = {
    disabledDate(time: any) {
      return time.getTime() > Date.now()
    },
    shortcuts: [
      {
        text: '今天',
        onClick(picker: any) {
          picker.$emit('pick', new Date())
        },
      },
      {
        text: '昨天',
        onClick(picker: any) {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24)
          picker.$emit('pick', date)
        },
      },
      {
        text: '一周前',
        onClick(picker: any) {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
          picker.$emit('pick', date)
        },
      },
    ],
  }
  value1 = ''
  value2 = ''
}
</script>

<style lang="scss" scoped>
.model-box {
  display: flex;
}
.block {
  text-align: center;
  border-right: 1px solid #eff2f6;
  width: 50%;
  box-sizing: border-box;

  &:last-child {
    border-right: none;
  }
}
</style>
