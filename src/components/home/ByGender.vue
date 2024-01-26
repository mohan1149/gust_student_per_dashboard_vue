<script>
import { INSIGHTS_BY_GENDER } from '@/url';
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
                labels: ['G1', 'G2', 'G3'],
                datasets: [
                    {
                        label: 'Male',
                        backgroundColor: '#f87979',
                        data: [0, 0, 0]
                    },
                    {
                        label: 'Female',
                        backgroundColor: '#0EA5E9',
                        data: [0, 0, 0]
                    }
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
                const res = await axios.get(INSIGHTS_BY_GENDER);
                this.chartData.datasets[0].data[0] = res.data.students[0].G1;
                this.chartData.datasets[0].data[1] = res.data.students[0].G2;
                this.chartData.datasets[0].data[2] = res.data.students[0].G3;
                this.chartData.datasets[1].data[0] = res.data.students[1].G1;
                this.chartData.datasets[1].data[1] = res.data.students[1].G2;
                this.chartData.datasets[1].data[2] = res.data.students[1].G3;
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
        <h5>Performance vs Student Gender</h5>
        <div class="gender-per">
            <Bar :data="chartData" style="height:500px" />
        </div>
    </div>
</template>
