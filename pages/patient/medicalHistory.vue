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
  components:{ Header, MedicalHistory },
  data(){
    return{
      records: "",
    }
  },
  methods:{
    async fetchPatientRecords(){
      // console.log("Fetching Patient Data....");
      this.loading = true;
      const URL = "http://localhost:8080/v1/patients";
      const token = localStorage.token;
      // console.log('Token is string: ' + isString(token))
      // console.log(token);
      await axios.get(URL,{
        headers: {'Content-Type': 'application/json',
            Authorization : 'Bearer ' + token,
            'Access-Control-Allow-Origin': '*'}
      }).then((res) =>
       {
        this.patient = res.data;
        console.log(this.patient);
        console.log(typeof(this.patient))
        console.log("Fetching  Patient Data Completed...");
      }) .catch(error => {
        console.log(error.code)
        this.error=error.code;
        this.errored = true

      }).finally(() => this.loading = false);
    },
  }
  }
  </script>
  
  <style>
  
  </style>