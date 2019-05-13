<template>
    <b-row>
        <b-col cols="12" lg="6" md="6" sm="6">
            <transition name="slide">
                <div class="animated fadeIn">
                    <b-card header="This Week vs Last Week By sessions">
                        <div class="chart-wrapper">
                            <line-chart v-if="loaded" :chart-data="dataCollectionLineChart" :options="LineChartOptions"></line-chart>
                        </div>
                    </b-card>
                </div>
            </transition>
        </b-col>

        <b-col cols="12" lg="6" md="6" sm="6">
            <transition name="slide">
                <div class="animated fadeIn">
                    <b-card header="Total Page Views by this week ">
                        <div class="chart-wrapper">
                            <bar-chart v-if="loaded" :chart-data="dataCollectionBarChart" :options="BarChartOptions"></bar-chart>
                        </div>
                    </b-card>
                </div>
            </transition>
        </b-col>
    </b-row>

</template>
<script>
import LineChart from '@/admin/components/LineChart'
import BarChart from '@/admin/components/BarChart'

export default {
    name: 'dashboard',
    components: {
      LineChart,
      BarChart
    },
    data () {
      return {
        loaded: false,
        dataCollectionLineChart: null,
        dataCollectionBarChart: null,
        LineChartOptions: {
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
        },
        BarChartOptions: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    stacked: true,
                    ticks: {
                        beginAtZero: true,
                        stepSize: 50,
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
                this.dataCollectionLineChart = {
                    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    datasets: response.data.weekOverWeekChartData.datasets
                }

                this.dataCollectionBarChart = {
                    labels: response.data.pageViewByweek.labels,
                    datasets: response.data.pageViewByweek.datasets
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
