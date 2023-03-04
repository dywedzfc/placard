<template>
  <div class="model-box">
    <template>
      <p style="text-align: center; margin: 0 0 20px">使用 render-content 自定义数据项</p>
      <div style="text-align: center">
        <el-transfer
          style="text-align: left; display: inline-block"
          v-model="value"
          filterable
          :left-default-checked="[2, 3]"
          :right-default-checked="[1]"
          :render-content="renderFunc"
          :titles="['Source', 'Target']"
          :button-texts="['到左边', '到右边']"
          :format="{ noChecked: '${total}', hasChecked: '${checked}/${total}' }"
          @change="handleChange"
          :data="data"
        >
          <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
          <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
        </el-transfer>
      </div>
      <p style="text-align: center; margin: 50px 0 20px">使用 scoped-slot 自定义数据项</p>
      <div style="text-align: center">
        <el-transfer
          style="text-align: left; display: inline-block"
          v-model="value4"
          filterable
          :left-default-checked="[2, 3]"
          :right-default-checked="[1]"
          :titles="['Source', 'Target']"
          :button-texts="['到左边', '到右边']"
          :format="{ noChecked: '${total}', hasChecked: '${checked}/${total}' }"
          @change="handleChange"
          :data="data"
        >
          <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
          <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
          <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
        </el-transfer>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class KeZiDingYi extends Vue {
  data: any = []
  value = [1]
  value4 = [1]

  mounted(): void {
    this.generateData()
  }

  generateData() {
    const data: any = []
    for (let i = 1; i <= 15; i++) {
      data.push({ key: i, label: `备选项 ${i}`, disabled: i % 4 === 0 })
    }
    this.data = data
  }
  renderFunc(h: any, option: any) {
    console.info('func:', h, option)
    return h('span', `${option.key} - ${option.label}`)
    // return <span>${option.key} - ${option.label}</span>
  }
  handleChange(value: any, direction: any, movedKeys: any) {
    console.log(value, direction, movedKeys)
  }
}
</script>

<style lang="scss" scoped>
.transfer-footer {
  margin-left: 20px;
  padding: 6px 5px;
}
</style>
