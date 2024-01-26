<script>
import { IMPORT_DATA } from '@/url';
import axios from 'axios';
export default {
    data() {
        return {
            file: null,
            loading: false,
            uploadResponse: [],
        };
    },
    methods: {
        handleFileChange(event) {
            this.file = event.target.files[0];
        },
        async submitForm() {
            const formData = new FormData();
            formData.append('studentCSv', this.file);
            try {
                this.loading = true;
                const res = await axios.post(IMPORT_DATA, formData);
                this.loading = false;
                alert('Data imported');
            } catch (error) {
                console.log(error);
            }

        },
    },
}
</script>
<template>
    <div class="main-content ">
        <div class=" p-3 shadow-md rounded-lg">
            <h4>Import Students Data</h4>
            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label class="mb-2">Choose a CSV File</label>
                    <input type="file" accept=".csv" id="csv" name="studentCSv" ref="fileInput" @change="handleFileChange"
                        class="form-control" required />
                </div>
                <div class="form-group mt-4">
                    <input type="submit" class="btn btn-primary" value="Import CSV" />
                </div>
            </form>
        </div>
        <div v-if="this.loading">
            <h2>Importing data...</h2>
        </div>
    </div>
</template>