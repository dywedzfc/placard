<template>
  <div class="page-container">
    <h2 id="header">Message 消息提示</h2>
    <p>常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>从顶部出现，3 秒后自动消失。</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="bu-tong-zhuang-tai">不同状态</h3>
    <p>用来显示「成功、警告、消息、错误」类的操作反馈。</p>
    <demo-block>
      <template v-slot:source>
        <BuTongZhuangTai />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in buTongZhuangTai" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ke-guan-bi">可关闭</h3>
    <p>可以添加关闭按钮。</p>
    <demo-block>
      <template v-slot:source>
        <KeGuanBi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in keGuanBi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="wen-zi-ju-zhong">文字居中</h3>
    <p>使用 <code>center</code> 属性让文字水平居中。</p>
    <demo-block>
      <template v-slot:source>
        <WenZiJuZhong />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in wenZiJuZhong" :key="index" :type="item.type" :code="item.data" /></template>
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
    <h3 id="quan-ju-fang-fa">全局方法</h3>
    <p>Element 为 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用 <code>Message</code>。</p>
    <h3 id="dan-du-yin-yong">单独引用</h3>
    <p>单独引入 <code>Message</code>：</p>
    <pre><code class="language-javascript hljs"><span class="hljs-keyword">import</span> { Message } <span class="hljs-keyword">from</span> <span class="hljs-string">'element-ui'</span>;
</code></pre>
    <p>此时调用方法为 <code>Message(options)</code>。我们也为每个 type 定义了各自的方法，如 <code>Message.success(options)</code>。并且可以调用 <code>Message.closeAll()</code> 手动关闭所有实例。</p>
    <h3 id="options">Options</h3>
    <table-props :data="options" />
    <h3 id="methods">Methods</h3>
    <p>调用 <code>Message</code> 或 <code>this.$message</code> 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 <code>close</code> 方法。</p>
    <table-methods :data="methods" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="bu-tong-zhuang-tai">不同状态</page-navigation-item>
      <page-navigation-item target="ke-guan-bi">可关闭</page-navigation-item>
      <page-navigation-item target="wen-zi-ju-zhong">文字居中</page-navigation-item>
      <page-navigation-item target="shi-yong-html-pian-duan">使用 HTML 片段</page-navigation-item>
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
import JiChuYongFa from './components/message/JiChuYongFa.vue'
import BuTongZhuangTai from './components/message/BuTongZhuangTai.vue'
import KeGuanBi from './components/message/KeGuanBi.vue'
import WenZiJuZhong from './components/message/WenZiJuZhong.vue'
import ShiYongHtmlPianDuan from './components/message/ShiYongHtmlPianDuan.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, BuTongZhuangTai, KeGuanBi, WenZiJuZhong, ShiYongHtmlPianDuan }})
export default class MessageView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/message.config.json').code.jiChuYongFa }
  get buTongZhuangTai(): object[] { return require('assets/config/element-ui/message.config.json').code.buTongZhuangTai }
  get keGuanBi(): object[] { return require('assets/config/element-ui/message.config.json').code.keGuanBi }
  get wenZiJuZhong(): object[] { return require('assets/config/element-ui/message.config.json').code.wenZiJuZhong }
  get shiYongHtmlPianDuan(): object[] { return require('assets/config/element-ui/message.config.json').code.shiYongHtmlPianDuan }
  get options(): object[] { return require('assets/config/element-ui/message.config.json').options }
  get methods(): object[] { return require('assets/config/element-ui/message.config.json').methods }
}
</script>