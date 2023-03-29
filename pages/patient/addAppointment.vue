<template>
    <div class="container flex flex-col justify-center h-fit">
      <h3 class="text-2xl mt-10 bg-gray-200 text-black py-5 px-10 border">Add Appointment</h3>
      <form @submit.prevent="BookAppointment()" class="bg-white p-10 border" >
      <p v-if="errors.ERR" class="text-red-500 text-xs bg-red-100 border border-red-500 p-3 hover:bg-red-200 hover:text-red-600 mb-5 rounded">{{ errors.ERR }}</p>
        <div class="flex flex-row justify-between">
          <div class="mb-3 mr-1 w-1/2">
            <label class="block mb-2 text-sm text-gray-400" for="firstName">
              Doctor Specialist
            </label>
            <select
              class="appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-light text-md focus:outline-none focus:bg-white focus:border-blue-500 duration-100"
              id="firstName">
            <option selected disabled>Specialist</option>
            <option v-for="(doctor,index) in doctors" :key="index" @select="fetchDoctors()">{{doctor.specialisation}}</option>
            <!-- <option @select="fetchDoctors()">Neuroseugeon</option>
            <option @select="fetchDoctors()">Doctor Specialist</option> -->
            </select>
            <!-- <p class="text-red-500 text-xs " v-if="errors.firstName">{{ errors.firstName }}</p> -->
          </div>
          <div class="mb-3 w-1/2">
            <label class="block mb-2 text-sm text-gray-400" for="lastName">
              Doctor
            </label>
            <select
              class="appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-light text-md focus:outline-none focus:bg-white focus:border-blue-500 duration-100"
              id="firstName">
            <option selected disabled>Choose Doctor</option>
                        <option v-for="(doctor,index) in doctors"  :key="index" :value="doctor.id">Dr. {{doctor.firstname}}</option>
            <!-- <option v-for="doctor in doctors" :key="doctor.id">{{doctor.firstName}}General</option>
            <option>Neuroseugeon</option>
            <option>Doctor Specialist</option> -->
            </select>
          </div>
        </div>
  
        <div class="mb-3">
                      <p class="text-red-500 text-xs " v-if="errors.description">{{ errors.description }}</p>
          <label class="block mb-2 text-sm text-gray-400" for="email">
           Describe Appointment
          </label>
          <textarea v-model="appointment.description"
            class=" appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-light text-md focus:outline-none focus:bg-white focus:border-blue-500 duration-100"
            id="address" type="tel"/>
          <p class="text-red-500 text-xs " v-if="errors.date">{{ errors.date }}</p>
        </div>
        <div class="mb-3">
          <label class="block mb-2 text-sm text-gray-400" for="mobile">
            Date
          </label>
          <input v-model="appointment.date"
            class=" appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-light text-md focus:outline-none focus:bg-white focus:border-blue-500 duration-100"
            id="mobile" type="datetime-local"/>
          <!-- <p class="text-red-500 text-xs " v-if="errors.mobile">{{ errors.mobile }}</p> -->
          
        </div>
        <!-- <div class="mb-3">
          <label class="block mb-2 text-sm text-gray-400" for="mobile">
           Time
          </label>
          <input
            class=" appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-light text-md focus:outline-none focus:bg-white focus:border-blue-500 duration-100"
            id="mobile" type="time" />
        </div> -->
        <div class="mb-3">
          <label class="block mb-2 text-sm text-gray-400" for="mobile">
            Payment Method
          </label>
          <select
              class="appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-light text-md focus:outline-none focus:bg-white focus:border-blue-500 duration-100"
              id="firstName">
            <option selected>Paypal</option>
            </select>
          <!-- <p class="text-red-500 text-xs " v-if="errors.address">{{ errors.address }}</p> -->
        </div>
     
        <div class="mb-3">
          <button
            class="bg-blue-500 hover:bg-blue-700 mb-2  mt-5 w-full text-white py-4 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Book Appointment
          </button>
        </div>
      </form>
  </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data(){
      return{
        doctors: {},
        appointment: {},
        error: false,
        errors: {}
  
      }
    },
  
    methods:{
      fetchDoctors(){
        // console.log("Fetching Patient Data....");
        const URL = "http://localhost:8080/v1/doctors";
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
      async BookAppointment(){
            this.loading=true;
            this.errors = {};
            if(!this.appointment.date){
                this.errors.date = "Date is required";
            }
            if(!this.appointment.description){
                this.errors.description = "Description is required";
            }
            if (Object.keys(this.errors).length === 0) {
       // Your code for handling the login form submission
       try{
        await axios.post('http://localhost:8080/v1/appointments/createAppointment',{
        doctorId:5,
        start :this.appointment.date
        },{
            headers: {'Content-Type': 'application/json',
            Authorization : 'Bear' + localStorage.token,
            'Accept' : '*/*',
            'Access-Control-Allow-Origin': '*'
          },
            credentials: 'include',
          }).then((response) =>{
          const data = response.data;
          console.log(data);
        }).catch(error => {
        console.log(error)
        this.errored = true
        this.errors.ERR=error
        
      }).finally(() => this.loading = false);

}catch(err){
  this.errors.network = "Error: " + err.message;
  this.errors.ERR = err;
console.log("Error:",err.message)

}
      }
        }
    },
    mounted(){
      this.fetchDoctors();
    }
  
  }
  </script>
  
  <style>
  
  </style>