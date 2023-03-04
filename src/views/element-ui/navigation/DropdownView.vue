<template>
  <div class="page-container">
    <h2 id="header">Dropdown 下拉菜单</h2>
    <p>将动作或菜单折叠到下拉菜单中。</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>移动到下拉菜单上，展开更多操作。</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="hong-fa-dui-xiang">触发对象</h3>
    <p>可使用按钮触发下拉菜单。</p>
    <demo-block>
      <template v-slot:source>
        <HongFaDuiXiang />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in hongFaDuiXiang" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="hong-fa-fang-shi">触发方式</h3>
    <p>可以配置 click 激活或者 hover 激活。</p>
    <demo-block>
      <template v-slot:source>
        <HongFaFangShi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in hongFaFangShi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="cai-dan-yin-cang-fang-shi">菜单隐藏方式</h3>
    <p>可以<code>hide-on-click</code>属性来配置。</p>
    <demo-block>
      <template v-slot:source>
        <CaiDanYinCangFangShi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in caiDanYinCangFangShi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zhi-ling-shi-jian">指令事件</h3>
    <p>点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作</p>
    <demo-block>
      <template v-slot:source>
        <ZhiLingShiJian />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in zhiLingShiJian" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="bu-tong-chi-cun">不同尺寸</h3>
    <p>Dropdown 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的尺寸。</p>
    <demo-block>
      <template v-slot:source>
        <BuTongChiCun />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in buTongChiCun" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dropdown-attributes">Dropdown Attributes</h3>
    <table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>菜单按钮类型，同 Button 组件(只在<code>split-button</code>为 true 的情况下有效)</td><td>string</td><td>—</td><td>—</td></tr><tr><td>size</td><td>菜单尺寸，在<code>split-button</code>为 true 的情况下也对触发按钮生效</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>split-button</td><td>下拉触发元素呈现为按钮组</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>placement</td><td>菜单弹出位置</td><td>string</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end</td><td>bottom-end</td></tr><tr><td>trigger</td><td>触发下拉的行为</td><td>string</td><td>hover, click</td><td>hover</td></tr><tr><td>hide-on-click</td><td>是否在点击菜单项后隐藏菜单</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>show-timeout</td><td>展开下拉菜单的延时（仅在 trigger 为 hover 时有效）</td><td>number</td><td>—</td><td>250</td></tr><tr><td>hide-timeout</td><td>收起下拉菜单的延时（仅在 trigger 为 hover 时有效）</td><td>number</td><td>—</td><td>150</td></tr><tr><td>tabindex</td><td>Dropdown 组件的 <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a></td><td>number</td><td>—</td><td>0</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>
    <h3 id="dropdown-slots">Dropdown Slots</h3>
    <table><thead><tr><th>Name</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件</td></tr><tr><td>dropdown</td><td>下拉列表，通常是 <code>&lt;el-dropdown-menu&gt;</code> 组件</td></tr></tbody></table>
    <h3 id="dropdown-events">Dropdown Events</h3>
    <table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td><code>split-button</code> 为 true 时，点击左侧按钮的回调</td><td>—</td></tr><tr><td>command</td><td>点击菜单项触发的事件回调</td><td>dropdown-item 的指令</td></tr><tr><td>visible-change</td><td>下拉框出现/隐藏时触发</td><td>出现则为 true，隐藏则为 false</td></tr></tbody></table>
    <h3 id="dropdown-menu-item-attributes">Dropdown Menu Item Attributes</h3>
    <table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>command</td><td>指令</td><td>string/number/object</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>divided</td><td>显示分割线</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>icon</td><td>图标类名</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="hong-fa-dui-xiang">触发对象</page-navigation-item>
      <page-navigation-item target="hong-fa-fang-shi">触发方式</page-navigation-item>
      <page-navigation-item target="cai-dan-yin-cang-fang-shi">菜单隐藏方式</page-navigation-item>
      <page-navigation-item target="zhi-ling-shi-jian">指令事件</page-navigation-item>
      <page-navigation-item target="bu-tong-chi-cun">不同尺寸</page-navigation-item>
      <page-navigation-item target="dropdown-attributes">Dropdown Attributes</page-navigation-item>
      <page-navigation-item target="dropdown-slots">Dropdown Slots</page-navigation-item>
      <page-navigation-item target="dropdown-events">Dropdown Events</page-navigation-item>
      <page-navigation-item target="dropdown-menu-item-attributes">Dropdown Menu Item Attributes</page-navigation-item>
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
import JiChuYongFa from './components/dropdown/JiChuYongFa.vue'
import HongFaDuiXiang from './components/dropdown/HongFaDuiXiang.vue'
import HongFaFangShi from './components/dropdown/HongFaFangShi.vue'
import CaiDanYinCangFangShi from './components/dropdown/CaiDanYinCangFangShi.vue'
import ZhiLingShiJian from './components/dropdown/ZhiLingShiJian.vue'
import BuTongChiCun from './components/dropdown/BuTongChiCun.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, HongFaDuiXiang, HongFaFangShi, CaiDanYinCangFangShi, ZhiLingShiJian, BuTongChiCun }})
export default class DropdownView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/dropdown.config.json').code.jiChuYongFa }
  get hongFaDuiXiang(): object[] { return require('assets/config/element-ui/dropdown.config.json').code.hongFaDuiXiang }
  get hongFaFangShi(): object[] { return require('assets/config/element-ui/dropdown.config.json').code.hongFaFangShi }
  get caiDanYinCangFangShi(): object[] { return require('assets/config/element-ui/dropdown.config.json').code.caiDanYinCangFangShi }
  get zhiLingShiJian(): object[] { return require('assets/config/element-ui/dropdown.config.json').code.zhiLingShiJian }
  get buTongChiCun(): object[] { return require('assets/config/element-ui/dropdown.config.json').code.buTongChiCun }
}
</script>