<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidemenu from '../src/components/home/Sidemenu.vue';
import Header from './components/home/Header.vue';

</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <div class="container-fluid">
    <div class="row">
      <div class="col-2 p-0" v-if="isLogged">
        <Sidemenu />
      </div>
      <div class="col-12 p-0" v-if="!isLogged">
        <RouterView />
      </div>
      <div class="col-10 p-0 app-content" v-if="isLogged">
        <Header v-if="isLogged" />
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLogged: localStorage.getItem('token') !== null ? true : false
    };
  }
};
</script>
<style scoped></style>
