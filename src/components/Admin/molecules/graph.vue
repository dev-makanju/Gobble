<template>
     <!---char table--->
    <Bar
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
        class="base-style"
    />
</template>

<script>

import { Bar } from 'vue-chartjs/legacy'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
   name:"graphApp",
   components:{
      Bar,
   },
   props: {
         chartId: {
            type: String,
            default: 'bar-chart'
         },
         datasetIdKey: {
            type: String,
            default: 'label'
         },
         width: {
            type: Number,
            default: 500
         },
         height: {
            type: Number,
            default: 150
         },
         cssClasses: {
            default: '',
            type: String
         },
         styles: {
            type: Object,
            default: () => {}
         },
         plugins: {
            type: Object,
            default: () => {}
         }
      },
      data() {
         return {
            chartData: {
                labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',],
                datasets: [
                    { data: [40, 20, 12 , 10 , 30 , 45 , 30 , 10, 12] },
                ]
            },

            chartOptions: {
            responsive: true
         }
         }
      }
}
</script>

<style lang="scss">

.base-style{
    background: #fff;
    padding: 5px 5px ;
    border-radius: 7px;
}

</style>