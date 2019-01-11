import Vue from 'vue'
import App from './App.vue'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Chart, ChartInstaller } from '@progress/kendo-charts-vue-wrapper'
import { DataSource, DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import { ButtonGroup, ButtonGroupButton, ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'

Vue.use(ChartInstaller)
Vue.use(DataSourceInstaller)
Vue.use(GridInstaller)
Vue.use(ButtonsInstaller)

new Vue({
  el: '#app',
  components: {
  	Chart,
  	DataSource,
  	Grid,
  	ButtonGroup,
    ButtonGroupButton
  },
  render: h => h(App)
})
