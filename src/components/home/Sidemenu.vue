<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
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
                    <RouterLink to="/" >Home</RouterLink>
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
                    <RouterLink to="/logout">Logout</RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>
