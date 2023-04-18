<template>
    <div class="flex flex-row justify-between  h-full">
    <div class="flex flex-col justify-center items-center py-10 px-5 w-1/2 h-full">
        <!-- <img src="@/static/logo.png" alt="" srcset="" width="200"> -->
        <p v-if="!loading" class="mb-3 font-bold text-2xl">Signup</p>
        <p v-if="loading">Submiting...</p>
    <form v-else @submit.prevent="handleSubmit()" class="mt-2 p-10 w-full max-md:w-8/12  rounded-2xl flex flex-col items-center">
      <p class="py-2 px-4 bg-red-200 text-red-400 border border-red-400 rounded-lg mb-2 w-full" v-if="this.errors.ERR">Error: {{this.errors.ERR}}</p>
      
      <div class="flex flex-row gap-1 w-full justify-between items-center">
          <div class="w-full">
              <input type="text" v-model="firstname" name="firstname" id="" placeholder="Firstname" class="py-2 px-1 border-b border-gray-300 text-sm duration-200 mb-2 w-full focus:outline-none focus:border-b-[var(--secondary)]">
              <p v-if="this.errors.firstname" class="text-sm text-red-600 text-left mb-2">*{{this.errors.firstname}}</p>
          </div>
          <div class="w-full">
              <input type="text" v-model="lastname" name="lastname" id="" placeholder="Lastname" class="py-2 px-1 border-b border-gray-300 text-sm duration-200 mb-2 w-full focus:outline-none focus:border-b-[var(--secondary)]">
              <p v-if="this.errors.lastname" class="text-sm text-red-600 text-left mb-2">*{{this.errors.lastname}}</p>
          </div>
      </div>
        <input type="email" v-model="email" name="email" id="" placeholder="Email" class="py-2 px-1 border-b border-gray-300 text-sm duration-200 mb-2 w-full focus:outline-none focus:border-b-[var(--secondary)]">
        <p v-if="this.errors.email" class="text-sm text-red-600 text-left mb-2">*{{this.errors.email}}</p>
        <input type="text" v-model="mobile" name="mobile" id="" placeholder="Mobile" class="py-2 px-1 border-b border-gray-300 text-sm duration-200 mb-2 w-full focus:outline-none focus:border-b-[var(--secondary)]">
        <p v-if="this.errors.mobile" class="text-sm text-red-600 text-left mb-2">*{{this.errors.mobile}}</p>
        <textarea v-model="address" name="address" id="" placeholder="Address" class="py-2 px-1 border-b border-gray-300 text-sm duration-200 mb-2 w-full focus:outline-none focus:border-b-[var(--secondary)]"></textarea>
        <p v-if="this.errors.address" class="text-sm text-red-600 text-left mb-2">*{{this.errors.adress}}</p>
        <input type="password" v-model="password" name="password" id="" placeholder="Password" class="py-2 px-1 border-b border-gray-300 text-sm duration-200 mb-2 w-full focus:outline-none focus:border-b-[var(--secondary)]">
        <p v-if="this.errors.password" class="text-sm text-red-600 text-left mb-2">*{{this.errors.password}}</p>
        <input type="password" v-model="Confirmpassword" name="Confirmpassword" id="" placeholder="Re-enter Password" class="py-2 px-1 border-b border-gray-300 text-sm duration-200 mb-2 w-full focus:outline-none focus:border-b-[var(--secondary)]">
        <p v-if="this.errors.password" class="text-sm text-red-600 text-left mb-2">*{{this.errors.Confirmpassword}}</p>
        <button class="py-2 bg-[var(--secondary)] text-white font-semibold rounded-md mt-5 w-full">Sign Up</button>
        <p class="text-sm text-gray-400 mt-5">Already have an account? <a href="/auth/login" class="text-red-300">Login</a></p>
    </form>
    </div>
    <div class="w-2/3">
        <div class="absolute p-10 flex flex-col justify-between h-full">
            <img src="https://campbellbirch.com/wp-content/uploads/2018/12/white_logo_transparent.png" width="200px">
            <div class="mb-10 text-white">
                <h1 class="text-2xl bbold text-center">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rerum consequuntur sint odit labore accusantium."</h1>
                <p class="text-gray-300 text-center">Simple, Fast, Convinience</p>
            </div>
        </div>
            <img src="https://save.org/wp-content/uploads/2016/05/about-suicide-dark-filter-.jpg" alt="wallpaper" srcset="" class="w-full h-full rounded-l-3xl object-cover">
    </div> 
    </div>
</template>

<script>
import axios from 'axios'
export default {
    layout:'auth',
    data(){
        return{
          firstname: "",
          lastname: "",
          email: "",
          mobile: "",
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
            if(!this.email){
                this.errors.lastname = "Lastname is required";
            }
            if(!this.email){
                this.errors.email = "Email is required";
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
        try{
        await axios.post('http://localhost:8080/v1/auth/register',{
        firstname:this.firstname,
        lastname:this.lastname,
        email:this.email,
        mobile:this.mobile,
        address:this.address,
        password :this.password
        },{
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
          }).then((response) =>{
          const data = response.data;
          alert(response.data)
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
this.errors.ERR = err;
}
        console.log("Form submitted successfully");
      }
        }
    }
    

}
</script>

<style>

</style>