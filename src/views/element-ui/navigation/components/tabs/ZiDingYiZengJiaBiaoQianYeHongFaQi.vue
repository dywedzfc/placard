<template>
  <div class="model-box">
    <div style="margin-bottom: 20px">
      <el-button size="small" @click="addTab(editableTabsValue)"> add tab </el-button>
    </div>
    <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
      <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
        {{ item.content }}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ZiDingYiZengJiaBiaoQianYeHongFaQi extends Vue {
  editableTabsValue = '2'
  editableTabs = [
    { title: 'Tab 1', name: '1', content: 'Tab 1 content' },
    { title: 'Tab 2', name: '2', content: 'Tab 2 content' },
  ]
  tabIndex = 2

  addTab(targetName: any) {
    const newTabName = ++this.tabIndex + ''
    this.editableTabs.push({ title: 'New Tab', name: newTabName, content: 'New Tab content' })
    this.editableTabsValue = newTabName
  }
  removeTab(targetName: any) {
    const tabs = this.editableTabs
    let activeName = this.editableTabsValue
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }

    this.editableTabsValue = activeName
    this.editableTabs = tabs.filter((tab: any) => tab.name !== targetName)
  }
}
</script>

<style lang="scss" scoped></style>
