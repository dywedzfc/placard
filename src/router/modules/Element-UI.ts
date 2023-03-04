import { RouteConfig } from 'vue-router'

const ElementUIComponents: RouteConfig[] = [
  {
    path: '/element-ui/installation',
    name: 'E安装',
    component: () => import('views/element-ui/guide/Installation.vue'),
  },
  {
    path: '/element-ui/getStartedQuickly',
    name: 'E快速上手',
    component: () => import('views/element-ui/guide/GetStartedQuickly.vue'),
  },
  {
    path: '/element-ui/internationalization',
    name: 'E国际化',
    component: () => import('views/element-ui/guide/Internationalization.vue'),
  },
  {
    path: '/element-ui/customTheme',
    name: 'E自定义主题',
    component: () => import('views/element-ui/guide/CustomTheme.vue'),
  },
  {
    path: '/element-ui/builtInTransitionAnimation',
    name: 'E内置过渡动画',
    component: () =>
      import('views/element-ui/guide/BuiltInTransitionAnimation.vue'),
  },
  {
    path: '/element-ui/layout',
    name: 'ELayout布局',
    component: () => import('views/element-ui/basic/LayoutView.vue'),
  },
  {
    path: '/element-ui/container',
    name: 'EContainer布局容器',
    component: () => import('views/element-ui/basic/ContainerView.vue'),
  },

  {
    path: '/element-ui/color',
    name: 'EColor色彩',
    component: () => import('views/element-ui/basic/ColorView.vue'),
  },
  {
    path: '/element-ui/typography',
    name: 'ETypography字体',
    component: () => import('views/element-ui/basic/TypographyView.vue'),
  },
  {
    path: '/element-ui/border',
    name: 'EBorder边框',
    component: () => import('views/element-ui/basic/BorderView.vue'),
  },
  {
    path: '/element-ui/icon',
    name: 'EIcon图标',
    component: () => import('views/element-ui/basic/IconView.vue'),
  },
  {
    path: '/element-ui/button',
    name: 'EButton按钮',
    component: () => import('views/element-ui/basic/ButtonView.vue'),
  },
  {
    path: '/element-ui/link',
    name: 'ELink文字链接',
    component: () => import('views/element-ui/basic/LinkView.vue'),
  },
  {
    path: '/element-ui/radio',
    name: 'ERadio单选框',
    component: () => import('views/element-ui/form/RadioView.vue'),
  },
  {
    path: '/element-ui/checkbox',
    name: 'ECheckbox多选框',
    component: () => import('views/element-ui/form/CheckboxView.vue'),
  },
  {
    path: '/element-ui/input',
    name: 'EInput输入框',
    component: () => import('views/element-ui/form/InputView.vue'),
  },
  {
    path: '/element-ui/input-number',
    name: 'EInputNumber计数器',
    component: () => import('views/element-ui/form/InputNumberView.vue'),
  },
  {
    path: '/element-ui/select',
    name: 'ESelect选择器',
    component: () => import('views/element-ui/form/SelectView.vue'),
  },
  {
    path: '/element-ui/cascader',
    name: 'ECascader级联选择器',
    component: () => import('views/element-ui/form/CascaderView.vue'),
  },
  {
    path: '/element-ui/switch',
    name: 'ESwitch开关',
    component: () => import('views/element-ui/form/SwitchView.vue'),
  },
  {
    path: '/element-ui/slider',
    name: 'ESlider滑块',
    component: () => import('views/element-ui/form/SliderView.vue'),
  },
  {
    path: '/element-ui/time-picker',
    name: 'ETimePicker时间选择器',
    component: () => import('views/element-ui/form/TimePickerView.vue'),
  },
  {
    path: '/element-ui/date-picker',
    name: 'EDatePicker日期选择器',
    component: () => import('views/element-ui/form/DatePickerView.vue'),
  },
  {
    path: '/element-ui/date-time-picker',
    name: 'EDateTimePicker日期时间选择器',
    component: () => import('views/element-ui/form/DateTimePickerView.vue'),
  },
  {
    path: '/element-ui/upload',
    name: 'EUpload上传',
    component: () => import('views/element-ui/form/UploadView.vue'),
  },
  {
    path: '/element-ui/rate',
    name: 'ERate评分',
    component: () => import('views/element-ui/form/RateView.vue'),
  },
  {
    path: '/element-ui/color-picker',
    name: 'EColorPicker颜色选择器',
    component: () => import('views/element-ui/form/ColorPickerView.vue'),
  },
  {
    path: '/element-ui/transfer',
    name: 'ETransfer穿梭框',
    component: () => import('views/element-ui/form/TransferView.vue'),
  },
  {
    path: '/element-ui/form',
    name: 'EForm表单',
    component: () => import('views/element-ui/form/FormView.vue'),
  },
  {
    path: '/element-ui/table',
    name: 'ETable表格',
    component: () => import('views/element-ui/data/TableView.vue'),
  },
  {
    path: '/element-ui/tag',
    name: 'ETag标签',
    component: () => import('views/element-ui/data/TagView.vue'),
  },
  {
    path: '/element-ui/progress',
    name: 'EProgress进度条',
    component: () => import('views/element-ui/data/ProgressView.vue'),
  },
  {
    path: '/element-ui/tree',
    name: 'ETree树形控件',
    component: () => import('views/element-ui/data/TreeView.vue'),
  },
  {
    path: '/element-ui/pagination',
    name: 'EPagination分页',
    component: () => import('views/element-ui/data/PaginationView.vue'),
  },
  {
    path: '/element-ui/badge',
    name: 'EBadge标记',
    component: () => import('views/element-ui/data/BadgeView.vue'),
  },
  {
    path: '/element-ui/avatar',
    name: 'EAvatar头像',
    component: () => import('views/element-ui/data/AvatarView.vue'),
  },
  {
    path: '/element-ui/skeleton',
    name: 'ESkeleton骨架屏',
    component: () => import('views/element-ui/data/SkeletonView.vue'),
  },
  {
    path: '/element-ui/empty',
    name: 'EEmpty空状态',
    component: () => import('views/element-ui/data/EmptyView.vue'),
  },
  {
    path: '/element-ui/descriptions',
    name: 'EDescriptions描述列表',
    component: () => import('views/element-ui/data/DescriptionsView.vue'),
  },
  {
    path: '/element-ui/result',
    name: 'EResult结果',
    component: () => import('views/element-ui/data/ResultView.vue'),
  },
  {
    path: '/element-ui/statistic',
    name: 'EStatistic统计数值',
    component: () => import('views/element-ui/data/StatisticView.vue'),
  },
  {
    path: '/element-ui/alert',
    name: 'EAlert警告',
    component: () => import('views/element-ui/notice/AlertView.vue'),
  },
  {
    path: '/element-ui/loading',
    name: 'ELoading加载',
    component: () => import('views/element-ui/notice/LoadingView.vue'),
  },
  {
    path: '/element-ui/message',
    name: 'EMessage消息提示',
    component: () => import('views/element-ui/notice/MessageView.vue'),
  },
  {
    path: '/element-ui/message-box',
    name: 'EMessageBox弹框',
    component: () => import('views/element-ui/notice/MessageBoxView.vue'),
  },
  {
    path: '/element-ui/notification',
    name: 'ENotification通知',
    component: () => import('views/element-ui/notice/NotificationView.vue'),
  },
  {
    path: '/element-ui/nav-menu',
    name: 'ENavMenu导航菜单',
    component: () => import('views/element-ui/navigation/NavMenuView.vue'),
  },
  {
    path: '/element-ui/tabs',
    name: 'ETabs标签页',
    component: () => import('views/element-ui/navigation/TabsView.vue'),
  },
  {
    path: '/element-ui/breadcrumb',
    name: 'EBreadcrumb面包屑',
    component: () => import('views/element-ui/navigation/BreadcrumbView.vue'),
  },
  {
    path: '/element-ui/page-header',
    name: 'EPageHeader页头',
    component: () => import('views/element-ui/navigation/PageHeaderView.vue'),
  },
  {
    path: '/element-ui/dropdown',
    name: 'EDropdown下拉菜单',
    component: () => import('views/element-ui/navigation/DropdownView.vue'),
  },
  {
    path: '/element-ui/steps',
    name: 'ESteps步骤条',
    component: () => import('views/element-ui/navigation/StepsView.vue'),
  },
  {
    path: '/element-ui/dialog',
    name: 'EDialog对话框',
    component: () => import('views/element-ui/others/DialogView.vue'),
  },
  {
    path: '/element-ui/tooltip',
    name: 'ETooltip文字提示',
    component: () => import('views/element-ui/others/TooltipView.vue'),
  },
  {
    path: '/element-ui/popover',
    name: 'EPopover弹出框',
    component: () => import('views/element-ui/others/PopoverView.vue'),
  },
  {
    path: '/element-ui/popconfirm',
    name: 'EPopconfirm气泡确认框',
    component: () => import('views/element-ui/others/PopconfirmView.vue'),
  },
  {
    path: '/element-ui/card',
    name: 'ECard卡片',
    component: () => import('views/element-ui/others/CardView.vue'),
  },
  {
    path: '/element-ui/carousel',
    name: 'ECarousel走马灯',
    component: () => import('views/element-ui/others/CarouselView.vue'),
  },
  {
    path: '/element-ui/collapse',
    name: 'ECollapse折叠面板',
    component: () => import('views/element-ui/others/CollapseView.vue'),
  },
  {
    path: '/element-ui/timeline',
    name: 'ETimeline时间线',
    component: () => import('views/element-ui/others/TimelineView.vue'),
  },
  {
    path: '/element-ui/divider',
    name: 'EDivider分割线',
    component: () => import('views/element-ui/others/DividerView.vue'),
  },
  {
    path: '/element-ui/calendar',
    name: 'ECalendar日历',
    component: () => import('views/element-ui/others/CalendarView.vue'),
  },
  {
    path: '/element-ui/image',
    name: 'EImage图片',
    component: () => import('views/element-ui/others/ImageView.vue'),
  },
  {
    path: '/element-ui/backtop',
    name: 'EBacktop回到顶部',
    component: () => import('views/element-ui/others/BacktopView.vue'),
  },
  {
    path: '/element-ui/infinite-scroll',
    name: 'EInfiniteScroll无限滚动',
    component: () => import('views/element-ui/others/InfiniteScrollView.vue'),
  },
  {
    path: '/element-ui/drawer',
    name: 'EDrawer抽屉',
    component: () => import('views/element-ui/others/DrawerView.vue'),
  },
]

export default ElementUIComponents
