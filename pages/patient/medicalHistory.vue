<template>
    <div>
      <Header title="Medical History" sub="Track your medical history"/>
      <div v-if="medicalDocs.length<1" class="flex flex-row p-5 justify-between bg-white border items-center rounded my-5 hover:shadow-lg ">
        <p>Loading Records</p>
      </div>
      <MedicalHistory v-else :medicalRecords="this.medicalDocs"/>
    </div>
  </template>
  
  <script>
import axios from 'axios'
import Header from '~/components/navigation/Header.vue';
import MedicalHistory from '../../components/dashboard/medical/MedicalHistory.vue';
  
  export default {
  components:{ Header, MedicalHistory },
  data(){
    return{
      records: "",
      medicalDocs:[],
    }
  },
  methods:{
    async fetchMedicalHistory(){
      // console.log("Fetching medicalDocs Data....");
      this.loading = true;
      const URL = "http://localhost:8080/v1/records/sorted_by_recent";
      const token = localStorage.token;
      // console.log('Token is string: ' + isString(token))
      // console.log(token);
      await axios.get(URL,{
        headers: {'Content-Type': 'application/json',
            Authorization : 'Bearer ' + token,
            'Access-Control-Allow-Origin': '*'}
      }).then((res) =>
       {
        this.medicalDocs = res.data;
        console.log(this.medicalDocs);
        console.log(typeof(this.medicalDocs))
        console.log("Fetching  medicalDocs Data Completed...");
      }) .catch(error => {
        console.log(error.code)
        this.error=error.code;
        this.errored = true

      }).finally(() => this.loading = false);
    },
  },
  mounted(){
    this.fetchMedicalHistory()
  }
  }
  </script>
  
  <style>
  
  </style>