<template>
    <div class="flex flex-col justify-center items-center w-fit h-full">
    <div class="flex flex-col justify-center items-center py-10 px-5 h-full">
        <!-- <p class="mb-3 font-extrabold text-4xl text-white">HealthCare</p> -->
        <p v-if="!loading" class="mb-3 font-bold text-2xl text-gray-100">Login</p>
        <p  class="text-white" v-if="loading">Loading...</p>
        <img v-if="loading" src="https://i.stack.imgur.com/kOnzy.gif" alt="" srcset="" width="50px">
      
    <form v-else @submit.prevent="handleSubmit()" class="mt-2 p-10 w-full bg-white shadow-lg rounded-lg flex flex-col items-center">
      <p></p>
        <p class="py-2 px-4 bg-red-400 text-red-100 border border-red-500 rounded-md mb-2 w-full" v-if="this.errors.ERR">Error: {{this.errors.ERR}}</p>
        <input type="email" v-model="email" name="email" id="" placeholder="Email" class="py-2 px-4 border rounded-md mb-2 w-full focus:outline-none focus:border-[var(--secondary)] ">
        <p v-if="this.errors.email" class="text-sm text-red-600 text-left mb-2">*{{this.errors.email}}</p>
        <input type="password" v-model="password" name="password" id="" placeholder="Password" class="py-2 px-4 border rounded-md mb-2 w-full focus:outline-none focus:border-[var(--secondary)] ">
        <p v-if="this.errors.password" class="text-sm text-red-600 text-left mb-2">*{{this.errors.password}}</p>
        <button class="py-2 bg-[var(--primary)] text-white font-semibold rounded-md w-full">Login</button>
        <p class="text-sm text-gray-400 mt-5">Do not have an account? <a href="/auth/signup" class="text-red-300">Sign up</a></p>
    </form>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    layout:'auth',
    data(){
        return{
            email: "",
            password: "",
            token: '',
      role: '',
            loading: false,
            errored:false,
            errors: {}
        }
    },
    methods:{
      parseResponseString(responseString) {
      const parts = responseString.split(' ')
      const token = parts[2]
      const role = parts[4].slice(1, -1)
      return { token, role }
    },
        async handleSubmit(){
            this.loading=true;
            this.errors = {};
            if(!this.email){
                this.errors.email = "Email is required";
            }
            if(!this.password){
                this.errors.password = "Enter password";
            }
            if (Object.keys(this.errors).length === 0) {
       // Your code for handling the login form submission
       try{
        await axios.post('http://localhost:8080/v1/auth/login',{
        email:this.email,
        password :this.password
        },{
            headers: {'Content-Type': 'application/json',
            // Authorization : 'Bear' + localStorage.token,
            'Accept' : '*/*',
            'Connection' : 'keep-alive',
            'Access-Control-Allow-Origin': '*'
          },
            credentials: 'include',
          }).then((response) =>{
          const data = response.data;
          console.log(data);

          if(response.data == "User Not Found"){
            this.errors.ERR = "Wrong Login details...";
          }else{
            const parts = data.split(':')
              this.token = parts[1].trim().replace(' role', '')
              this.role = parts[2].trim().replace('[', '').replace(']', '')
              localStorage.token = this.token;
              localStorage.role = this.role;
              this.success="";
              this.success = "Login Sucessful...";
            console.log("Login Successful..")
            // localStorage.removeItem(token);
            // localStorage.token = response.data;
            // console.log(localStorage.token)
            if(this.role === "PATIENT"){
              this.$router.push('/patient/')
            }
            if(this.role === "DOCTOR"){
              this.$router.push('/doctor/')
            }
            if(this.role === "ADMIN"){
              this.$router.push('/admin/')

            }
          }
        }).catch(error => {
        console.log(error)
        this.errored = true
        this.errors.ERR=error
        
      }).finally(() => this.loading = false);

}catch(err){
  this.errors.network = "Error: " + err.message;
  this.errors.ERR = err;
console.log("Error:",err.message);
this.loading=false;
}
      }
        }
    }
    

}
</script>

<style>

</style>