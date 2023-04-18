<template>
    <div>
      
      <!-- <p class="text-green-300 text-sm">{{ patient.firstname }} {{ patient.lastname }}</p> -->
      <Header title="Dashboard" sub="Welcome to your health portal"/>
        <div v-if="loading">
        <div class="bg-gray-200 animate-pulse w-full h-5"></div>
        <div class="bg-gray-300 animate-pulse w-full h-5"></div>
        <div class="bg-gray-200 animate-pulse w-full h-5"></div>
        <div class="bg-gray-300 animate-pulse w-full h-5"></div>
      </div>
      <h1 v-if="doctors<1">No doctors to show.</h1>
      <DoctorsTable v-else :doctors="doctors"/>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import Header from '~/components/navigation/Header.vue';
  import DoctorsTable from '../../components/dashboard/DoctorsTable.vue';
  
  
  export default {
  components:{ Header,DoctorsTable },
  data(){
    return{
      doctors:[],
      loading:false
    }
  },
  methods:{
      async fetchDoctors(){
        console.log("Fetching  Doctors Data Completed...");
        this.loading = true;
        const URL = "http://localhost:8080/v1/doctors/all";
        const token = localStorage.token;
        console.log("this is my token: " + token);
        // console.log('Token is string: ' + isString(token))
        // console.log(token);
        await axios.get(URL,{
          headers: {'Content-Type': 'application/json',
              Authorization : 'Bearer ' + token,
              'Access-Control-Allow-Origin': '*'}
        }).then((res) =>
         {
          this.doctors = res.data;
          console.warn(this.doctors);
          console.log(typeof(this.doctors))
         
        }).catch(error => {
          console.log("Error" + error.code)
          this.error=error.code;
          this.errored = true
  
        }).finally(() => this.loading = false);
      },
      // view(){
      //   this.$router.push({ path: '/products-view',params: {product: this.productsDetails }})
      // }
    },
    mounted(){
  this.fetchDoctors();
  
      
    
    }
  }
  </script>
  
  <style>
  
  </style>