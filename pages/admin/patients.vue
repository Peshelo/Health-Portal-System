<template>
  <div>

      <Header title="Patients" sub="Welcome doctor"/>
      <p v-if="loading">Loading Data...</p>
      <p class="text-red-500" v-if="errored">{{ this.error }}</p>
      <p v-if="patients.length<1">No patients available...</p>
<PatientTable v-else :data="this.patients"/> 
  </div>
  
</template>

<script>
import axios from 'axios'
import PatientTable from '../../components/dashboard/tables/PatientTable.vue';
import Header from '../../components/navigation/Header.vue'
export default {
  components: { PatientTable,Header },
  data(){
      return{
          patients:[],
          errored: false,
          error: "",
          loading:false,
      }
  },
  methods:{
      async fetchPatients(){
    // console.log("Fetching Patient Data....");
    this.loading = true;
    const URL = "http://localhost:8080/v1/patients/all";
    const token = localStorage.token;
    // console.log('Token is string: ' + isString(token))
    // console.log(token);
    await axios.get(URL,{
      headers: {'Content-Type': 'application/json',
          Authorization : 'Bearer ' + token,
          'Access-Control-Allow-Origin': '*'}
    }).then((res) =>
     {
      this.patients = res.data;
      console.log(this.patients);
      console.log(typeof(this.patients))
      console.log("Fetching  Patient Data Completed...");
    }) .catch(error => {
      console.log(error.code)
      this.error=error.code;
      this.errored = true

    }).finally(() => this.loading = false);
  }
  },
  mounted(){
      this.fetchPatients();
  }
}
</script>

<style>

</style>