<template>
  <div class="page-container">
    <h2 id="header">Drawer 抽屉</h2>
    <p>有些时候, <code>Dialog</code> 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, <code>Drawer</code> 拥有和 <code>Dialog</code> 几乎相同的 API, 在 UI 上带来不一样的体验.</p>
    <h3 id="ji-ben-yong-fa">基本用法</h3>
    <p>呼出一个临时的侧边栏, 可以从多个方向呼出</p>
    <demo-block>
      <template v-slot:source>
        <JiBenYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiBenYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="bu-tian-jia-title">不添加 Title</h3>
    <p>当你不需要标题到时候, 你还可以去掉标题</p>
    <demo-block>
      <template v-slot:source>
        <BuTianJiaTitle />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in buTianJiaTitle" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi-nei-rong">自定义内容</h3>
    <p>和 <code>Dialog</code> 组件一样, <code>Drawer</code> 同样可以在其内部嵌套各种丰富的操作</p>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiNeiRong />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiNeiRong" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="duo-ceng-qian-tao">多层嵌套</h3>
    <p><code>Drawer</code> 组件也拥有多层嵌套的方法</p>
    <demo-block>
      <template v-slot:source>
        <DuoCengQianTao />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in duoCengQianTao" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <div class="tip" style=""><p>Drawer 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。因此，如果需要执行 DOM 操作，或通过 <code>ref</code> 获取相应组件，请在 <code>open</code> 事件回调中进行。</p></div>
    <div class="tip" style=""><p>Drawer 提供一个 <code>destroyOnClose</code> API, 用来在关闭 Drawer 时销毁子组件内容, 例如清理表单内的状态, 在必要时可以将该属性设置为 <strong>true</strong> 用来保证初始状态的一致性</p></div>
    <div class="tip" style=""><p>如果 <code>visible</code> 属性绑定的变量位于 Vuex 的 store 内，那么 <code>.sync</code> 不会正常工作。此时需要去除 <code>.sync</code> 修饰符，同时监听 Drawer 的 <code>open</code> 和 <code>close</code> 事件，在事件回调中执行 Vuex 中对应的 mutation 更新 <code>visible</code> 属性绑定的变量的值。</p></div>
    <h3 id="drawer-attributes">Drawer Attributes</h3>
    <table-props :data="drawerAttributes" />
    <h3 id="drawer-slot">Drawer Slot</h3>
    <table-slot :data="drawerSlot" />
    <h3 id="drawer-methods">Drawer Methods</h3>
    <table-methods :data="drawerMethods" />
    <h3 id="drawer-events">Drawer Events</h3>
    <table-events :data="drawerEvents" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-ben-yong-fa">基本用法</page-navigation-item>
      <page-navigation-item target="bu-tian-jia-title">不添加 Title</page-navigation-item>
      <page-navigation-item target="zi-ding-yi-nei-rong">自定义内容</page-navigation-item>
      <page-navigation-item target="duo-ceng-qian-tao">多层嵌套</page-navigation-item>
      <page-navigation-item target="drawer-attributes">Drawer Attributes</page-navigation-item>
      <page-navigation-item target="drawer-slot">Drawer Slot</page-navigation-item>
      <page-navigation-item target="drawer-methods">Drawer Methods</page-navigation-item>
      <page-navigation-item target="drawer-events">Drawer Events</page-navigation-item>
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
import JiBenYongFa from './components/drawer/JiBenYongFa.vue'
import BuTianJiaTitle from './components/drawer/BuTianJiaTitle.vue'
import ZiDingYiNeiRong from './components/drawer/ZiDingYiNeiRong.vue'
import DuoCengQianTao from './components/drawer/DuoCengQianTao.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiBenYongFa, BuTianJiaTitle, ZiDingYiNeiRong, DuoCengQianTao }})
export default class DrawerView extends Vue {
  get jiBenYongFa(): object[] { return require('assets/config/element-ui/drawer.config.json').code.jiBenYongFa }
  get buTianJiaTitle(): object[] { return require('assets/config/element-ui/drawer.config.json').code.buTianJiaTitle }
  get ziDingYiNeiRong(): object[] { return require('assets/config/element-ui/drawer.config.json').code.ziDingYiNeiRong }
  get duoCengQianTao(): object[] { return require('assets/config/element-ui/drawer.config.json').code.duoCengQianTao }
  get drawerAttributes(): object[] { return require('assets/config/element-ui/drawer.config.json').drawerAttributes }
  get drawerSlot(): object[] { return require('assets/config/element-ui/drawer.config.json').drawerSlot }
  get drawerMethods(): object[] { return require('assets/config/element-ui/drawer.config.json').drawerMethods }
  get drawerEvents(): object[] { return require('assets/config/element-ui/drawer.config.json').drawerEvents }
}
</script>