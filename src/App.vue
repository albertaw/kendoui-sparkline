<template>
  <div id="app">
    <kendo-datasource
      ref="dataSource"
      :transport-read-url="'https://api.iextrading.com/1.0/stock/aapl/chart/1m'"
      :transport-read-data-type="'json'">
    </kendo-datasource>
    <p>
      Volume
      <kendo-sparkline
        :data-source-ref="'dataSource'"
        :series="seriesA">
      </kendo-sparkline>
    </p>
    <p>
      Close
      <kendo-sparkline
        :data-source-ref="'dataSource'"
        :series="seriesB">
      </kendo-sparkline>
    </p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      seriesA: [{
        type: 'column',
        field: 'volume'
      }],
      seriesB: [{
        type: 'line',
        field: 'close'
      }]
    }
  }
}
</script>

<style>
#app {
  font-family: 'helvetica';
  margin-top: 60px;
}
</style>
