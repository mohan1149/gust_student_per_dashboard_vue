<script>
import { INSIGHTS_BY_ED } from '@/url';
import axios from 'axios';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
    name: 'Student Insights',
    components: { Bar },
    data() {
        return {
            chartData: {
                labels: ['L0', 'L1', 'L2','L3','L4','L5','L6','L7','L8'],
                datasets: [
                    {
                        label: 'Performance',
                        backgroundColor: '#f87979',
                        data: [0, 0, 0]
                    },
                    
                ]
            },

            loading: false,
            genderInsights: [],
        }
    },
    methods: {
        async loadInsightsByGender() {
            try {
                this.loading = true;
                const res = await axios.get(INSIGHTS_BY_ED);
                this.chartData.datasets[0].data[0] = res.data.students[0].avgPer;
                this.chartData.datasets[0].data[1] = res.data.students[1].avgPer;
                this.chartData.datasets[0].data[2] = res.data.students[2].avgPer;
                this.chartData.datasets[0].data[3] = res.data.students[3].avgPer;
                this.chartData.datasets[0].data[4] = res.data.students[4].avgPer;
                this.chartData.datasets[0].data[5] = res.data.students[5].avgPer;
                this.chartData.datasets[0].data[6] = res.data.students[6].avgPer;
                this.chartData.datasets[0].data[7] = res.data.students[7].avgPer;
                this.chartData.datasets[0].data[8] = res.data.students[8].avgPer;

                this.loading = false;
                this.genderInsights = res.data.students;
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.loadInsightsByGender();
    },

}
</script>
<template>
    <div class="m-2 p-3 shadow-md rounded-lg">
        <h5>Performance vs Parents (Mother+Father) Education Level</h5>
        <div class="gender-per">
            <Bar :data="chartData" style="height:500px" />
        </div>
    </div>
</template>
