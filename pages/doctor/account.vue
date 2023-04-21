<template>
    <div>
      <Header title="My Account" sub="This is your account."/>
      <div class="flex flex-row p-5 justify-between bg-white border items-center rounded my-5 hover:shadow-lg ">
        <p class="text-lg font-bold text-gray-600">Account Information</p>
        <!-- <button class="bg-green-500 text-white w-fit h-fit p-2 text-sm rounded hover:bg-blue-500 ">Add New</button> -->
      </div>
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
<div class="space-y-6" action="#" method="POST">

  <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
        <p class="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
      </div>
      <div class="mt-5 md:col-span-2 md:mt-0">
        <div>
        <form @submit.prevent="handleSubmit()" class="mt-2 p-5 flex flex-col rounded">
        <h1 class="text-lg mb-2">Personal information</h1>
      <p class="py-2 px-4 bg-red-200 text-red-400 border border-red-400 rounded mb-2 w-full" v-if="this.errors.ERR">Error: {{this.errors.ERR}}</p>
      
      <div class="flex flex-row gap-1 w-full">
          <div class="w-1/2">
              <input type="text" v-model="doctor.firstname" name="firstname" id="" placeholder="Firstname" class="py-2 px-4 border-b mb-2 w-full focus:outline-none focus:border-[var(--secondary)] ">
              <p v-if="this.errors.firstname" class="text-sm text-red-600 text-left mb-2">*{{this.errors.firstname}}</p>
          </div>
          <div class="w-1/2">
              <input type="text" v-model="doctor.lastname" name="lastname" id="" placeholder="Lastname" class="py-2 px-4 border-b mb-2 w-full focus:outline-none focus:border-[var(--secondary)] ">
              <p v-if="this.errors.lastname" class="text-sm text-red-600 text-left mb-2">*{{this.errors.lastname}}</p>
          </div>
      </div>
        <input type="email" v-model="doctor.email" name="email" id="" placeholder="Email" class="py-2 px-4 border-b mb-2 w-full focus:outline-none focus:border-[var(--secondary)] ">
        <p v-if="this.errors.email" class="text-sm text-red-600 text-left mb-2">*{{this.errors.email}}</p>
        <input type="text" v-model="doctor.mobile" name="mobile" id="" placeholder="Mobile" class="py-2 px-4 border-b mb-2 w-full focus:outline-none focus:border-[var(--secondary)] ">
        <p v-if="this.errors.mobile" class="text-sm text-red-600 text-left mb-2">*{{this.errors.mobile}}</p>
        <textarea v-model="doctor.address" name="address" id="" placeholder="Address" class="py-2 px-4 border-b mb-2 w-full focus:outline-none focus:border-[var(--secondary)] "></textarea>
        <p v-if="this.errors.address" class="text-sm text-red-600 text-left mb-2">*{{this.errors.adress}}</p>
        <input type="password" v-model="doctor.password" name="password" id="" placeholder="Password" class="py-2 px-4 border-b mb-2 w-full focus:outline-none focus:border-[var(--secondary)] ">
        <p v-if="this.errors.password" class="text-sm text-red-600 text-left mb-2">*{{this.errors.password}}</p>
        <input type="password" v-model="doctor.Confirmpassword" name="Confirmpassword" id="" placeholder="Re-enter Password" class="py-2 px-4 border-b mb-2 w-full focus:outline-none focus:border-[var(--secondary)] ">
        <p v-if="this.errors.password" class="text-sm text-red-600 text-left mb-2">*{{this.errors.Confirmpassword}}</p>
        <button @click="handleSubmit()" class="py-2 bg-[var(--primary)] text-white font-semibold rounded w-full">Update</button>
        
    </form>
      </div>
      </div>
    </div>
  </div>

  <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
        <p class="mt-1 text-sm text-gray-500">Decide which communications you'd like to receive and how.</p>
      </div>
      <div class="mt-5 space-y-6 md:col-span-2 md:mt-0">
        <fieldset>
          <legend class="sr-only">By Email</legend>
          <div class="text-base font-medium text-gray-900" aria-hidden="true">By Email</div>
          <div class="mt-4 space-y-4">
            <div class="flex items-start">
              <div class="flex h-5 items-center">
                <input id="comments" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
              </div>
              <div class="ml-3 text-sm">
                <label for="comments" class="font-medium text-gray-700">Comments</label>
                <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="flex h-5 items-center">
                <input id="candidates" name="candidates" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
              </div>
              <div class="ml-3 text-sm">
                <label for="candidates" class="font-medium text-gray-700">Candidates</label>
                <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="flex h-5 items-center">
                <input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
              </div>
              <div class="ml-3 text-sm">
                <label for="offers" class="font-medium text-gray-700">Offers</label>
                <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend class="contents text-base font-medium text-gray-900">Push Notifications</legend>
          <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
          <div class="mt-4 space-y-4">
            <div class="flex items-center">
              <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500">
              <label for="push-everything" class="ml-3 block text-sm font-medium text-gray-700">Everything</label>
            </div>
            <div class="flex items-center">
              <input id="push-email" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500">
              <label for="push-email" class="ml-3 block text-sm font-medium text-gray-700">Same as email</label>
            </div>
            <div class="flex items-center">
              <input id="push-nothing" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500">
              <label for="push-nothing" class="ml-3 block text-sm font-medium text-gray-700">No push notifications</label>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </div>

  <div class="flex justify-end">
    <button type="button" class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Cancel</button>
    <button type="submit" class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
  </div>
</div>

      <div>

      </div>
      <!-- <Account/> -->
    </div>
  </template>
  
  <script>
  import Header from '~/components/navigation/Header.vue';
import Account from '../../components/extras/Account.vue';
  import axios from 'axios'
  export default {
  components:{ Header, Account },
  data(){
    return{
            doctor:[{
                firstname: "",
          lastname: "",
          email: "",
          mobile: "",
          address: "",
          password: "",
          Confirmpassword: "",
            }],
          
          errors: {}
        }
  },
  methods:{
        async handleSubmit(){
            this.errors = {};
            if(!this.doctor.firstname){
                this.errors.firstname = "Firstname is required";
            }
            if(!this.doctor.email){
                this.errors.lastname = "Lastname is required";
            }
            if(!this.doctor.email){
                this.errors.email = "Email is required";
            }
            if(!this.doctor.mobile){
                this.errors.mobile = "Mobile number is required";
            }
            if(!this.doctor.address){
                this.errors.address = "Address is required";
            }
            if(!this.doctor.password){
                this.errors.password = "Enter password";
            } 
            if(!(this.password === this.Confirmpassword)){
                this.errors.Confirmpassword = "Passwords do not match";
            }
            if(!this.doctor.Confirmpassword){
                this.errors.Confirmpassword = "Re-enter password";
            }
           
           
            if (Object.keys(this.errors).length === 0) {
        // make API call or submit form data here
        const token = localStorage.token;
        try{
        await axios.put('http://localhost:8080/v1/doctor/update/'+this.doctor.id,{
        firstName:this.doctor.firstName,
        lastName:this.doctor.lastName,
        email:this.doctor.email,
        mobile:this.doctor.mobile,
        address:this.doctor.address,
        password :this.doctor.password,
        },{
        headers: {'Content-Type': 'application/json',
            Authorization : 'Bearer ' + token,
            'Access-Control-Allow-Origin': '*'}
      }).then((response) =>{
          const data = response.data;
        //   this.response = data;
          console.log(response);
        //   this.$router.push('./login')
          // if(this.response === "User Not Found"){
          //   this.errors.failed = "Wrong Login details.";
          // }else{
            
          // }
        })

}catch(err){
console.log("Error:",err)
this.errors.failed = "Sorry, an error occured!";
}
        console.log("Form submitted successfully");
      }
        },
        async fetchDoctor(){
      // console.log("Fetching doctor Data....");
      this.loading = true;
      const URL = "http://localhost:8080/v1/doctors/all";
      const token = localStorage.token;
      // console.log('Token is string: ' + isString(token))
      // console.log(token);
      await axios.get(URL,{
        headers: {'Content-Type': 'application/json',
            Authorization : 'Bearer ' + token,
            'Access-Control-Allow-Origin': '*'}
      }).then((res) =>
       {
        this.doctor = res.data;
        console.log(this.doctor);
        console.log(typeof(this.doctor))
        console.log("Fetching  Doctors Data Completed...");
      }) .catch(error => {
        console.log(error.code)
        this.error=error.code;
        this.errored = true

      }).finally(() => this.loading = false);
    },
        
    },
    mounted(){
        this.fetchDoctor();
    }
  }
  </script>
  
  <style>
  
  </style>