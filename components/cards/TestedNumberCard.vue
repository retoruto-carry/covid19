<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('検査実施数')"
      :title-id="'number-of-tested-cases'"
      :chart-id="'time-bar-chart-tested'"
      :chart-data="inspectionsGraph"
      :date="Data.inspections_summary.date"
      :unit="$t('件.tested')"
      :url="'https://data.bodik.jp/dataset/_covid19'"
    />
  </v-col>
</template>

<script>
import Data from '@/data/json/data.json'
import TimeBarChart from '@/components/TimeBarChart.vue'
import formatGraph from '@/utils/formatGraph'

export default {
  components: {
    TimeBarChart
  },
  data() {
    const inspectionsGraph = formatGraph(Data.inspections_summary.data)

    const data = {
      Data,
      inspectionsGraph
    }

    return data
  }
}
</script>
