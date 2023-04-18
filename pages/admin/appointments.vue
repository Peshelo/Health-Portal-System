<template>
    <div>
      <Header title="Patient Appointments" sub="Get your patient appointments list."/>
      <div v-if="appointments.length<1" class="flex flex-row p-5 justify-between bg-white border items-center rounded my-5 hover:shadow-lg ">
        <p>No appointments to show</p>
      </div>
      <AppointmentsTable v-else :appointments="appointments"/>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import UpComming from '@/components/dashboard/appointments/UpComming.vue'
  import AppointmentsTable from '../../components/dashboard/AppointmentsTable.vue';
  import Header from '~/components/navigation/Header.vue';
  
  export default {
  components:{Header,AppointmentsTable,UpComming},
  data(){
  return{
  appointments: [],
  }
  },
  methods:{
    async fetchAppointments(){
      console.log("Fetching Patient Appointments Data....");
      this.loading = true;
      const URL = "http://localhost:8080/v1/appointments/get-appointments";
      const token = localStorage.token;
      // console.log('Token is string: ' + isString(token))
      // console.log(token);
      await axios.get(URL,{
        headers: {'Content-Type': 'application/json',
            Authorization : 'Bearer ' + token,
            'Access-Control-Allow-Origin': '*'}
      }).then((res) =>
       {
        this.appointments = res.data;
        console.log(this.appointments);
        console.log(typeof(this.appointments))
        console.log("Fetching  Doctors Data Completed...");
      }) .catch(error => {
        console.log(error.code)
        this.error=error.code;
        this.errored = true
  
      }).finally(() => this.loading = false);
    },
    
  },
  mounted(){
    this.fetchAppointments();
  }
  }
  </script>
  
  <style>
  
  </style>