<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
    methods: {
        logout() {
            localStorage.removeItem('token');
            window.location.assign('/');
        }
    },
    mounted() {
        // Access the current pathname when the component is mounted
        console.log('Current Path:', this.$route.path);
    }
};
</script>
<template>
    <div class="sidemenu shadow-md">
        <nav>
            <ul>
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <a href="https://www.gust.edu.kw/" target="_blank" rel="noopener noreferrer">About Us</a>
                </li>
                <li>
                    <a href=" https://www.gust.edu.kw/contact-us" target="_blank" rel="noopener noreferrer">Contact Us</a>
                </li>
                <li>
                    <RouterLink to="/students">Students</RouterLink>
                </li>
                <li>
                    <RouterLink to="/import">Import Data</RouterLink>
                </li>
                <li>
                    <a href="" v-on:click="logout">Logout</a>
                </li>
             
            </ul>
        </nav>
    </div>
</template>
