<template>
    <div>
      <Header title="Dashboard" sub="Welcome doctor"/>
      <statistics/>
      <div>
    <div v-if="appointments.length < 1" class="flex flex-row p-5 justify-between bg-white border items-center rounded my-5 hover:shadow-lg ">
      <p>No appointments to show</p>
    </div>
    <AppointmentsTable v-else :appointments="appointments"/>
  </div>
    </div>
  </template>
  
  <script>
    import axios from 'axios'
  import Header from '~/components/navigation/Header.vue';
  import statistics from '../../components/dashboard/statistics.vue';
  import AppointmentsTable from '../../components/dashboard/AppointmentsTable.vue';
  
  
  export default {
  components:{ Header, statistics,AppointmentsTable },
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