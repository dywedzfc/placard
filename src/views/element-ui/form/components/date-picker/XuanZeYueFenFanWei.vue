<template>
  <div class="model-box">
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        type="monthrange"
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
      >
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value2"
        type="monthrange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
        :picker-options="pickerOptions"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class XuanZeYueFenFanWei extends Vue {
  pickerOptions = {
    shortcuts: [
      {
        text: '本月',
        onClick(picker: any) {
          picker.$emit('pick', [new Date(), new Date()])
        },
      },
      {
        text: '今年至今',
        onClick(picker: any) {
          const end = new Date()
          const start = new Date(new Date().getFullYear(), 0)
          picker.$emit('pick', [start, end])
        },
      },
      {
        text: '最近六个月',
        onClick(picker: any) {
          const end = new Date()
          const start = new Date()
          start.setMonth(start.getMonth() - 6)
          picker.$emit('pick', [start, end])
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
