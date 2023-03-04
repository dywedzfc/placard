<template>
  <div class="page-container">
    <h2 id="header">Loading 加载</h2>
    <p>加载数据时显示动效。</p>
    <h3 id="qu-yu-jia-zai">区域加载</h3>
    <p>在表格等容器中加载数据时显示。</p>
    <demo-block>
      <template v-slot:source>
        <QuYuJiaZai />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in quYuJiaZai" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi">自定义</h3>
    <p>可自定义加载文案、图标和背景色。</p>
    <demo-block>
      <template v-slot:source>
        <ZiDingYi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zheng-ye-jia-zai">整页加载</h3>
    <p>页面数据加载时显示。</p>
    <demo-block>
      <template v-slot:source>
        <ZhengYeJiaZai />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in zhengYeJiaZai" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="fu-wu">服务</h3>
    <p>Loading 还可以以服务的方式调用。引入 Loading 服务：</p>
    <pre><code class="language-javascript hljs"><span class="hljs-keyword">import</span> { Loading } <span class="hljs-keyword">from</span> <span class="hljs-string">'element-ui'</span>;
</code></pre>
    <p>在需要调用时：</p>
    <pre><code class="language-javascript hljs">Loading.service(options);
</code></pre>
    <p>其中 <code>options</code> 参数为 Loading 的配置项，具体见下表。<code>LoadingService</code> 会返回一个 Loading 实例，可通过调用该实例的 <code>close</code> 方法来关闭它：</p>
    <pre><code class="language-javascript hljs"><span class="hljs-keyword">let</span> loadingInstance = Loading.service(options);
<span class="hljs-keyword">this</span>.$nextTick(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> { <span class="hljs-comment">// 以服务的方式调用的 Loading 需要异步关闭</span>
  loadingInstance.close();
});
</code></pre>
    <p>需要注意的是，以服务的方式调用的全屏 Loading 是单例的：若在前一个全屏 Loading 关闭前再次调用全屏 Loading，并不会创建一个新的 Loading 实例，而是返回现有全屏 Loading 的实例：</p>
    <pre><code class="language-javascript hljs"><span class="hljs-keyword">let</span> loadingInstance1 = Loading.service({ <span class="hljs-attr">fullscreen</span>: <span class="hljs-literal">true</span> });
<span class="hljs-keyword">let</span> loadingInstance2 = Loading.service({ <span class="hljs-attr">fullscreen</span>: <span class="hljs-literal">true</span> });
<span class="hljs-built_in">console</span>.log(loadingInstance1 === loadingInstance2); <span class="hljs-comment">// true</span>
</code></pre>
    <p>此时调用它们中任意一个的 <code>close</code> 方法都能关闭这个全屏 Loading。</p>
    <p>如果完整引入了 Element，那么 Vue.prototype 上会有一个全局方法 <code>$loading</code>，它的调用方式为：<code>this.$loading(options)</code>，同样会返回一个 Loading 实例。</p>
    <h3 id="options">Options</h3>
    <table-props :data="options" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="qu-yu-jia-zai">区域加载</page-navigation-item>
      <page-navigation-item target="zi-ding-yi">自定义</page-navigation-item>
      <page-navigation-item target="zheng-ye-jia-zai">整页加载</page-navigation-item>
      <page-navigation-item target="fu-wu">服务</page-navigation-item>
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
import QuYuJiaZai from './components/loading/QuYuJiaZai.vue'
import ZiDingYi from './components/loading/ZiDingYi.vue'
import ZhengYeJiaZai from './components/loading/ZhengYeJiaZai.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, QuYuJiaZai, ZiDingYi, ZhengYeJiaZai }})
export default class LoadingView extends Vue {
  get quYuJiaZai(): object[] { return require('assets/config/element-ui/loading.config.json').code.quYuJiaZai }
  get ziDingYi(): object[] { return require('assets/config/element-ui/loading.config.json').code.ziDingYi }
  get zhengYeJiaZai(): object[] { return require('assets/config/element-ui/loading.config.json').code.zhengYeJiaZai }
  get options(): object[] { return require('assets/config/element-ui/loading.config.json').options }
}
</script>