<template>
  <div class="page-container">
    <h2 id="header">Dialog 分页表格</h2>
    <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>

    <page-navigation target="header">
      <page-navigation-item target="base-code">常见页面布局</page-navigation-item>
      <page-navigation-item target="size-code">开启最小化和最大化</page-navigation-item>
      <page-navigation-item target="radius-code">圆角</page-navigation-item>
      <page-navigation-item target="disable-code">禁止拖拽</page-navigation-item>
      <page-navigation-item target="dialog-attributes" text="Dialog Attributes" />
      <page-navigation-item target="dialog-slot" text="Dialog Slot" />
      <page-navigation-item target="dialog-events" text="Dialog Events" />
    </page-navigation>

    <h3 id="base-code">基础用法</h3>
    <demo-block>
      <template v-slot:source>
        <t-body>
          <el-button type="primary" @click="handleShowBaseDialogClick">按钮</el-button>
        </t-body>
        <t-dialog :visible.sync="baseDialog.display" :title="baseDialog.title" :width="baseDialog.width">
          <div class="body">我是对话框</div>
          <template #footer>
            <el-button @click="handleDialogCancelClick">取 消</el-button>
            <el-button type="primary" @click="handleDialogSubmitClick">确 定</el-button>
          </template>
        </t-dialog>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in baseCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="size-code">开启最小化和最大化</h3>
    <p>fullscreen、minscreen支持.sync。</p>
    <demo-block>
      <template v-slot:source>
        <t-body>
          <el-button type="primary" @click="handleShowDialog2Click">按钮</el-button>
        </t-body>
        <t-dialog :visible.sync="dialog2.display" :title="dialog2.title" :width="dialog2.width" tool-screen>
          <div class="body">我是对话框</div>
          <template #footer>
            <el-button @click="handleDialogCancel1Click">取 消</el-button>
            <el-button type="primary" @click="handleDialogSubmit1Click">确 定</el-button>
          </template>
        </t-dialog>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in maxOMinCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="radius-code">圆角</h3>
    <demo-block>
      <template v-slot:source>
        <t-body>
          <el-button type="primary" @click="handleShowDialog3Click">按钮</el-button>
        </t-body>
        <t-dialog :visible.sync="dialog3.display" :title="dialog3.title" :width="dialog3.width" radius="20px">
          <div class="body">我是对话框</div>
          <template #footer>
            <el-button @click="handleDialogCancel2Click">取 消</el-button>
            <el-button type="primary" @click="handleDialogSubmit2Click">确 定</el-button>
          </template>
        </t-dialog>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in radiusCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="disable-code">禁止拖拽</h3>
    <demo-block>
      <template v-slot:source>
        <t-body>
          <el-button type="primary" @click="handleShowDialog4Click">按钮</el-button>
        </t-body>
        <t-dialog :visible.sync="dialog4.display" :title="dialog4.title" :width="dialog4.width" :move="false">
          <div class="body">我是对话框</div>
          <template #footer>
            <el-button @click="handleDialogCancel3Click">取 消</el-button>
            <el-button type="primary" @click="handleDialogSubmit3Click">确 定</el-button>
          </template>
        </t-dialog>
      </template>
      <template v-slot:highlight>
        <!-- <span :class="[codeClassName(item)]" v-for="(item,index) in moveDisableCode" :key="index" v-html="codeType(item)"></span> -->
        <code-line v-for="(item, index) in moveDisableCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="dialog-attributes">Dialog Attributes</h3>
    <table-props :data="tableAttributes" />
    <h3 id="dialog-slot">Dialog Slot</h3>
    <table-slot :data="tableSlots" />
    <h3 id="dialog-events">Dialog Events</h3>
    <table-events :data="tableEvents" />
    <br />
    <br />
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CodeLine from 'components/CodeLine.vue'
import DemoBlock from 'components/DemoBlock.vue'
import TableProps from 'components/TableProps.vue'
import TableSlot from 'components/TableSlot.vue'
import TableEvents from 'components/TableEvents.vue'
import PageNavigation from 'components/PageNavigation.vue'
import PageNavigationItem from 'components/PageNavigationItem.vue'

@Component({
  components: {
    DemoBlock,
    TableProps,
    TableSlot,
    TableEvents,
    CodeLine,
    PageNavigation,
    PageNavigationItem,
  },
})
export default class DialogView extends Vue {
  baseDialog = { display: false, title: '提示', width: '30%' }
  dialog2 = { display: false, title: '提示', width: '30%' }
  dialog3 = { display: false, title: '提示', width: '30%' }
  dialog4 = { display: false, title: '提示', width: '30%' }

  get baseCode(): object[] {
    return require('assets/config/t-ui/dialog.config').code.baseCode
  }
  get maxOMinCode(): object[] {
    return require('assets/config/t-ui/dialog.config').code.maxOMinCode
  }
  get radiusCode(): object[] {
    return require('assets/config/t-ui/dialog.config').code.radiusCode
  }
  get moveDisableCode(): object[] {
    return require('assets/config/t-ui/dialog.config').code.moveDisableCode
  }
  get tableAttributes(): object[] {
    return require('assets/config/t-ui/dialog.config').attributes
  }
  get tableSlots(): object[] {
    return require('assets/config/t-ui/dialog.config').slots
  }
  get tableEvents(): object[] {
    return require('assets/config/t-ui/dialog.config').events
  }

  handleShowBaseDialogClick() {
    this.baseDialog.display = true
  }
  handleShowDialog2Click() {
    this.dialog2.display = true
  }
  handleShowDialog3Click() {
    this.dialog3.display = true
  }
  handleShowDialog4Click() {
    this.dialog4.display = true
  }
  handleDialogCancelClick() {
    this.baseDialog.display = false
  }
  handleDialogSubmitClick() {
    this.baseDialog.display = false
  }
  handleDialogCancel1Click() {
    this.dialog2.display = false
  }
  handleDialogSubmit1Click() {
    this.dialog2.display = false
  }
  handleDialogCancel2Click() {
    this.dialog3.display = false
  }
  handleDialogSubmit2Click() {
    this.dialog3.display = false
  }
  handleDialogCancel3Click() {
    this.dialog4.display = false
  }
  handleDialogSubmit3Click() {
    this.dialog4.display = false
  }
}
</script>

<style lang="scss" scoped>
// .code-html-tag {
//   display: block;
//   min-height: 25px;
// }
</style>
