<template>
    <b-row>
        <b-col cols="12" lg="6" md="6" sm="6">
            <transition name="slide">
                <div class="animated fadeIn">
                    <b-card header="This Week vs Last Week By sessions">
                        <div class="chart-wrapper">
                            <line-chart v-if="loaded" :chart-data="dataCollection" :options="options"></line-chart>
                        </div>
                    </b-card>
                </div>
            </transition>
        </b-col>
    </b-row>

</template>
<script>
import LineChart from '@/admin/components/LineChart'

export default {
    name: 'dashboard',
    components: {
      LineChart
    },
    data () {
      return {
        loaded: false,
        dataCollection: null,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    stacked: true,
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1,

                    }
                }]
            },
        }
      }
    },
    mounted () {
      this.fetchChartData()
    },
    methods: {
        fetchChartData() {
            axios.get("api/reports")
            .then(response => {
                this.dataCollection = {
                    labels: response.data.labels,
                    datasets: response.data.datasets
                }
                this.loaded = true
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
}
</script>
