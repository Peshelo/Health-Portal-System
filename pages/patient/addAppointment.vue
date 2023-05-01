<template>
    <div class="container flex flex-col justify-center items-center h-fit bg-white">
      <h3 class="text-2xl mt-10 text-black font-bold py-5">Add Appointment</h3>
      <h1 v-if="loading" class="w-full p-10 rounded-lg bg-white animate-pulse text-black text-center">Processing Request...</h1>
      <form v-else @submit.prevent="BookAppointment()" class="bg-white w-1/2 p-10 border shadow-xl" >
      <p v-if="errors.ERR" class="text-red-500 text-xs bg-red-100 border border-red-500 p-3 hover:bg-red-200 hover:text-red-600 mb-5 rounded">{{ errors.ERR }}</p>
        <div class="flex flex-col justify-between">
          <div class="mb-3 mr-1 w-full">
            <label class="block mb-2 text-sm text-gray-400" for="firstName">
              Doctor Specialist
            </label>
            <select class="appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-light text-md focus:outline-none focus:bg-white focus:border-blue-500 duration-100"
              id="firstName">
            <option selected disabled>Specialist</option>
            <option v-for="(doctor,index) in doctors" :key="index" @select="fetchDoctors()">{{doctor.specialisation}}</option>
            <!-- <option @select="fetchDoctors()">Neuroseugeon</option>
            <option @select="fetchDoctors()">Doctor Specialist</option> -->
            </select>
            <!-- <p class="text-red-500 text-xs " v-if="errors.firstName">{{ errors.firstName }}</p> -->
          </div>
          <div class="mb-3 w-full">
            <label class="block mb-2 text-sm text-gray-400" for="lastName">
              Doctor
            </label>
            <select v-model="id"
              class="appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-light text-md focus:outline-none focus:bg-white focus:border-blue-500 duration-100"
              id="firstName">
            <option selected disabled>Choose Doctor</option>
                        <option v-for="(doctor,index) in doctors"  :key="index" :value="doctor.id">Dr. {{doctor.firstname}}, {{ doctor.specialisation }}</option>
            </select>
          </div>
          <div class="mb-3 w-full">
            <label class="block mb-2 text-sm text-gray-400" for="lastName">
              Appointment Type
            </label>
            <select v-model="typeOfAppointment"
              class="appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-light text-md focus:outline-none focus:bg-white focus:border-blue-500 duration-100"
              id="type">
            <option selected disabled>Select Appointment Type</option>
                        <option v-for="(type,index) in appointmentType"  :key="index" :value="type">{{type.replace('_',' ')}}</option>
            </select>
          </div>
        </div>
  
        <div class="mb-3">
                      <p class="text-red-500 text-xs " v-if="errors.description">{{ errors.description }}</p>
          <label class="block mb-2 text-sm text-gray-400" for="email">
           Describe Appointment
          </label>
          <textarea v-model="description"
            class=" appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-light text-md focus:outline-none focus:bg-white focus:border-blue-500 duration-100"
            id="address" type="tel"/>
          <p class="text-red-500 text-xs " v-if="errors.date">{{ errors.date }}</p>
        </div>
        <div class="mb-3">
          <label class="block mb-2 text-sm text-gray-400" for="mobile">
            Date
          </label>
          <input v-model="date"
            class=" appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-light text-md focus:outline-none focus:bg-white focus:border-blue-500 duration-100"
            id="mobile" type="date"/>
          <!-- <p class="text-red-500 text-xs " v-if="errors.mobile">{{ errors.mobile }}</p> -->
        </div>
        <h1 class="text-md my-3 mt-10 font-bold">Select a time slot</h1>
        <div class="mb-3 grid grid-cols-4 gap-3 py-10 px-2 rounded-lg border">
         <div @click="setTime('8:00')" class="bg-blue-200 hover:bg-blue-600 duration-300 p-5 text-white rounded-lg text-md text-center font-bold">8:00</div>
         <div @click="setTime('9:00')" class="bg-blue-200 hover:bg-blue-600 duration-300 p-5 text-white rounded-lg text-md text-center font-bold">9:00</div>
         <div @click="setTime('10:00')" class="bg-blue-200 hover:bg-blue-600 duration-300 p-5 text-white rounded-lg text-md text-center font-bold">10:00</div>
         <div @click="setTime('11:00')" class="bg-blue-200 hover:bg-blue-600 duration-300 p-5 text-white rounded-lg text-md text-center font-bold">11:00</div>
         <div @click="setTime('12:00')" class="bg-blue-200 hover:bg-blue-600 duration-300 p-5 text-white rounded-lg text-md text-center font-bold">12:00</div>
         <div class="bg-gray-400 duration-300 p-5 text-white rounded-lg text-md text-center font-bold">13:00</div>
         <div :id="active" @click="setTime('14:00')" class="bg-blue-200 hover:bg-blue-600 duration-300 p-5 text-white rounded-lg text-md text-center font-bold">14:00</div>
         <div @click="setTime('16:00')" class="bg-blue-200 hover:bg-blue-600 duration-300 p-5 text-white rounded-lg text-md text-center font-bold">15:00</div>
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
          <select v-model="method"
              class="appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-light text-md focus:outline-none focus:bg-white focus:border-blue-500 duration-100"
              id="firstName">
            <option :value="Paypal" selected>Paypal</option>
            <option :value="PayNow">PayNow</option>
            </select>
          <!-- <p class="text-red-500 text-xs " v-if="errors.address">{{ errors.address }}</p> -->
        </div>
     
        <div class="mb-3">
          <button
            class="bg-blue-500 hover:bg-blue-700 mb-2  mt-5 w-full text-white py-4 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Book Appointment
          </button>
          <!-- <button @click="change()">Test</button> -->
        </div>
      </form>
      <!-- <button @click="Pay()"
            class="bg-blue-500 hover:bg-blue-700 mb-2  mt-5 w-full text-white py-4 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Pay
          </button> -->
          
  </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data(){
      return{
        doctors: {},
        appointmentType: [],
        typeOfAppointment:"",
        prices: [],
        active: "inactive", 
        id:"",
        specialisation:"",
        date:"",
        description:"",
        start:"",
        time:"",
        method:"",
        error: false,
        loading:false,
        errors: {},
      }
    },
  
    methods:{
      setTime(time){
        this.time = time;
        if(this.active === "active"){
          this.active ="inactive";
          this.time="";
        }else{
          this.active ="active";
        }
        
      },
      change(){
          alert(this.date)
      },
      fetchDoctors(){
        // console.log("Fetching Patient Data....");
        const URL = "https://hit200-group8.azurewebsites.net/v1/doctors/all";
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
      fetchAppointmentTypes(){
        // console.log("Fetching Patient Data....");
        const URL = "https://hit200-group8.azurewebsites.net/v1/enums/appointment_types";
        // const token = localStorage.token;
        // console.log('Token is string: ' + isString(token))
        // console.log(token);
        axios.get(URL,{
          headers: {'Content-Type': 'application/json',
              // Authorization : 'Bearer ' + token,
              'Access-Control-Allow-Origin': '*'}
        }).then((res) =>
         {
          this.appointmentType = res.data;
          console.log(this.appointmentType);
          console.log(typeof(this.appointmentType))
          console.log("Fetching Appointment Type Data Completed...");
        }) .catch(error => {
          console.log(error.code)
          this.error=error.code;
          this.errored = true
  
        }).finally(() => this.loading = false);
      },
      async Pay(){
            
          console.log("Paying...")
       // Your code for handling the login form submission
       if(this.method="Paypal"){
        try{
        this.loading=true;
        await axios.post('https://hit200-group8.azurewebsites.net/api/paypal/make/payment',{
            price: 50,
            currency: "USD",
            method: "Paypal",
            intent: "Sale",
            description: "Payment for Appointment"
        },{
            headers: {'Content-Type': 'application/json',
            Authorization : 'Bearer ' + localStorage.token,
            'Accept' : '*/*',
            'Access-Control-Allow-Origin': '*'
          },
            credentials: 'include',
          }).then((response) =>{
          const data = response.data;
          window.location.replace(data);
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
       }else{
        try{
        this.loading=true;
        await axios.post('https://hit200-group8.azurewebsites.net/api/paynow/web?invoiceNumber=1244&price=50&purpose=Sale',{
            // price: 50,
            // currency: "USD",
            // method: "Paypal",
            // intent: "Sale",
            // description: "Payment for Appointment"
        },{
            headers: {'Content-Type': 'application/json',
            Authorization : 'Bearer ' + localStorage.token,
            'Accept' : '*/*',
            'Access-Control-Allow-Origin': '*'
          },
            credentials: 'include',
          }).then((response) =>{
          const data = response.data;
          window.location.replace(data);
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
     
        },
        async BookAppointment(){
            
            this.errors = {};
            if(!this.id){
                this.errors.id = "Select a doctor is required";
                alert(this.errors.id)
            }
            if(!this.date){
                this.errors.date = "Date is required";
            }
            if(!this.description){
                this.errors.description = "Description is required";
            }
            if (Object.keys(this.errors).length === 0) {
              this.loading=true;
       // Your code for handling the login form submission
       try{
        await axios.post('https://hit200-group8.azurewebsites.net/v1/appointments/createAppointment?doctorId='+this.id+'&start='+this.date+'T'+this.time+'&appointmentType='+this.typeOfAppointment,{
          description: this.description
          // params:{
          //   doctorId:this.id,
          //   start:this.date
          // }
        },{
            headers: {
            'Content-Type': 'application/json',
            Authorization : 'Bearer ' + localStorage.token,
            'Accept' : '*/*',
            'Access-Control-Allow-Origin': '*'
          },
            credentials: 'include',
          }).then((response) =>{
          const data = response.data;
          console.log(data);
          alert(data);
          if(data==="Appointment Created"){
            alert("Proceed to payment")
            this.Pay();
          }else{
            alert("Sorry, Appointment already booked")
          }
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
        },
    },
    mounted(){
      this.fetchDoctors();
      this.fetchAppointmentTypes();
    }
  
  }
  </script>
  
  <style>
  #active{
    background-color: green;
  }
  #inactive{
    background-color: rgb(190, 229, 255);
  }
  </style>