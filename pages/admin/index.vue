<template>
    <div>
      <Header title="Dashboard" sub="Welcome doctor"/>
      <statistics/>
      <div>
        <div class="mb-3 w-full">
            <label class="block mb-2 text-sm text-gray-400" for="lastName">
             Select Doctor
            </label>
            <select @change="fetchAppointments(id)" v-model="id"
              class="appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-light text-md focus:outline-none focus:bg-white focus:border-blue-500 duration-100"
              id="firstName">
            <option selected disabled>Choose Doctor</option>
                        <option v-for="(doctor,index) in doctors"  :key="index" :value="doctor.id">Dr. {{doctor.firstname}}, {{ doctor.specialisation }}</option>
            </select>
          </div>
    <div v-if="appointments<1" class="flex flex-row p-5 justify-between bg-white border items-center rounded my-5 hover:shadow-lg ">
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
doctors: {},
id:0
}
},
methods:{
  fetchDoctors(){
        // console.log("Fetching Patient Data....");
        const URL = "http://localhost:8080/v1/doctors/all";
        const token = localStorage.token;
        // console.log('Token is string: ' + isString(token))
        // console.log(token);
        axios.get(URL,{
          headers: {'Content-Type': 'application/json',
              Authorization : 'Bearer ' + token,
              'Access-Control-Allow-Origin': '*'}
        }).then((res) =>
         {
          this.doctors = res.data;
          console.log(this.doctors);
          console.log(typeof(this.doctors))
          console.log("Fetching  Doctors Data Completed...");
        }) .catch(error => {
          console.log(error.code)
          this.error=error.code;
          this.errored = true
  
        }).finally(() => this.loading = false);
      },
  async fetchAppointments(id){
    console.log("Fetching Doctor Appointments Data....");
    this.loading = true;
    const URL = "http://localhost:8080/v1/appointments/get_doctor_appointments?id="+id;
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
      console.warn(this.appointments);
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
  this.fetchDoctors();
}
  
  }
  </script>
  
  <style>
  
  </style>