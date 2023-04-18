<template>
    <div>
      <Header title="Medical History" sub="Track your medical history"/>
      
      <MedicalHistory/>
    </div>
  </template>
  
  <script>

import Header from '~/components/navigation/Header.vue';
import MedicalHistory from '../../components/dashboard/medical/MedicalHistory.vue';
  
  export default {
  components:{ Header, MedicalHistory }
  }
  </script>
  
  <style>
  
  </style>