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
import formatVariableGraph from '@/utils/formatVariableGraph.ts'
import CircleChart from '@/components/CircleChart.vue'
import sickbedsSummary from '@/data/sickbeds_summary.json'

export default {
  components: {
    CircleChart
  },
  data() {
    const date = sickbedsSummary.last_update
    const sickbedsGraph = formatVariableGraph(sickbedsSummary.data)

    const data = {
      date,
      sickbedsGraph
    }

    return data
  }
}
</script>
