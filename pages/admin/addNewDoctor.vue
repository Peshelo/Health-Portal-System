<template>
    <div class="flex flex-col justify-between items-center w-full h-full">
    <div class="flex flex-col justify-center py-10 px-5 w-full h-full">
        <!-- <img src="@/static/logo.png" alt="" srcset="" width="200"> -->
        <p v-if="!loading" class="mb-3 font-bold text-2xl text-black">Doctor Registration Form</p>
        <p v-if="loading" class="text-white">Submiting...</p>
        <img v-if="loading" src="https://i.stack.imgur.com/kOnzy.gif" alt="" srcset="" width="70px">
    <form v-else @submit.prevent="handleSubmit()" class="mt-2 w-full flex flex-col items-center">
      <p class="py-2 px-4 bg-red-200 text-red-400 border border-red-400 rounded-lg mb-2 w-full" v-if="this.errors.ERR">Error: {{this.errors.ERR}}</p>
      
      <div class="flex flex-row gap-1 w-full justify-between items-center">
          <div class="w-full">
              <input type="text" v-model="firstname" name="firstname" id="" placeholder="Firstname" class="py-3 px-2 border rounded-md text-lg border-gray-300 bg-white duration-200 mb-2 w-full focus:outline-none focus:border-b-[var(--secondary)]">
              <p v-if="this.errors.firstname" class="text-sm text-red-600 text-left mb-2">*{{this.errors.firstname}}</p>
          </div>
          <div class="w-full">
              <input type="text" v-model="lastname" name="lastname" id="" placeholder="Lastname" class="py-3 px-2 border rounded-md text-lg border-gray-300 bg-white duration-200 mb-2 w-full focus:outline-none focus:border-b-[var(--secondary)]">
              <p v-if="this.errors.lastname" class="text-sm text-red-600 text-left mb-2">*{{this.errors.lastname}}</p>
          </div>
      </div>
        <input type="email" v-model="email" name="email" id="" placeholder="Email" class="py-3 px-2 border rounded-md text-lg border-gray-300 bg-white duration-200 mb-2 w-full focus:outline-none focus:border-b-[var(--secondary)]">
        <p v-if="this.errors.email" class="text-sm text-red-600 text-left mb-2">*{{this.errors.email}}</p>
        <input type="text" v-model="mobile" name="mobile" id="" placeholder="Mobile" class="py-3 px-2 border rounded-md text-lg border-gray-300 bg-white duration-200 mb-2 w-full focus:outline-none focus:border-b-[var(--secondary)]">
        <p v-if="this.errors.mobile" class="text-sm text-red-600 text-left mb-2">*{{this.errors.mobile}}</p>
        <textarea v-model="address" name="address" id="" placeholder="Address" class="py-3 px-2 border rounded-md text-lg border-gray-300 bg-white duration-200 mb-2 w-full focus:outline-none focus:border-b-[var(--secondary)]"></textarea>
        <p v-if="this.errors.address" class="text-sm text-red-600 text-left mb-2">*{{this.errors.adress}}</p>
        <input type="text" v-model="specialisation" name="specialisation" id="" placeholder="Specialisation" class="py-3 px-2 border rounded-md text-lg border-gray-300 bg-white duration-200 mb-2 w-full focus:outline-none focus:border-b-[var(--secondary)]">
        <p v-if="this.errors.specialisation" class="text-sm text-red-600 text-left mb-2">*{{this.errors.specialisation}}</p>

        <input type="password" v-model="password" name="password" id="" placeholder="Password" class="py-3 px-2 border rounded-md text-lg border-gray-300 bg-white duration-200 mb-2 w-full focus:outline-none focus:border-b-[var(--secondary)]">
        <p v-if="this.errors.password" class="text-sm text-red-600 text-left mb-2">*{{this.errors.password}}</p>
        <input type="password" v-model="Confirmpassword" name="Confirmpassword" id="" placeholder="Re-enter Password" class="py-3 px-2 border rounded-md text-lg border-gray-300 bg-white duration-200 mb-2 w-full focus:outline-none focus:border-b-[var(--secondary)]">
        <p v-if="this.errors.password" class="text-sm text-red-600 text-left mb-2">*{{this.errors.Confirmpassword}}</p>
        <button class="py-2 bg-[var(--secondary)] text-white font-semibold rounded-md mt-5 text-2xl w-full">Register</button>
    </form>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    data(){
        return{
            loading:false,
          firstname: "",
          lastname: "",
          email: "",
          mobile: "",
          specialisation:"",
          address: "",
          password: "",
          Confirmpassword: "",
          errors: {}
        }
    },
    methods:{
        async handleSubmit(){
            this.errors = {};
            if(!this.firstname){
                this.errors.firstname = "Firstname is required";
            }
            if(!this.lastname){
                this.errors.lastname = "Lastname is required";
            }
            if(!this.email){
                this.errors.email = "Email is required";
            }
            if(!this.specialisation){
                this.errors.specialisation = "Email is required";
            }
            if(!this.mobile){
                this.errors.mobile = "Mobile number is required";
            }
            if(!this.address){
                this.errors.address = "Address is required";
            }
            if(!this.password){
                this.errors.password = "Enter password";
            } 
            if(!(this.password === this.Confirmpassword)){
                this.errors.Confirmpassword = "Passwords do not match";
            }
            if(!this.Confirmpassword){
                this.errors.Confirmpassword = "Re-enter password";
            }
           
           
            if (Object.keys(this.errors).length === 0) {
        // make API call or submit form data here
        this.loading =true;
        try{
        await axios.post('http://localhost:8080/v1/auth/register-doc',{
        firstname:this.firstname,
        lastname:this.lastname,
        email:this.email,
        mobile:this.mobile,
        specialisation:this.specialisation,
        address:this.address,
        password :this.password
        },{
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
          }).then((response) =>{
          const data = response.data;
        //   alert(response.data)
          this.response = data;
          console.log(response);
          const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
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
  title: 'New Doctor Created'
})
          // if(this.response === "User Not Found"){
          //   this.errors.failed = "Wrong Login details.";
          // }else{
            
          // }
        })

}catch(err){
console.log("Error:",err)
this.errors.failed = "Sorry, an error occured!";
this.errors.ERR = err;
}
        console.log("Form submitted successfully");
      }
        },
        test(){
            const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
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
  title: 'New Doctor Created'
})
        }
    }
    

}
</script>

<style>

</style>