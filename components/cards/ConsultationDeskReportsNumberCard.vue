<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('相談窓口相談件数')"
      :title-id="'number-of-reports-to-covid19-consultation-desk'"
      :chart-id="'time-bar-chart-querents'"
      :chart-data="querentsGraph"
      :date="Data.querents.date"
      :unit="$t('件.reports')"
      :url="'https://data.bodik.jp/dataset/_covid19'"
    />
    <!-- 件.reports = 窓口相談件数 -->
  </v-col>
</template>

<script>
import Data from '@/data/json/data.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    const querentsGraph = formatGraph(Data.querents.data)

    const data = {
      Data,
      querentsGraph
    }
    return data
  }
}
</script>
