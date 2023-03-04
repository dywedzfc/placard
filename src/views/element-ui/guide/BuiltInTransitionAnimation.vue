<template>
  <div class="page-container">
    <h2 id="header">内置过渡动画</h2>
    <p>
      Element 内应用在部分组件的过渡动画，你也可以直接使用。在使用之前请阅读
      <a href="https://cn.vuejs.org/v2/api/#transition" target="_blank">transition 组件文档</a> 。
    </p>

    <page-navigation target="header">
      <page-navigation-item target="fade-淡入淡出">fade 淡入淡出</page-navigation-item>
      <page-navigation-item target="zoom-缩放">zoom 缩放</page-navigation-item>
      <page-navigation-item target="collapse-展开折叠">collapse 展开折叠</page-navigation-item>
      <page-navigation-item target="按需引入">按需引入</page-navigation-item>
    </page-navigation>

    <h3 id="fade-淡入淡出">fade 淡入淡出</h3>
    <demo-block>
      <template v-slot:source>
        <fade-animation />
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in fadeAnimationCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="zoom-缩放">zoom 缩放</h3>
    <demo-block>
      <template v-slot:source>
        <zoom-animation />
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in zoomAnimationCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="collapse-展开折叠">collapse 展开折叠</h3>
    <p>使用 <code>el-collapse-transition</code> 组件实现折叠展开效果。</p>
    <demo-block>
      <template v-slot:source>
        <collapse-animation />
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in collapseAnimationCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="按需引入">按需引入</h3>
    <pre>
      <code class="code-bar">// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import Vue from 'vue'

Vue.component(CollapseTransition.name, CollapseTransition)</code>
    </pre>
    <br />
    <br />
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CodeLine from 'components/CodeLine.vue'
import DemoBlock from 'components/DemoBlock.vue'
import PageNavigation from 'components/PageNavigation.vue'
import PageNavigationItem from 'components/PageNavigationItem.vue'
import FadeAnimation from './components/animation/FadeAnimation.vue'
import ZoomAnimation from './components/animation/ZoomAnimation.vue'
import CollapseAnimation from './components/animation/CollapseAnimation.vue'

@Component({
  components: Object.assign(
    { CodeLine, DemoBlock, PageNavigation, PageNavigationItem },
    { FadeAnimation, ZoomAnimation, CollapseAnimation }
  ),
})
export default class BuiltInTransitionAnimation extends Vue {
  get fadeAnimationCode(): object[] {
    return require('assets/config/element-ui/transition-animation.config').code.fadeAnimationCode
  }
  get zoomAnimationCode(): object[] {
    return require('assets/config/element-ui/transition-animation.config').code.zoomAnimationCode
  }
  get collapseAnimationCode(): object[] {
    return require('assets/config/element-ui/transition-animation.config').code.collapseAnimationCode
  }

  handleGetStartedQuicklyClick(): void {
    this.$router.push('/element-ui/getStartedQuickly')
  }
}
</script>
