import { RouteConfig } from 'vue-router'

const TUIComponents: RouteConfig[] = [
  {
    path: '/t-ui/installation',
    name: '安装',
    component: () => import('views/t-ui/guide/Installation.vue'),
  },
  {
    path: '/t-ui/layout',
    name: '边界布局',
    component: () => import('views/t-ui/basic/LayoutView.vue'),
  },
  {
    path: '/t-ui/container',
    name: '布局容器',
    component: () => import('views/t-ui/basic/ContainerView.vue'),
  },
  {
    path: '/t-ui/gridLayout',
    name: '网格布局',
    component: () => import('views/t-ui/basic/GridLayoutView.vue'),
  },
  {
    path: '/t-ui/queryBar',
    name: '查询框',
    component: () => import('views/t-ui/pane/QueryBarView.vue'),
  },
  {
    path: '/t-ui/queryPanel',
    name: '查询面板',
    component: () => import('views/t-ui/pane/QueryPanelView.vue'),
  },
  {
    path: '/t-ui/dragPicture',
    name: '图片拖拽控件',
    component: () => import('views/t-ui/pane/DragPictureView.vue'),
  },
  {
    path: '/t-ui/tablePage',
    name: '分页表格',
    component: () => import('views/t-ui/data/TablePageView.vue'),
  },
  {
    path: '/t-ui/dialog',
    name: '对话框',
    component: () => import('views/t-ui/others/DialogView.vue'),
  },
]

export default TUIComponents
