<template>
  <v-col cols="12" md="6" class="DataCard">
    <circle-chart-for-age
      :title="$t('年代別陽性患者数')"
      :title-id="'patients-by-age'"
      :chart-data="ageGraph"
      :date="date"
      :unit="$t('人')"
      :info="$t('累計値')"
      :url="'https://data.bodik.jp/dataset/_covid19'"
    />
  </v-col>
</template>

<script>
import formatVariableGraph from '@/utils/formatVariableGraph.ts'
import CircleChartForAge from '@/components/CircleChartForAge.vue'
import Data from '@/data/json/data.json'

export default {
  components: {
    CircleChartForAge
  },
  data() {
    const ageGraph = formatVariableGraph(Data.age.data)
    const date = Data.age.date

    const data = {
      date,
      ageGraph
    }

    return data
  }
}
</script>
