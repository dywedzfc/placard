<template>
  <div class="model-box">
    <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
      <el-tab-pane :key="item.name" v-for="item in editableTabs" :label="item.title" :name="item.name">
        {{ item.content }}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DongTaiZengJianBiaoQianYe extends Vue {
  editableTabsValue = '2'
  editableTabs = [
    {
      title: 'Tab 1',
      name: '1',
      content: 'Tab 1 content',
    },
    {
      title: 'Tab 2',
      name: '2',
      content: 'Tab 2 content',
    },
  ]
  tabIndex = 2

  handleTabsEdit(targetName: any, action: any) {
    if (action === 'add') {
      const newTabName = ++this.tabIndex + ''
      this.editableTabs.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content',
      })
      this.editableTabsValue = newTabName
    }
    if (action === 'remove') {
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
}
</script>

<style lang="scss" scoped></style>
