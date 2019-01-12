<template>
  <div id="app">
    <kendo-datasource
      ref="dataSource0"
      :transport-read-url="'https://api.iextrading.com/1.0/stock/aapl/chart/1m'"
      :transport-read-data-type="'json'">
    </kendo-datasource>
    <kendo-datasource
      ref="dataSource1"
      :transport-read-url="'https://api.iextrading.com/1.0/stock/aapl/chart/3m'"
      :transport-read-data-type="'json'">
    </kendo-datasource>
    <kendo-datasource
      ref="dataSource2"
      :transport-read-url="'https://api.iextrading.com/1.0/stock/aapl/chart/6m'"
      :transport-read-data-type="'json'">
    </kendo-datasource>
    <kendo-buttongroup 
      :index="0"
      @select="onSelect">
      <kendo-buttongroup-button>1M</kendo-buttongroup-button>
      <kendo-buttongroup-button>3M</kendo-buttongroup-button>
      <kendo-buttongroup-button>6M</kendo-buttongroup-button>
    </kendo-buttongroup>
    <p>
      Volume
      <kendo-sparkline
        :data-source-ref="dataSource"
        :series="seriesA">
      </kendo-sparkline>
    </p>
    <p>
      Closing Price
      <kendo-sparkline
        :data-source-ref="dataSource"
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
      dataSource: 'dataSource0',
      seriesA: [{
        type: 'column',
        field: 'volume'
      }],
      seriesB: [{
        type: 'line',
        field: 'close'
      }]
    }
  },
  methods: {
    onSelect: function(e) {
      if(e.indices == 0) {
        this.dataSource = 'dataSource0'
      } 
      else if(e.indices == 1) {
        this.dataSource = 'dataSource1'
      } else {
        this.dataSource = 'dataSource2'
      }
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

