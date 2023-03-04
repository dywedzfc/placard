<template>
  <div class="page-container">
    <h2 id="header">Steps 步骤条</h2>
    <p>引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>简单的步骤条。</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="han-zhuang-tai-bu-zou-tiao">含状态步骤条</h3>
    <p>每一步骤显示出该步骤的状态。</p>
    <demo-block>
      <template v-slot:source>
        <HanZhuangTaiBuZouTiao />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in hanZhuangTaiBuZouTiao" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="you-miao-shu-de-bu-zou-tiao">有描述的步骤条</h3>
    <p>每个步骤有其对应的步骤状态描述。</p>
    <demo-block>
      <template v-slot:source>
        <YouMiaoShuDeBuZouTiao />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in youMiaoShuDeBuZouTiao" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ju-zhong-de-bu-zou-tiao">居中的步骤条</h3>
    <p>标题和描述都将居中。</p>
    <demo-block>
      <template v-slot:source>
        <JuZhongDeBuZouTiao />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in juZhongDeBuZouTiao" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dai-tu-biao-de-bu-zou-tiao">带图标的步骤条</h3>
    <p>步骤条内可以启用各种自定义的图标。</p>
    <demo-block>
      <template v-slot:source>
        <DaiTuBiaoDeBuZouTiao />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in daiTuBiaoDeBuZouTiao" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="shu-shi-bu-zou-tiao">竖式步骤条</h3>
    <p>竖直方向的步骤条。</p>
    <demo-block>
      <template v-slot:source>
        <ShuShiBuZouTiao />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in shuShiBuZouTiao" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="jian-ji-feng-ge-de-bu-zou-tiao">简洁风格的步骤条</h3>
    <p>设置 <code>simple</code> 可应用简洁风格，该条件下 <code>align-center</code> / <code>description</code> / <code>direction</code> / <code>space</code> 都将失效。</p>
    <demo-block>
      <template v-slot:source>
        <JianJiFengGeDeBuZouTiao />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jianJiFengGeDeBuZouTiao" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="steps-attributes">Steps Attributes</h3>
    <table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>space</td><td>每个 step 的间距，不填写将自适应间距。支持百分比。</td><td>number / string</td><td>—</td><td>—</td></tr><tr><td>direction</td><td>显示方向</td><td>string</td><td>vertical/horizontal</td><td>horizontal</td></tr><tr><td>active</td><td>设置当前激活步骤</td><td>number</td><td>—</td><td>0</td></tr><tr><td>process-status</td><td>设置当前步骤的状态</td><td>string</td><td>wait / process / finish / error / success</td><td>process</td></tr><tr><td>finish-status</td><td>设置结束步骤的状态</td><td>string</td><td>wait / process / finish / error / success</td><td>finish</td></tr><tr><td>align-center</td><td>进行居中对齐</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>simple</td><td>是否应用简洁风格</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table>
    <h3 id="step-attributes">Step Attributes</h3>
    <table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>description</td><td>描述性文字</td><td>string</td><td>—</td><td>—</td></tr><tr><td>icon</td><td>图标</td><td>传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入</td><td>string</td><td>—</td></tr><tr><td>status</td><td>设置当前步骤的状态，不设置则根据 steps 确定状态</td><td>wait / process / finish / error / success</td><td>-</td><td></td></tr></tbody></table>
    <h3 id="step-slot">Step Slot</h3>
    <table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>icon</td><td>自定义图标</td></tr><tr><td>title</td><td>自定义标题</td></tr><tr><td>description</td><td>自定义描述性文字</td></tr></tbody></table>
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="han-zhuang-tai-bu-zou-tiao">含状态步骤条</page-navigation-item>
      <page-navigation-item target="you-miao-shu-de-bu-zou-tiao">有描述的步骤条</page-navigation-item>
      <page-navigation-item target="ju-zhong-de-bu-zou-tiao">居中的步骤条</page-navigation-item>
      <page-navigation-item target="dai-tu-biao-de-bu-zou-tiao">带图标的步骤条</page-navigation-item>
      <page-navigation-item target="shu-shi-bu-zou-tiao">竖式步骤条</page-navigation-item>
      <page-navigation-item target="jian-ji-feng-ge-de-bu-zou-tiao">简洁风格的步骤条</page-navigation-item>
      <page-navigation-item target="steps-attributes">Steps Attributes</page-navigation-item>
      <page-navigation-item target="step-attributes">Step Attributes</page-navigation-item>
      <page-navigation-item target="step-slot">Step Slot</page-navigation-item>
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
import JiChuYongFa from './components/steps/JiChuYongFa.vue'
import HanZhuangTaiBuZouTiao from './components/steps/HanZhuangTaiBuZouTiao.vue'
import YouMiaoShuDeBuZouTiao from './components/steps/YouMiaoShuDeBuZouTiao.vue'
import JuZhongDeBuZouTiao from './components/steps/JuZhongDeBuZouTiao.vue'
import DaiTuBiaoDeBuZouTiao from './components/steps/DaiTuBiaoDeBuZouTiao.vue'
import ShuShiBuZouTiao from './components/steps/ShuShiBuZouTiao.vue'
import JianJiFengGeDeBuZouTiao from './components/steps/JianJiFengGeDeBuZouTiao.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, HanZhuangTaiBuZouTiao, YouMiaoShuDeBuZouTiao, JuZhongDeBuZouTiao, DaiTuBiaoDeBuZouTiao, ShuShiBuZouTiao, JianJiFengGeDeBuZouTiao }})
export default class StepsView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/steps.config.json').code.jiChuYongFa }
  get hanZhuangTaiBuZouTiao(): object[] { return require('assets/config/element-ui/steps.config.json').code.hanZhuangTaiBuZouTiao }
  get youMiaoShuDeBuZouTiao(): object[] { return require('assets/config/element-ui/steps.config.json').code.youMiaoShuDeBuZouTiao }
  get juZhongDeBuZouTiao(): object[] { return require('assets/config/element-ui/steps.config.json').code.juZhongDeBuZouTiao }
  get daiTuBiaoDeBuZouTiao(): object[] { return require('assets/config/element-ui/steps.config.json').code.daiTuBiaoDeBuZouTiao }
  get shuShiBuZouTiao(): object[] { return require('assets/config/element-ui/steps.config.json').code.shuShiBuZouTiao }
  get jianJiFengGeDeBuZouTiao(): object[] { return require('assets/config/element-ui/steps.config.json').code.jianJiFengGeDeBuZouTiao }
}
</script>