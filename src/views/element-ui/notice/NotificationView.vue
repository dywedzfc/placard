<template>
  <div class="page-container">
    <h2 id="header">Notification 通知</h2>
    <p>悬浮出现在页面角落，显示全局的通知提醒消息。</p>
    <h3 id="ji-ben-yong-fa">基本用法</h3>
    <p>适用性广泛的通知栏</p>
    <demo-block>
      <template v-slot:source>
        <JiBenYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiBenYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dai-you-qing-xiang-xing">带有倾向性</h3>
    <p>带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息</p>
    <demo-block>
      <template v-slot:source>
        <DaiYouQingXiangXing />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in daiYouQingXiangXing" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi-dan-chu-wei-zhi">自定义弹出位置</h3>
    <p>可以让 Notification 从屏幕四角中的任意一角弹出</p>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiDanChuWeiZhi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiDanChuWeiZhi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dai-you-pian-yi">带有偏移</h3>
    <p>让 Notification 偏移一些位置</p>
    <demo-block>
      <template v-slot:source>
        <DaiYouPianYi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in daiYouPianYi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="shi-yong-html-pian-duan">使用 HTML 片段</h3>
    <p><code>message</code> 属性支持传入 HTML 片段</p>
    <demo-block>
      <template v-slot:source>
        <ShiYongHtmlPianDuan />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in shiYongHtmlPianDuan" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <div class="warning" style=""><p><code>message</code> 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 <a target="_blank" href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS 攻击</a>。因此在 <code>dangerouslyUseHTMLString</code> 打开的情况下，请确保 <code>message</code> 的内容是可信的，<strong>永远不要</strong>将用户提交的内容赋值给 <code>message</code> 属性。</p></div>
    <h3 id="yin-cang-guan-bi-an-niu">隐藏关闭按钮</h3>
    <p>可以不显示关闭按钮</p>
    <demo-block>
      <template v-slot:source>
        <YinCangGuanBiAnNiu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in yinCangGuanBiAnNiu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="quan-ju-fang-fa">全局方法</h3>
    <p>Element 为 <code>Vue.prototype</code> 添加了全局方法 <code>$notify</code>。因此在 vue instance 中可以采用本页面中的方式调用 Notification。</p>
    <h3 id="dan-du-yin-yong">单独引用</h3>
    <p>单独引入 Notification：</p>
    <pre><code class="language-javascript hljs"><span class="hljs-keyword">import</span> { Notification } <span class="hljs-keyword">from</span> <span class="hljs-string">'element-ui'</span>;
</code></pre>
    <p>此时调用方法为 <code>Notification(options)</code>。我们也为每个 type 定义了各自的方法，如 <code>Notification.success(options)</code>。并且可以调用 <code>Notification.closeAll()</code> 手动关闭所有实例。</p>
    <h3 id="options">Options</h3>
    <table-props :data="options" />
    <h3 id="methods">Methods</h3>
    <p>调用 <code>Notification</code> 或 <code>this.$notify</code> 会返回当前 Notification 的实例。如果需要手动关闭实例，可以调用它的 <code>close</code> 方法。</p>
    <table-methods :data="methods" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-ben-yong-fa">基本用法</page-navigation-item>
      <page-navigation-item target="dai-you-qing-xiang-xing">带有倾向性</page-navigation-item>
      <page-navigation-item target="zi-ding-yi-dan-chu-wei-zhi">自定义弹出位置</page-navigation-item>
      <page-navigation-item target="dai-you-pian-yi">带有偏移</page-navigation-item>
      <page-navigation-item target="shi-yong-html-pian-duan">使用 HTML 片段</page-navigation-item>
      <page-navigation-item target="yin-cang-guan-bi-an-niu">隐藏关闭按钮</page-navigation-item>
      <page-navigation-item target="quan-ju-fang-fa">全局方法</page-navigation-item>
      <page-navigation-item target="dan-du-yin-yong">单独引用</page-navigation-item>
      <page-navigation-item target="options">Options</page-navigation-item>
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
import JiBenYongFa from './components/notification/JiBenYongFa.vue'
import DaiYouQingXiangXing from './components/notification/DaiYouQingXiangXing.vue'
import ZiDingYiDanChuWeiZhi from './components/notification/ZiDingYiDanChuWeiZhi.vue'
import DaiYouPianYi from './components/notification/DaiYouPianYi.vue'
import ShiYongHtmlPianDuan from './components/notification/ShiYongHtmlPianDuan.vue'
import YinCangGuanBiAnNiu from './components/notification/YinCangGuanBiAnNiu.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiBenYongFa, DaiYouQingXiangXing, ZiDingYiDanChuWeiZhi, DaiYouPianYi, ShiYongHtmlPianDuan, YinCangGuanBiAnNiu }})
export default class NotificationView extends Vue {
  get jiBenYongFa(): object[] { return require('assets/config/element-ui/notification.config.json').code.jiBenYongFa }
  get daiYouQingXiangXing(): object[] { return require('assets/config/element-ui/notification.config.json').code.daiYouQingXiangXing }
  get ziDingYiDanChuWeiZhi(): object[] { return require('assets/config/element-ui/notification.config.json').code.ziDingYiDanChuWeiZhi }
  get daiYouPianYi(): object[] { return require('assets/config/element-ui/notification.config.json').code.daiYouPianYi }
  get shiYongHtmlPianDuan(): object[] { return require('assets/config/element-ui/notification.config.json').code.shiYongHtmlPianDuan }
  get yinCangGuanBiAnNiu(): object[] { return require('assets/config/element-ui/notification.config.json').code.yinCangGuanBiAnNiu }
  get options(): object[] { return require('assets/config/element-ui/notification.config.json').options }
  get methods(): object[] { return require('assets/config/element-ui/notification.config.json').methods }
}
</script>