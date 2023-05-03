<template>
    <div class="container flex flex-col justify-center items-center h-fit bg-white">
      <h3 class="text-2xl mt-10 text-black font-bold py-5">Add Appointment</h3>
      <h1 v-if="loading || paying" class="w-full p-10 my-2 rounded-lg bg-white animate-pulse text-black text-center">Processing Request...
      <br><a v-if="link !== null" :href="this.link" class="text-blue-400 underlined">Click here if it takes longer</a>
      </h1>
      <img v-if="loading || paying" src="https://i.stack.imgur.com/kOnzy.gif" alt="" srcset="" width="50px">
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
           Why do you need an appointment?
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
          <input v-model="date" @change="fetchBookedAppointments()"
            class=" appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-light text-md focus:outline-none focus:bg-white focus:border-blue-500 duration-100"
            id="mobile" type="date"/>
          <!-- <p class="text-red-500 text-xs " v-if="errors.mobile">{{ errors.mobile }}</p> -->
        </div>
        <h1 class="text-md my-3 mt-10 font-bold">Select a time slot</h1>
        <div class="mb-3 grid grid-cols-4 gap-3 py-10 px-2 rounded-lg border">
         <div v-for="(appointment,index) in availableAppointment" :key="index" @click="setTime(appointment)" class="bg-blue-200 hover:bg-blue-600 duration-300 p-5 text-white rounded-lg text-md text-center font-bold">{{appointment}}</div>
        <br><h1 class="text-lg font-bold my-3 w-full">SELECTED: {{this.time}}</h1> 
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
            <option value="Paypal" selected>Paypal</option>
            <option value="PayNow">PayNow</option>
            </select>
          <!-- <p class="text-red-500 text-xs " v-if="errors.address">{{ errors.address }}</p> -->
        </div>
     
        <div class="mb-3">
          <button
            class="bg-blue-500 hover:bg-blue-700 mb-2  mt-5 w-full text-white py-4 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Book Appointment
          </button>
          <button @click="change()">Test</button>
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
  import Swal from 'sweetalert2'
  export default {
    data(){
      return{
        doctors: {},
        link:"",
        appointmentType: [],
        availableAppointment:[
          "08:00",
          "09:00",
          "10:00",
          "11:00",
          "12:00",
          // "13:00",
          "14:00",
          "15:00",
        ],
       presetAppointment:[
          "08:00",
          "09:00",
          "10:00",
          "11:00",
          "12:00",
          // "13:00",
          "14:00",
          "15:00",
        ],
        bookedAppointment:[
        ],
        typeOfAppointment:"",
        prices: [],
        paying:false,
        active: "inactive",
        id:"",
        specialisation:"",
        date:"2023-05-03",
        description:"I need an appoinment",
        start:"",
        time:"",
        method:"Paypal",
        error: false,
        loading:false,
        errors: {},
      }
    },
  
    methods:{
      setTime(time){
        this.time = time;
        // if(this.active === "active"){
        //   this.active ="inactive";
        //   this.time="";
        // }else{
        //   this.active ="active";
        // }
        
      },
      change(){
          // alert(this.date)
      },
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
      fetchAppointmentTypes(){
        // console.log("Fetching Patient Data....");
        const URL = "http://localhost:8080/v1/enums/appointment_types";
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
      fetchBookedAppointments(){
        // console.log("Fetching Patient Data....");
        const URL = "http://localhost:8080/v1/appointments/get-booked-slots?doctorId=2&date="+this.date;
        const token = localStorage.token;
        // console.log('Token is string: ' + isString(token))
        // console.log(token);
        axios.get(URL,{
          headers: {'Content-Type': 'application/json',
              Authorization : 'Bearer ' + token,
              'Access-Control-Allow-Origin': '*'}
        }).then((res) =>
         {
          this.bookedAppointment = res.data;
          this.filterSlot();
          console.log(this.bookedAppointment);
          console.log(typeof(this.bookedAppointment))
          console.log("Fetching  Appointment Data Completed...");
        }) .catch(error => {
          console.log(error.code)
          this.error=error.code;
          this.errored = true
  
        }).finally(() => this.loading = false);
      },
      async Pay(){
        this.loading=true; 
        this.paying=true;
          console.log("Paying...")
       // Your code for handling the login form submission
       if(this.method="Paypal"){
        try{
        
        await axios.post('http://localhost:8080/api/paypal/make/payment',{
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
          this.link = data;
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
       if(this.method==="PayNow"){
        alert("Requesting PayNow...")
        try{
        this.loading=true;
        await axios.post('http://localhost:8080/api/paynow/web?invoiceNumber=1454&price=50&purpose=Sale',{
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
        await axios.post('http://localhost:8080/v1/appointments/createAppointment?doctorId='+this.id+'&start='+this.date+'T'+this.time+'&appointmentType='+this.typeOfAppointment+'&description='+this.description,{
          // description: this.description
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
          // alert(data);
          if(data==="Appointment Created"){
  const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 7000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'success',
  title: 'Appointment Created Succesfully'
})
            alert("Proceed to payment")
            this.Pay();
          }else{
            const Toast = Swal.mixin({
  toast: true,
  position: 'top-center',
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'success',
  title: 'Appointment Already Booked'
})
            // alert("Sorry, Appointment already booked")
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
        setDate(){
          const date = new Date().toJSON().split('T')[0];

          // let currentDate = `${year}-${month}-${day}`;
          // let month = data.getMonth()
          // alert(date);
          this.date=date;
        },
        filterSlot(){
          console.log("Filtering...")
          var x=0;
          var y=0;
console.log("Booked:"+this.bookedAppointment.length)
          for(x=0;x<this.bookedAppointment.length;x++){
            // console.log("In loop 1")
            for(y=0;y<=this.availableAppointment.length;y++){
              // console.log("In loop")
              if(this.bookedAppointment[x] === this.availableAppointment[y]){
                // alert("Test")
                this.availableAppointment.splice(y,1)
              }
            }
          }
        }
    },
    mounted(){
      this.filterSlot();
      this.setDate();
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