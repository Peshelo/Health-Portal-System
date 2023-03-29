<template>
    <div>
      <Header title="Health Tips" sub="Stay health everyday"/>
      <HealthTips/>
    </div>
  </template>
  
  <script>
  import Header from '~/components/navigation/Header.vue';
import HealthTips from '../../components/dashboard/HealthTips.vue';
  
  export default {
  components:{ Header, HealthTips }
  }
  </script>
  
  <style>
  
  </style>