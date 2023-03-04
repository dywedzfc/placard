<template>
  <div class="page-container">
    <h2 id="header">Tabs 标签页</h2>
    <p>分隔内容上有关联但属于不同类别的数据集合。</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>基础的、简洁的标签页。</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="xuan-xiang-qia-yang-shi">选项卡样式</h3>
    <p>选项卡样式的标签页。</p>
    <demo-block>
      <template v-slot:source>
        <XuanXiangQiaYangShi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in xuanXiangQiaYangShi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="qia-pian-hua">卡片化</h3>
    <p>卡片化的标签页。</p>
    <demo-block>
      <template v-slot:source>
        <QiaPianHua />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in qiaPianHua" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="wei-zhi">位置</h3>
    <p>可以通过 <code>tab-position</code> 设置标签的位置</p>
    <demo-block>
      <template v-slot:source>
        <WeiZhi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in weiZhi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi-biao-qian-ye">自定义标签页</h3>
    <p>可以通过具名 <code>slot</code> 来实现自定义标签页的内容</p>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiBiaoQianYe />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiBiaoQianYe" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dong-tai-zeng-jian-biao-qian-ye">动态增减标签页</h3>
    <p>增减标签页按钮只能在选项卡样式的标签页下使用</p>
    <demo-block>
      <template v-slot:source>
        <DongTaiZengJianBiaoQianYe />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in dongTaiZengJianBiaoQianYe" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi-zeng-jia-biao-qian-ye-hong-fa-qi">自定义增加标签页触发器</h3>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiZengJiaBiaoQianYeHongFaQi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiZengJiaBiaoQianYeHongFaQi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="tabs-attributes">Tabs Attributes</h3>
    <table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value / v-model</td><td>绑定值，选中选项卡的 name</td><td>string</td><td>—</td><td>第一个选项卡的 name</td></tr><tr><td>type</td><td>风格类型</td><td>string</td><td>card/border-card</td><td>—</td></tr><tr><td>closable</td><td>标签是否可关闭</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>addable</td><td>标签是否可增加</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>标签是否同时可增加和关闭</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>tab-position</td><td>选项卡所在位置</td><td>string</td><td>top/right/bottom/left</td><td>top</td></tr><tr><td>stretch</td><td>标签的宽度是否自撑开</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>before-leave</td><td>切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。</td><td>Function(activeName, oldActiveName)</td><td>—</td><td>—</td></tr></tbody></table>
    <h3 id="tabs-events">Tabs Events</h3>
    <table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>tab-click</td><td>tab 被选中时触发</td><td>被选中的标签 tab 实例</td></tr><tr><td>tab-remove</td><td>点击 tab 移除按钮后触发</td><td>被删除的标签的 name</td></tr><tr><td>tab-add</td><td>点击 tabs 的新增按钮后触发</td><td>—</td></tr><tr><td>edit</td><td>点击 tabs 的新增按钮或 tab 被关闭后触发</td><td>(targetName, action)</td></tr></tbody></table>
    <h3 id="tab-pane-attributes">Tab-pane Attributes</h3>
    <table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>选项卡标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>与选项卡绑定值 value 对应的标识符，表示选项卡别名</td><td>string</td><td>—</td><td>该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1'</td></tr><tr><td>closable</td><td>标签是否可关闭</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lazy</td><td>标签是否延迟渲染</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="xuan-xiang-qia-yang-shi">选项卡样式</page-navigation-item>
      <page-navigation-item target="qia-pian-hua">卡片化</page-navigation-item>
      <page-navigation-item target="wei-zhi">位置</page-navigation-item>
      <page-navigation-item target="zi-ding-yi-biao-qian-ye">自定义标签页</page-navigation-item>
      <page-navigation-item target="dong-tai-zeng-jian-biao-qian-ye">动态增减标签页</page-navigation-item>
      <page-navigation-item target="zi-ding-yi-zeng-jia-biao-qian-ye-hong-fa-qi">自定义增加标签页触发器</page-navigation-item>
      <page-navigation-item target="tabs-attributes">Tabs Attributes</page-navigation-item>
      <page-navigation-item target="tabs-events">Tabs Events</page-navigation-item>
      <page-navigation-item target="tab-pane-attributes">Tab-pane Attributes</page-navigation-item>
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
import JiChuYongFa from './components/tabs/JiChuYongFa.vue'
import XuanXiangQiaYangShi from './components/tabs/XuanXiangQiaYangShi.vue'
import QiaPianHua from './components/tabs/QiaPianHua.vue'
import WeiZhi from './components/tabs/WeiZhi.vue'
import ZiDingYiBiaoQianYe from './components/tabs/ZiDingYiBiaoQianYe.vue'
import DongTaiZengJianBiaoQianYe from './components/tabs/DongTaiZengJianBiaoQianYe.vue'
import ZiDingYiZengJiaBiaoQianYeHongFaQi from './components/tabs/ZiDingYiZengJiaBiaoQianYeHongFaQi.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, XuanXiangQiaYangShi, QiaPianHua, WeiZhi, ZiDingYiBiaoQianYe, DongTaiZengJianBiaoQianYe, ZiDingYiZengJiaBiaoQianYeHongFaQi }})
export default class TabsView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/tabs.config.json').code.jiChuYongFa }
  get xuanXiangQiaYangShi(): object[] { return require('assets/config/element-ui/tabs.config.json').code.xuanXiangQiaYangShi }
  get qiaPianHua(): object[] { return require('assets/config/element-ui/tabs.config.json').code.qiaPianHua }
  get weiZhi(): object[] { return require('assets/config/element-ui/tabs.config.json').code.weiZhi }
  get ziDingYiBiaoQianYe(): object[] { return require('assets/config/element-ui/tabs.config.json').code.ziDingYiBiaoQianYe }
  get dongTaiZengJianBiaoQianYe(): object[] { return require('assets/config/element-ui/tabs.config.json').code.dongTaiZengJianBiaoQianYe }
  get ziDingYiZengJiaBiaoQianYeHongFaQi(): object[] { return require('assets/config/element-ui/tabs.config.json').code.ziDingYiZengJiaBiaoQianYeHongFaQi }
}
</script>