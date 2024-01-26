<script>
import { GET_STUDENTS } from '@/url';
import axios from 'axios';
export default {
    data() {
        return {
            students: [],
        };
    },
    mounted() {
        this.loadStudents();
    },
    methods: {
        async loadStudents() {
            try {
                this.loading = true;
                const res = await axios.get(GET_STUDENTS);
                this.students = res.data.students;
                this.loading = false;
            } catch (error) {
                console.log(error);
            }

        },
    },
}
</script>
<template>
    <div class="main-content container">
        <div class=" p-3 shadow-md rounded-lg">
            <h4>Students</h4>
            <div class="container">
                <table class="w-full text-sm table responsive">
                    <thead>
                        <th>School</th>
                        <th>Sex</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Family size</th>
                        <th>P Status</th>
                        <th>Mother Edu</th>
                        <th>Father Edu</th>
                        <th>Mother Job</th>
                        <th>Father Job</th>
                        <th>Reason</th>
                        <th>Guardian</th>
                        <!-- <th>address</th>
                        <th>address</th>
                        <th>address</th>
                        <th>address</th>
                        <th>address</th>
                        <th>address</th>
                        <th>address</th>
                        <th>address</th>
                        <th>address</th>
                        <th>address</th>
                        <th>address</th>
                        <th>address</th>
                        <th>address</th>
                        <th>address</th>
                        <th>address</th>
                        <th>address</th>
                        <th>address</th>
                        <th>address</th> -->
                        <th>G1</th>
                        <th>G2</th>
                        <th>G3</th>
                        
                    </thead>
                    <tbody>
                        <tr v-for="(student, index) in this.students" :key="index">
                            <td>{{ student.school }}</td>
                            <td>{{ student.sex }}</td>
                            <td>{{ student.age }}</td>
                            <td>{{ student.address }}</td>
                            <td>{{ student.famsize }}</td>
                            <td>{{ student.Pstatus }}</td>
                            <td>{{ student.Medu }}</td>
                            <td>{{ student.Fedu }}</td>
                            <td>{{ student.Mjob }}</td>
                            <td>{{ student.Fjob }}</td>
                            <td>{{ student.reason }}</td>
                            <td>{{ student.guardian }}</td>
                            <!-- <td>{{ student.traveltime }}</td>
                            <td>{{ student.studytime }}</td>
                            <td>{{ student.failures }}</td>
                            <td>{{ student.schoolsup }}</td>
                            <td>{{ student.famsup }}</td>
                            <td>{{ student.paid }}</td>
                            <td>{{ student.activities }}</td>
                            <td>{{ student.nursery }}</td>
                            <td>{{ student.higher }}</td>
                            <td>{{ student.internet }}</td>
                            <td>{{ student.romantic }}</td>
                            <td>{{ student.famrel }}</td>
                            <td>{{ student.freetime }}</td>
                            <td>{{ student.goout }}</td>
                            <td>{{ student.Dalc }}</td>
                            <td>{{ student.Walc }}</td>
                            <td>{{ student.health }}</td>
                            <td>{{ student.absences }}</td> -->
                            <td>{{ student.G1 }}</td>
                            <td>{{ student.G2 }}</td>
                            <td>{{ student.G3 }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-if="this.students.length == 0">
            <p>Loading Students...</p>
        </div>
    </div>
</template>