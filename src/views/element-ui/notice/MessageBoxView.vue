<template>
  <div class="page-container">
    <h2 id="header">MessageBox 弹框</h2>
    <p>模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。</p>
    <div class="tip" style=""><p>从场景上说，MessageBox 的作用是美化系统自带的 <code>alert</code>、<code>confirm</code> 和 <code>prompt</code>，因此适合展示较为简单的内容。如果需要弹出较为复杂的内容，请使用 Dialog。</p></div>
    <h3 id="xiao-xi-ti-shi">消息提示</h3>
    <p>当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。</p>
    <demo-block>
      <template v-slot:source>
        <XiaoXiTiShi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in xiaoXiTiShi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="que-ren-xiao-xi">确认消息</h3>
    <p>提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。</p>
    <demo-block>
      <template v-slot:source>
        <QueRenXiaoXi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in queRenXiaoXi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ti-jiao-nei-rong">提交内容</h3>
    <p>当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。</p>
    <demo-block>
      <template v-slot:source>
        <TiJiaoNeiRong />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in tiJiaoNeiRong" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi">自定义</h3>
    <p>可自定义配置不同内容。</p>
    <demo-block>
      <template v-slot:source>
        <ZiDingYi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <div class="tip" style=""><p>弹出层的内容可以是 <code>VNode</code>，所以我们能把一些自定义组件传入其中。每次弹出层打开后，Vue 会对新老 <code>VNode</code> 节点进行比对，然后将根据比较结果进行最小单位地修改视图。这也许会造成弹出层内容区域的组件没有重新渲染，例如 <a target="_blank" href="https://github.com/ElemeFE/element/issues/8931">#8931</a>。当这类问题出现时，解决方案是给 <code>VNode</code> 加上一个不相同的 key，参考<a target="_blank" href="https://jsfiddle.net/zhiyang/ezmhq2ef/">这里</a>。</p></div>
    <h3 id="shi-yong-html-pian-duan">使用 HTML 片段</h3>
    <p><code>message</code> 属性支持传入 HTML 片段。</p>
    <demo-block>
      <template v-slot:source>
        <ShiYongHtmlPianDuan />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in shiYongHtmlPianDuan" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <div class="warning" style=""><p><code>message</code> 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 <a target="_blank" href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS 攻击</a>。因此在 <code>dangerouslyUseHTMLString</code> 打开的情况下，请确保 <code>message</code> 的内容是可信的，<strong>永远不要</strong>将用户提交的内容赋值给 <code>message</code> 属性。</p></div>
    <h3 id="qu-fen-qu-xiao-yu-guan-bi">区分取消与关闭</h3>
    <p>有些场景下，点击取消按钮与点击关闭按钮有着不同的含义。</p>
    <demo-block>
      <template v-slot:source>
        <QuFenQuXiaoYuGuanBi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in quFenQuXiaoYuGuanBi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="ju-zhong-bu-ju">居中布局</h3>
    <p>内容支持居中布局</p>
    <demo-block>
      <template v-slot:source>
        <JuZhongBuJu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in juZhongBuJu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="quan-ju-fang-fa">全局方法</h3>
    <p>如果你完整引入了 Element，它会为 Vue.prototype 添加如下全局方法：$msgbox, $alert, $confirm 和 $prompt。因此在 Vue instance 中可以采用本页面中的方式调用 <code>MessageBox</code>。调用参数为：</p>
    <ul><li><code>$msgbox(options)</code></li><li><code>$alert(message, title, options)</code> 或 <code>$alert(message, options)</code></li><li><code>$confirm(message, title, options)</code> 或 <code>$confirm(message, options)</code></li><li><code>$prompt(message, title, options)</code> 或 <code>$prompt(message, options)</code></li></ul>
    <h3 id="dan-du-yin-yong">单独引用</h3>
    <p>如果单独引入 <code>MessageBox</code>：</p>
    <pre><code class="language-javascript hljs"><span class="hljs-keyword">import</span> { MessageBox } <span class="hljs-keyword">from</span> <span class="hljs-string">'element-ui'</span>;
</code></pre>
    <p>那么对应于上述四个全局方法的调用方法依次为：MessageBox, MessageBox.alert, MessageBox.confirm 和 MessageBox.prompt，调用参数与全局方法相同。</p>
    <h3 id="options">Options</h3>
    <table-props :data="options" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="xiao-xi-ti-shi">消息提示</page-navigation-item>
      <page-navigation-item target="que-ren-xiao-xi">确认消息</page-navigation-item>
      <page-navigation-item target="ti-jiao-nei-rong">提交内容</page-navigation-item>
      <page-navigation-item target="zi-ding-yi">自定义</page-navigation-item>
      <page-navigation-item target="shi-yong-html-pian-duan">使用 HTML 片段</page-navigation-item>
      <page-navigation-item target="qu-fen-qu-xiao-yu-guan-bi">区分取消与关闭</page-navigation-item>
      <page-navigation-item target="ju-zhong-bu-ju">居中布局</page-navigation-item>
      <page-navigation-item target="quan-ju-fang-fa">全局方法</page-navigation-item>
      <page-navigation-item target="dan-du-yin-yong">单独引用</page-navigation-item>
      <page-navigation-item target="options">Options</page-navigation-item>
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
import XiaoXiTiShi from './components/message-box/XiaoXiTiShi.vue'
import QueRenXiaoXi from './components/message-box/QueRenXiaoXi.vue'
import TiJiaoNeiRong from './components/message-box/TiJiaoNeiRong.vue'
import ZiDingYi from './components/message-box/ZiDingYi.vue'
import ShiYongHtmlPianDuan from './components/message-box/ShiYongHtmlPianDuan.vue'
import QuFenQuXiaoYuGuanBi from './components/message-box/QuFenQuXiaoYuGuanBi.vue'
import JuZhongBuJu from './components/message-box/JuZhongBuJu.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, XiaoXiTiShi, QueRenXiaoXi, TiJiaoNeiRong, ZiDingYi, ShiYongHtmlPianDuan, QuFenQuXiaoYuGuanBi, JuZhongBuJu }})
export default class MessageBoxView extends Vue {
  get xiaoXiTiShi(): object[] { return require('assets/config/element-ui/message-box.config.json').code.xiaoXiTiShi }
  get queRenXiaoXi(): object[] { return require('assets/config/element-ui/message-box.config.json').code.queRenXiaoXi }
  get tiJiaoNeiRong(): object[] { return require('assets/config/element-ui/message-box.config.json').code.tiJiaoNeiRong }
  get ziDingYi(): object[] { return require('assets/config/element-ui/message-box.config.json').code.ziDingYi }
  get shiYongHtmlPianDuan(): object[] { return require('assets/config/element-ui/message-box.config.json').code.shiYongHtmlPianDuan }
  get quFenQuXiaoYuGuanBi(): object[] { return require('assets/config/element-ui/message-box.config.json').code.quFenQuXiaoYuGuanBi }
  get juZhongBuJu(): object[] { return require('assets/config/element-ui/message-box.config.json').code.juZhongBuJu }
  get options(): object[] { return require('assets/config/element-ui/message-box.config.json').options }
}
</script>