<script>
import { INSIGHTS_BY_GENDER } from '@/url';
import axios from 'axios';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import ByGender from './ByGender.vue';
import ByParentsEd from './ByParentsEd.vue';
import AvgScore from './AvgScore.vue';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'Student Insights',
    components: { Bar, ByGender, ByParentsEd, AvgScore, AvgScore },
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
            chartData2: {
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
        async loadInsightsByParentsEd() {
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
        }
    },
    mounted() {
        this.loadInsightsByGender();
    },

}
</script>
<template>
    <div class="main-content">
        <div class="row">
            <div class="col-md-4">
                <div class="m-2 p-3 shadow-md rounded-lg bg-blue">
                    <h4>Average Score For Math</h4>
                    <h1>82.5</h1>
                </div>
            </div>
            <div class="col-md-4">
                <div class="m-2 p-3 shadow-md rounded-lg bg-pink">
                    <h4>Average Score For Reading</h4>
                    <h1>75.7</h1>
                </div>
            </div>
            <div class="col-md-4">
                <div class="m-2 p-3 shadow-md rounded-lg bg-indigo">
                    <h4>Average Score For Writing</h4>
                    <h1>70.77</h1>
                </div>
            </div>
            <div class="col-md-6">
                <ByGender></ByGender>
            </div>
            <div class="col-md-6">
                <ByParentsEd />
            </div>
            <div class="col-md-6">
                <AvgScore />
            </div>

        </div>
    </div>
</template>
