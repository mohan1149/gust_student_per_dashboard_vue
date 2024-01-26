<template>
    <div class="m-2 p-3 shadow-md rounded-lg">
        <h5>Student Average Performance</h5>
        <div class="gender-per">
            <Pie :data="data" :options="options" />
        </div>
    </div>
</template>


<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs';
import { INSIGHTS_BY_AVG_SCORE } from '@/url';
import axios from 'axios';
ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: 'App',
    components: {
        Pie
    },
    data() {
        return {
            data: {
                labels: ['G1', 'G2', 'G3'],
                datasets: [
                    {
                        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                        data: [0, 0, 0]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted() {
        this.loadInsightsByScore();
    },
    methods: {
        async loadInsightsByScore() {
            try {
                this.loading = true;
                const res = await axios.get(INSIGHTS_BY_AVG_SCORE);
                console.log(res.data);
                
                this.data.datasets[0].data[0] = res.data.students[0].G1;
                this.data.datasets[0].data[1] = res.data.students[0].G2;
                this.data.datasets[0].data[2] = res.data.students[0].G3;
                // this.loading = false;
            } catch (error) {
                console.log(error);
            }
        },
    },
}
</script>
  