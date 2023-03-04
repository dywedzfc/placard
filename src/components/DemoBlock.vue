<template>
  <div
    class="demo-block"
    :class="[blockClass, { hover: hovering }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div class="meta" :style="{ 'max-height': maxHeight }" ref="meta">
      <div class="description code-panel" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="highlight code-panel" ref="code-panel">
        <pre><code><slot name="highlight"></slot></code></pre>
      </div>
    </div>
    <transition name="control">
      <div
        class="demo-block-control is-fixed"
        v-if="fixedControl"
        @click="isExpanded = !isExpanded"
        ref="control-hidden"
      >
        <i :class="[iconClass, { hovering: hovering }]"></i>
        <transition name="text-slide">
          <span v-show="hovering">{{ controlText }}</span>
        </transition>
      </div>
    </transition>
    <div class="demo-block-control" @click="isExpanded = !isExpanded" ref="control">
      <i :class="[iconClass, { hovering: hovering }]"></i>
      <transition name="text-slide">
        <span v-show="hovering">{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

interface CodePan {
  script: string
  html: string
  style: string
}

@Component
export default class DemoBlock extends Vue {
  codePan: CodePan = { script: '', html: '', style: '' }
  maxHeight: string | number = 0
  hovering: boolean = false
  isExpanded: boolean = false
  fixedControl: boolean = false

  @Prop({ type: String }) private msg!: string

  get blockClass() {
    // return `demo-${this.lang}`
    return ``
  }
  get iconClass() {
    return this.isExpanded ? 'el-icon-caret-top' : 'el-icon-caret-bottom'
  }
  get controlText() {
    return this.isExpanded ? '隐藏代码' : '显示代码'
  }

  @Watch('isExpanded')
  watchIsExpanded(value: boolean) {
    const panel = this.$refs['code-panel']
    if (value) {
      this.maxHeight = `${(panel as any).offsetHeight}px`
      setTimeout(() => {
        const metaFlag = this.isInViewPortOfMeta()
        this.fixedControl = metaFlag && !this.isInViewPortOfControl()
      }, 500)
    } else {
      this.maxHeight = 0
      this.fixedControl = false
    }
  }
  mounted(): void {
    this.$nextTick(() => {
      document.addEventListener('scroll', () => {
        if (this.isExpanded) {
          const metaFlag = this.isInViewPortOfMeta()
          this.fixedControl = metaFlag && !this.isInViewPortOfControl()
        }
      })
    })
  }

  isInViewPortOfControl() {
    return this.elementOffsetTop(this.$refs.control) + 88 <= this.viewPortHeight()
  }
  isInViewPortOfMeta() {
    return this.elementOffsetTop(this.$refs.meta) + 88 <= this.viewPortHeight()
  }
  viewPortHeight() /* viewPortHeight 兼容所有浏览器写法 */ {
    const { documentElement, body } = document
    return window.innerHeight || documentElement.clientHeight || body.clientHeight
  }
  elementOffsetTop(el: any) {
    const offsetTop = el.offsetTop
    const scrollTop = document.documentElement.scrollTop
    return offsetTop - scrollTop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.demo-block {
  margin-bottom: 20px;
  border: 1px solid #ededed;
  border-radius: 10px;
  transform: 0.2s;

  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 255, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }

  code {
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
  }

  .source {
    padding: 24px;
  }

  .meta {
    overflow: hidden;
    transition: max-height 0.5s;

    // height: 0;
    border-top: solid 1px #eaeefb;
    background-color: #fafafa;

    .description,
    .highlight {
      code {
        line-height: 25px;
      }
    }
  }

  &-control {
    position: relative;
    height: 44px;
    margin-top: -1px;
    box-sizing: border-box;
    border-top: 1px solid #eaeefb;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    text-align: center;
    color: #d3dce6;
    background-color: #fff;
    cursor: pointer;

    &.is-fixed {
      position: fixed;
      bottom: 0;
      width: 838px;
    }
    &:hover {
      color: #409eff;
      background-color: #f9fafc;
    }

    i {
      position: absolute;
      font-size: 16px;
      line-height: 44px;
      transition: 0.3s;

      &.hovering {
        transform: translateX(-40px);
        // margin-left: -25px;
        // margin-right: 25px;
      }
    }

    > span {
      position: absolute;
      transform: translateX(-15px);
      font-size: 14px;
      line-height: 44px;
      transition: 0.3s;
      display: inline-block;
    }

    .arrow-slide {
      &-enter,
      &-leave-active {
        transform: translateX(10px);
      }
    }
    .text-slide {
      &-enter,
      &-leave-active {
        opacity: 0;
        transform: translateX(10px);
      }
    }
  }
}

.control {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
    max-height: 0;
  }
}
</style>
