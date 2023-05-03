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
      <nuxt-link to="./addNewDoctor" class="flex items-center my-5 justify-center w-fit px-5 py-2 tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-md shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

                <span>Add New Doctor</span>
      </nuxt-link>
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