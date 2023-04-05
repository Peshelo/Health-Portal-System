<template>
  <div>
    <p class="text-green-300 text-sm">{{ patient.firstname }} {{ patient.lastname }}</p>
    <Header title="Dashboard" sub="Welcome to your health portal"/>
    <statistics :doctors="doctors.length" :appointments="appointments.length" :results="results.length"/>
    
    <div v-if="appointments.length<1" class="flex flex-row p-5 justify-between bg-white border border-red-500 items-center rounded my-5 hover:shadow-lg ">
        <p>You have no appointments yet</p>
        <nuxt-link to="/addAppointment" class="text-md text-white p-2 rounded border bg-green-500 hover:text-black">+ Add</nuxt-link>
    </div>
      <AppointmentsTable v-else :appointments="appointments" class="mb-20"/>
      <div  class="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1">
      <div v-for="(appoint,index) in appointments" :key="index" class="bg-blue-500 p-5 text-white gap-4 rounded-md flex flex-col justify-center hover:-mt-3 duration-300">
        <label class="text-xs text-gray-300">Appointment {{ index + 1 }}</label>
        <p class="text-xl mmedium">Dr. {{ appoint.doctor.firstname }} {{ appoint.doctor.lastname }}</p>
        <p>Time: <span v-for="(my,index) in appoint.start" :key="index">{{ my }}.</span></p>
        <div class="flex flex-row gap-2"><button class="p-2 bg-red-500 rounded-md text-white">Delete</button><button class="text-white-700">View</button></div>
      </div>
    </div>
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
import statistics from '../../components/dashboard/statistics.vue';
import AppointmentsTable from '../../components/dashboard/AppointmentsTable.vue';


export default {
components:{ Header, statistics, DoctorsTable,AppointmentsTable },
data(){
  return{
    doctors:[],
    patient:[],
    appointments:[],
    results:[],
    loading:false
  }
},
methods:{

  async fetchPatient(){
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
    async fetchAppointments(){
      console.log("Fetching Patient Appointments Data....");
      this.loading = true;
      const URL = "http://localhost:8080/v1/appointments/get_appointments_for_patient";
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
    async fetchResults(){
      console.log("Fetching results Data....");
      this.loading = true;
      const URL = "http://localhost:8080/v1/records/doctor/all";
      const token = localStorage.token;
      // console.log('Token is string: ' + isString(token))
      // console.log(token);
      await axios.get(URL,{
        headers: {'Content-Type': 'application/json',
            Authorization : 'Bearer ' + token,
            'Access-Control-Allow-Origin': '*'}
      }).then((res) =>
       {
        this.results = res.data;
        console.log(this.results);
        console.log(typeof(this.results))
        console.log("Fetching  Doctors Data Completed...");
      }) .catch(error => {
        console.log(error.code)
        this.error=error.code;
        this.errored = true

      }).finally(() => this.loading = false);
    },
    // view(){
    //   this.$router.push({ path: '/products-view',params: {product: this.productsDetails }})
    // }
  },
  mounted(){

this.fetchPatient();
this.fetchDoctors();
this.fetchAppointments();

    
  
  }
}
</script>

<style>

</style>