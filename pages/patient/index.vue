<template>
  <div>
    
    <!-- <p class="text-green-300 text-sm">{{ patient.firstname }} {{ patient.lastname }}</p> -->
    <Header title="Dashboard" sub="Welcome to your health portal"/>
    <h1 class="text-md text-gray-400">Welcome, {{ patient.firstname }} {{ patient.lastname }}</h1>
    
    <statistics :doctors="doctors.length" :appointments="appointments.length" :results="medicalDocs.length"/>
    <!-- Appointment -->
    <div>
<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<div class="min-h-fit bg-gray-100 border-blue-300 border-2 rounded-lg shadow-md px-3">
  <div class="py-6">
    
    <div class="w-full max-w-3xl lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 ">
      
      <main class="lg:col-span-10 xl:col-span-8 w-full">
        <h1 class="text-xl font-bold text-gray-700 mb-4">Upcoming Appointments</h1>

        <div class="w-full my-2">
  <div class="w-full grid grid-cols-2 gap-4 max-md:grid-cols-1">

    <div v-for="(appoint,index) in appointments" :key="index" class="border-t-3 w-full h-max">
      <div class="flex space-x-6 border-b p-4 bg-white rounded-lg border-t-4 border-blue-600 shadow-md">
        <img src="@/assets/images/logo1.png" alt="Glass bottle with black plastic pour top and mesh insert." class="h-20 w-20 object-contain flex-none rounded-full">
        <div class="flex flex-col gap-x-2">
          <div>
            <h4 class="font-medium text-gray-900">
              <label class=" font-bold text-lg text-blue-600">Dr. {{ appoint.doctor.firstname }} {{ appoint.doctor.lastname }}</label>
            </h4>
            <p class=" text-md text-gray-400">{{appoint.description}}</p>
          </div>
          <div class="flex flex-1 mt-2">
            <dl class="flex flex-row justify-center items-center space-x-4 divide-gray-200 text-xs text-white sm:space-x-6">
              <div class="flex rounded-2xl w-fit text-black">
                <dt class="font-sm">Date:</dt>
                <dd class="ml-1">{{ appoint.start.split('T')[0]}}</dd>
              </div>
              <div class="flex rounded-2xl bg-blue-900 p-2">
                <dt class="font-medium">Start:</dt>
                <dd class="ml-2">{{ appoint.start.split('T')[1] }}</dd>
              </div>
              <div class="flex rounded-2xl bg-blue-600 p-2">
                <dt class="font-medium ">End:</dt>
                <dd class="ml-2">{{ appoint.end.split('T')[1]}}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </main>
      <aside class="hidden xl:col-span-4 xl:block">
        <div class="sticky top-1 space-y-4">
          <h2 id="doctors">Doctors</h2>
          <div class="bg-white p-2 px-4 rounded-2xl w-full">
  
  <ul role="list" class="divide-y divide-gray-200">
    <li v-for="(doctor,index) in doctorslimit" :key="index" class="py-4">
      <div class="flex space-x-3">
        <img class="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="">
        <div class="flex-1 space-y-1">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-medium">Dr. {{ doctor.firstname }} {{ doctor.lastname }}</h3>
            <p class="text-sm text-gray-500">{{ doctor.rating }}</p>
          </div>
          <p class="text-xs text-gray-500">{{ doctor.specialisation }}</p>
        </div>
      </div>
    </li>


    <!-- More items... -->
  </ul>
</div>
         


        </div>
      </aside>
    </div>
    <div v-if="appointments.length<1" class="flex flex-row p-5 justify-between bg-white items-center rounded my-5 hover:shadow-lg ">
        <p>You have no appointments yet</p>
        <nuxt-link to="./addAppointment" class="text-md text-white p-2 rounded border bg-blue-500 hover:text-black">Add</nuxt-link>
    </div>
      <AppointmentsTable v-else :appointments="appointments" class="my-10"/>
  </div>
</div>

    </div>
    <!-- End of appointment -->
   
      <!-- <div  class="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1">
      <div v-for="(appoint,index) in appointments" :key="index" class="bg-blue-500 p-5 text-white gap-4 rounded-md flex flex-col justify-center hover:-mt-3 duration-300">
        <label class="text-xs text-gray-300">Appointment {{ index + 1 }}</label>
        <p class="text-xl mmedium">Dr. {{ appoint.doctor.firstname }} {{ appoint.doctor.lastname }}</p>
        <p>Time: <span v-for="(my,index) in appoint.start" :key="index">{{ my }}.</span></p>
        <div class="flex flex-row gap-2"><button class="p-2 bg-red-500 rounded-md text-white">Delete</button><button class="text-white-700">View</button></div>
      </div>
    </div> -->
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
    doctorslimit:[],
    patient:[],
    appointments:[],
    medicalDocs:[],
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
       async fetchDoctorsLimit(){
      console.log("Fetching  Doctors Data Completed...");
      this.loading = true;
      const URL = "http://localhost:8080/v1/doctors/limit/4";
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
        this.doctorslimit = res.data.content;
        console.warn(this.doctorslimit);
        console.log(typeof(this.doctors.limit))
       
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
    // view(){
    //   this.$router.push({ path: '/products-view',params: {product: this.productsDetails }})
    // }
  },
  mounted(){

this.fetchPatient();
this.fetchDoctors();
this.fetchDoctorsLimit();
this.fetchAppointments();
this.fetchMedicalHistory();

    
  
  }
}
</script>

<style>

</style>