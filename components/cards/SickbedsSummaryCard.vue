<template>
  <v-col cols="12" md="6" class="DataCard">
    <circle-chart
      :title="$t('入院患者数と残り病床数')"
      :title-id="'patietns-and-sickedbeds'"
      :chart-data="sickbedsGraph"
      :date="date"
      :unit="$t('床')"
      :info="$t('入院患者数') + '/' + $t('総病床数')"
      :url="'https://www.pref.oita.jp/site/bosaianzen/shingatacorona.html'"
    />
  </v-col>
</template>

<script>
import Data from '@/data/json/data.json'
import formatVariableGraph from '@/utils/formatVariableGraph.ts'
import CircleChart from '@/components/CircleChart.vue'

export default {
  components: {
    CircleChart
  },
  data() {
    const date = Data.sickbeds_summary.date
    const sickbedsGraph = formatVariableGraph(Data.sickbeds_summary.data)

    const data = {
      date,
      sickbedsGraph
    }

    return data
  }
}
</script>
