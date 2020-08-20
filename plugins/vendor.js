import Vue from 'vue'

import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)

import PageHeading from '~/components/App/PageHeading'
Vue.component('pageHeading', PageHeading)

import PageHeadline from '~/components/App/PageHeadline'
Vue.component('pageHeadline', PageHeadline)

import PageHeader from '~/components/App/PageHeader'
Vue.component('pageHeader', PageHeader)

import PageSeparator from '~/components/PageSeparator'
Vue.component('pageSeparator', PageSeparator)

import MdIcon from '~/components/MdIcon'
Vue.component('mdIcon', MdIcon)

import Card from '~/components/Card'
Vue.component('card', Card)

import Pager from '~/components/App/Pager'
Vue.component('pager', Pager)

import Hljs from '~/components/Hljs'
Vue.component('hljs', Hljs)

import {FmvAvatar} from 'fmv-avatar'
Vue.component('FmvAvatar', FmvAvatar)

import {
  FmvDrawer,
  FmvSidebar,
  FmvSidebarMenu,
  FmvDrawerLayout,
  FmvHeader,
  FmvHeaderLayout,
  FmvPerfectScrollbar,
  FmvToggle
} from 'fmv-layout'

import 'fmv-layout/dist/fmv-layout.css'

Vue.component('FmvDrawer', FmvDrawer)
Vue.component('FmvSidebar', FmvSidebar)
Vue.component('FmvSidebarMenu', FmvSidebarMenu)
Vue.component('FmvDrawerLayout', FmvDrawerLayout)
Vue.component('FmvHeader', FmvHeader)
Vue.component('FmvHeaderLayout', FmvHeaderLayout)
Vue.component('FmvPerfectScrollbar', FmvPerfectScrollbar)
Vue.directive('FmvToggle', FmvToggle)

import {BvFormImageGroup} from 'bv-form-image-group'
Vue.component('BvFormImageGroup', BvFormImageGroup)

import LineChart from '~/components/Charts/Line'
Vue.component('lineChart', LineChart)

import AreaChart from '~/components/Charts/Area'
Vue.component('areaChart', AreaChart)

import BarChart from '~/components/Charts/Bar'
Vue.component('barChart', BarChart)

import DoughnutChart from '~/components/Charts/Doughnut'
Vue.component('doughnutChart', DoughnutChart)

import RadarChart from '~/components/Charts/Radar'
Vue.component('radarChart', RadarChart)

import DocsPage from '~/components/App/DocsPage'
Vue.component('docsPage', DocsPage)

import DocsNextLink from '~/components/App/Docs/NextLink'
Vue.component('docsNextLink', DocsNextLink)

import FormCard from '~/components/App/Forms/Card'
Vue.component('formCard', FormCard)

import {FmvInputGroupMerge} from 'fmv-input-group-merge'
Vue.component('FmvInputGroupMerge', FmvInputGroupMerge)
