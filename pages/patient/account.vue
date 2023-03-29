<template>
    <div>
      <Header title="My Account" sub="This is your account."/>
      <div class="flex flex-row p-5 justify-between bg-white border items-center rounded my-5 hover:shadow-lg ">
        <p class="text-lg font-bold text-gray-600">Account Information</p>
        <!-- <button class="bg-green-500 text-white w-fit h-fit p-2 text-sm rounded hover:bg-blue-500 ">Add New</button> -->
      </div>
      <div>
        <form @submit.prevent="handleSubmit()" class="mt-2 p-5 flex flex-col rounded">
        <h1 class="text-lg mb-2">Personal information</h1>
      <p class="py-2 px-4 bg-red-200 text-red-400 border border-red-400 rounded mb-2 w-full" v-if="this.errors.ERR">Error: {{this.errors.ERR}}</p>
      
      <div class="flex flex-row gap-1 w-full">
          <div class="w-1/2">
              <input type="text" v-model="patient.firstname" name="firstname" id="" placeholder="Firstname" class="py-2 px-4 border rounded mb-2 w-full focus:outline-none focus:border-[var(--secondary)] ">
              <p v-if="this.errors.firstname" class="text-sm text-red-600 text-left mb-2">*{{this.errors.firstname}}</p>
          </div>
          <div class="w-1/2">
              <input type="text" v-model="patient.lastname" name="lastname" id="" placeholder="Lastname" class="py-2 px-4 border rounded mb-2 w-full focus:outline-none focus:border-[var(--secondary)] ">
              <p v-if="this.errors.lastname" class="text-sm text-red-600 text-left mb-2">*{{this.errors.lastname}}</p>
          </div>
      </div>
        <input type="email" v-model="patient.email" name="email" id="" placeholder="Email" class="py-2 px-4 border rounded mb-2 w-full focus:outline-none focus:border-[var(--secondary)] ">
        <p v-if="this.errors.email" class="text-sm text-red-600 text-left mb-2">*{{this.errors.email}}</p>
        <input type="text" v-model="patient.mobile" name="mobile" id="" placeholder="Mobile" class="py-2 px-4 border rounded mb-2 w-full focus:outline-none focus:border-[var(--secondary)] ">
        <p v-if="this.errors.mobile" class="text-sm text-red-600 text-left mb-2">*{{this.errors.mobile}}</p>
        <textarea v-model="patient.address" name="address" id="" placeholder="Address" class="py-2 px-4 border rounded mb-2 w-full focus:outline-none focus:border-[var(--secondary)] "></textarea>
        <p v-if="this.errors.address" class="text-sm text-red-600 text-left mb-2">*{{this.errors.adress}}</p>
        <input type="password" v-model="patient.password" name="password" id="" placeholder="Password" class="py-2 px-4 border rounded mb-2 w-full focus:outline-none focus:border-[var(--secondary)] ">
        <p v-if="this.errors.password" class="text-sm text-red-600 text-left mb-2">*{{this.errors.password}}</p>
        <input type="password" v-model="patient.Confirmpassword" name="Confirmpassword" id="" placeholder="Re-enter Password" class="py-2 px-4 border rounded mb-2 w-full focus:outline-none focus:border-[var(--secondary)] ">
        <p v-if="this.errors.password" class="text-sm text-red-600 text-left mb-2">*{{this.errors.Confirmpassword}}</p>
        <button @click="handleSubmit()" class="py-2 bg-[var(--primary)] text-white font-semibold rounded w-full">Update</button>
        
    </form>
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
            patient:[{
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
            if(!this.patient.firstname){
                this.errors.firstname = "Firstname is required";
            }
            if(!this.patient.email){
                this.errors.lastname = "Lastname is required";
            }
            if(!this.patient.email){
                this.errors.email = "Email is required";
            }
            if(!this.patient.mobile){
                this.errors.mobile = "Mobile number is required";
            }
            if(!this.patient.address){
                this.errors.address = "Address is required";
            }
            if(!this.patient.password){
                this.errors.password = "Enter password";
            } 
            if(!(this.password === this.Confirmpassword)){
                this.errors.Confirmpassword = "Passwords do not match";
            }
            if(!this.patient.Confirmpassword){
                this.errors.Confirmpassword = "Re-enter password";
            }
           
           
            if (Object.keys(this.errors).length === 0) {
        // make API call or submit form data here
        const token = localStorage.token;
        try{
        await axios.put('http://localhost:8080/v1/update/patients/'+this.patient.id,{
        firstName:this.patient.firstName,
        lastName:this.patient.lastName,
        email:this.patient.email,
        mobile:this.patient.mobile,
        address:this.patient.address,
        password :this.patient.password,
        role :"Patient"
        },{
        headers: {'Content-Type': 'application/json',
            Authorization : 'Bearer ' + token,
            'Access-Control-Allow-Origin': '*'}
      }).then((response) =>{
          const data = response.data;
          this.response = data;
          console.log(response);
          this.$router.push('./login')
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
        
    },
    mounted(){
        this.fetchPatient();
    }
  }
  </script>
  
  <style>
  
  </style>