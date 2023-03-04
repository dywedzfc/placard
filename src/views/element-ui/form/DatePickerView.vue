<template>
  <div class="page-container">
    <h2 id="header">DatePicker 日期选择器</h2>
    <p>用于选择或输入日期</p>
    <h3 id="xuan-ze-ri">选择日</h3>
    <p>以「日」为基本单位，基础的日期选择控件</p>
    <demo-block>
      <template v-slot:source>
        <XuanZeRi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in xuanZeRi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="qi-ta-ri-qi-dan-wei">其他日期单位</h3>
    <p>通过扩展基础的日期选择，可以选择周、月、年或多个日期</p>
    <demo-block>
      <template v-slot:source>
        <QiTaRiQiDanWei />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in qiTaRiQiDanWei" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="xuan-ze-ri-qi-fan-wei">选择日期范围</h3>
    <p>可在一个选择器中便捷地选择一个时间范围</p>
    <demo-block>
      <template v-slot:source>
        <XuanZeRiQiFanWei />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in xuanZeRiQiFanWei" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="xuan-ze-yue-fen-fan-wei">选择月份范围</h3>
    <p>可在一个选择器中便捷地选择一个月份范围</p>
    <demo-block>
      <template v-slot:source>
        <XuanZeYueFenFanWei />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in xuanZeYueFenFanWei" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ri-qi-ge-shi">日期格式</h3>
    <p>使用<code>format</code>指定输入框的格式；使用<code>value-format</code>指定绑定值的格式。</p>
    <p>默认情况下，组件接受并返回<code>Date</code>对象。以下为可用的格式化字符串，以 UTC 2017年1月2日 03:04:05 为例：</p>
    <div class="warning" style=""><p>请注意大小写</p></div>
    <table><thead><tr><th>格式</th><th>含义</th><th>备注</th><th>举例</th></tr></thead><tbody><tr><td><code>yyyy</code></td><td>年</td><td></td><td>2017</td></tr><tr><td><code>M</code></td><td>月</td><td>不补0</td><td>1</td></tr><tr><td><code>MM</code></td><td>月</td><td></td><td>01</td></tr><tr><td><code>W</code></td><td>周</td><td>仅周选择器的 <code>format</code> 可用；不补0</td><td>1</td></tr><tr><td><code>WW</code></td><td>周</td><td>仅周选择器的 <code>format</code> 可用</td><td>01</td></tr><tr><td><code>d</code></td><td>日</td><td>不补0</td><td>2</td></tr><tr><td><code>dd</code></td><td>日</td><td></td><td>02</td></tr><tr><td><code>H</code></td><td>小时</td><td>24小时制；不补0</td><td>3</td></tr><tr><td><code>HH</code></td><td>小时</td><td>24小时制</td><td>03</td></tr><tr><td><code>h</code></td><td>小时</td><td>12小时制，须和 <code>A</code> 或 <code>a</code> 使用；不补0</td><td>3</td></tr><tr><td><code>hh</code></td><td>小时</td><td>12小时制，须和 <code>A</code> 或 <code>a</code> 使用</td><td>03</td></tr><tr><td><code>m</code></td><td>分钟</td><td>不补0</td><td>4</td></tr><tr><td><code>mm</code></td><td>分钟</td><td></td><td>04</td></tr><tr><td><code>s</code></td><td>秒</td><td>不补0</td><td>5</td></tr><tr><td><code>ss</code></td><td>秒</td><td></td><td>05</td></tr><tr><td><code>A</code></td><td>AM/PM</td><td>仅 <code>format</code> 可用，大写</td><td>AM</td></tr><tr><td><code>a</code></td><td>am/pm</td><td>仅 <code>format</code> 可用，小写</td><td>am</td></tr><tr><td><code>timestamp</code></td><td>JS时间戳</td><td>仅 <code>value-format</code> 可用；组件绑定值为<code>number</code>类型</td><td>1483326245000</td></tr><tr><td><code>[MM]</code></td><td>不需要格式化字符</td><td>使用方括号标识不需要格式化的字符 (如  [A] [MM])</td><td>MM</td></tr></tbody></table>
    <demo-block>
      <template v-slot:source>
        <RiQiGeShi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in riQiGeShi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="mo-ren-xian-shi-ri-qi">默认显示日期</h3>
    <p>在选择日期范围时，指定起始日期和结束日期的默认时刻。</p>
    <demo-block>
      <template v-slot:source>
        <MoRenXianShiRiQi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in moRenXianShiRiQi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="attributes">Attributes</h3>
    <table-props :data="attributes" />
    <h3 id="picker-options">Picker Options</h3>
    <table-props :data="pickerOptions" />
    <h3 id="shortcuts">Shortcuts</h3>
    <table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>标题文本</td><td>string</td><td>—</td><td>—</td></tr><tr><td>onClick</td><td>选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.$emit('pick', new Date())</td><td>function</td><td>—</td><td>—</td></tr></tbody></table>
    <h3 id="events">Events</h3>
    <table-events :data="events" />
    <h3 id="methods">Methods</h3>
    <table-methods :data="methods" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="xuan-ze-ri">选择日</page-navigation-item>
      <page-navigation-item target="qi-ta-ri-qi-dan-wei">其他日期单位</page-navigation-item>
      <page-navigation-item target="xuan-ze-ri-qi-fan-wei">选择日期范围</page-navigation-item>
      <page-navigation-item target="xuan-ze-yue-fen-fan-wei">选择月份范围</page-navigation-item>
      <page-navigation-item target="ri-qi-ge-shi">日期格式</page-navigation-item>
      <page-navigation-item target="mo-ren-xian-shi-ri-qi">默认显示日期</page-navigation-item>
      <page-navigation-item target="attributes">Attributes</page-navigation-item>
      <page-navigation-item target="picker-options">Picker Options</page-navigation-item>
      <page-navigation-item target="shortcuts">Shortcuts</page-navigation-item>
      <page-navigation-item target="events">Events</page-navigation-item>
      <page-navigation-item target="methods">Methods</page-navigation-item>
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
import XuanZeRi from './components/date-picker/XuanZeRi.vue'
import QiTaRiQiDanWei from './components/date-picker/QiTaRiQiDanWei.vue'
import XuanZeRiQiFanWei from './components/date-picker/XuanZeRiQiFanWei.vue'
import XuanZeYueFenFanWei from './components/date-picker/XuanZeYueFenFanWei.vue'
import RiQiGeShi from './components/date-picker/RiQiGeShi.vue'
import MoRenXianShiRiQi from './components/date-picker/MoRenXianShiRiQi.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, XuanZeRi, QiTaRiQiDanWei, XuanZeRiQiFanWei, XuanZeYueFenFanWei, RiQiGeShi, MoRenXianShiRiQi }})
export default class DatePickerView extends Vue {
  get xuanZeRi(): object[] { return require('assets/config/element-ui/date-picker.config.json').code.xuanZeRi }
  get qiTaRiQiDanWei(): object[] { return require('assets/config/element-ui/date-picker.config.json').code.qiTaRiQiDanWei }
  get xuanZeRiQiFanWei(): object[] { return require('assets/config/element-ui/date-picker.config.json').code.xuanZeRiQiFanWei }
  get xuanZeYueFenFanWei(): object[] { return require('assets/config/element-ui/date-picker.config.json').code.xuanZeYueFenFanWei }
  get riQiGeShi(): object[] { return require('assets/config/element-ui/date-picker.config.json').code.riQiGeShi }
  get moRenXianShiRiQi(): object[] { return require('assets/config/element-ui/date-picker.config.json').code.moRenXianShiRiQi }
  get attributes(): object[] { return require('assets/config/element-ui/date-picker.config.json').attributes }
  get pickerOptions(): object[] { return require('assets/config/element-ui/date-picker.config.json').pickerOptions }
  get events(): object[] { return require('assets/config/element-ui/date-picker.config.json').events }
  get methods(): object[] { return require('assets/config/element-ui/date-picker.config.json').methods }
}
</script>