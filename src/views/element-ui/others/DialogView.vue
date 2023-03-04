<template>
  <div class="page-container">
    <h2 id="header">Dialog 对话框</h2>
    <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
    <h3 id="ji-ben-yong-fa">基本用法</h3>
    <p>Dialog 弹出一个对话框，适合需要定制性更大的场景。</p>
    <demo-block>
      <template v-slot:source>
        <JiBenYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiBenYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <div class="tip" style=""><p><code>before-close</code> 仅当用户通过点击关闭图标或遮罩关闭 Dialog 时起效。如果你在 <code>footer</code> 具名 slot 里添加了用于关闭 Dialog 的按钮，那么可以在按钮的点击回调函数里加入 <code>before-close</code> 的相关逻辑。</p></div>
    <h3 id="zi-ding-yi-nei-rong">自定义内容</h3>
    <p>Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 Element Table 和 Form 组件的两个样例。</p>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiNeiRong />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiNeiRong" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="qian-tao-de-dialog">嵌套的 Dialog</h3>
    <p>如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 <code>append-to-body</code> 属性。</p>
    <demo-block>
      <template v-slot:source>
        <QianTaoDeDialog />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in qianTaoDeDialog" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ju-zhong-bu-ju">居中布局</h3>
    <p>标题和底部可水平居中</p>
    <demo-block>
      <template v-slot:source>
        <JuZhongBuJu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in juZhongBuJu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <div class="tip" style=""><p>Dialog 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。因此，如果需要执行 DOM 操作，或通过 <code>ref</code> 获取相应组件，请在 <code>open</code> 事件回调中进行。</p></div>
    <div class="tip" style=""><p>如果 <code>visible</code> 属性绑定的变量位于 Vuex 的 store 内，那么 <code>.sync</code> 不会正常工作。此时需要去除 <code>.sync</code> 修饰符，同时监听 Dialog 的 <code>open</code> 和 <code>close</code> 事件，在事件回调中执行 Vuex 中对应的 mutation 更新 <code>visible</code> 属性绑定的变量的值。</p></div>
    <h3 id="attributes">Attributes</h3>
    <table-props :data="attributes" />
    <h3 id="slot">Slot</h3>
    <table-slot :data="slot" />
    <h3 id="events">Events</h3>
    <table-events :data="events" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-ben-yong-fa">基本用法</page-navigation-item>
      <page-navigation-item target="zi-ding-yi-nei-rong">自定义内容</page-navigation-item>
      <page-navigation-item target="qian-tao-de-dialog">嵌套的 Dialog</page-navigation-item>
      <page-navigation-item target="ju-zhong-bu-ju">居中布局</page-navigation-item>
      <page-navigation-item target="attributes">Attributes</page-navigation-item>
      <page-navigation-item target="slot">Slot</page-navigation-item>
      <page-navigation-item target="events">Events</page-navigation-item>
    </page-navigation>
  </div>
</template>
        
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CodeLine from 'components/CodeLine.vue'
import DemoBlock from 'components/DemoBlock.vue'
import TableProps from 'components/TableProps.vue'
import TableMethods from 'components/TableMethods.vue'
import TableEvents from 'components/TableEvents.vue'
import TableSlot from 'components/TableSlot.vue'
import PageNavigation from 'components/PageNavigation.vue'
import PageNavigationItem from 'components/PageNavigationItem.vue'
import JiBenYongFa from './components/dialog/JiBenYongFa.vue'
import ZiDingYiNeiRong from './components/dialog/ZiDingYiNeiRong.vue'
import QianTaoDeDialog from './components/dialog/QianTaoDeDialog.vue'
import JuZhongBuJu from './components/dialog/JuZhongBuJu.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiBenYongFa, ZiDingYiNeiRong, QianTaoDeDialog, JuZhongBuJu }})
export default class DialogView extends Vue {
  get jiBenYongFa(): object[] { return require('assets/config/element-ui/dialog.config.json').code.jiBenYongFa }
  get ziDingYiNeiRong(): object[] { return require('assets/config/element-ui/dialog.config.json').code.ziDingYiNeiRong }
  get qianTaoDeDialog(): object[] { return require('assets/config/element-ui/dialog.config.json').code.qianTaoDeDialog }
  get juZhongBuJu(): object[] { return require('assets/config/element-ui/dialog.config.json').code.juZhongBuJu }
  get attributes(): object[] { return require('assets/config/element-ui/dialog.config.json').attributes }
  get slot(): object[] { return require('assets/config/element-ui/dialog.config.json').slot }
  get events(): object[] { return require('assets/config/element-ui/dialog.config.json').events }
}
</script>