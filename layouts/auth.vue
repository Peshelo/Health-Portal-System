<template>
  <div class="h-screen bg-gradient-to-t from-cyan-500 to-blue-500 w-screen flex flex-col justify-center items-center text-lg">
     <div class="flex flex-row w-full h-full">
        <!-- <div  class="w-full bg-gradient-to-t from-cyan-500 to-blue-500 max-md:hidden bg-white flex flex-col justify-center items-center p-10 text-white border-r-1"><h1 class="text-4xl font-extrabold">HealthCare</h1><svg xmlns="http://www.w3.org/2000/svg" class="icon m-0 icon-tabler icon-tabler-brand-google-fit" width="300" height="300" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 9.314l-2.343 -2.344a3.314 3.314 0 0 0 -4.686 4.686l2.343 2.344l4.686 4.686l7.03 -7.03a3.314 3.314 0 0 0 -4.687 -4.685l-7.03 7.029"></path>
</svg></div> -->
        <Nuxt class="h-full w-full"/>
     </div>
      <!-- <div class="bottom bg-[var(--secondary)] flex flex-row justify-center gap-1 items-center text-white text-sm w-full p-3"><a>About </a> .<a>Terms and Conditions</a> .<a>FAQ</a> .<a>Copyright 2023 Group 8</a></div> -->
  </div>

</template>

<script>
import auth from '@/assets/js/authenticated'
export default {
  data(){
    return{
        doctor: false,
        patient: true,
        admin:false,
    }
},
mounted(){
        if(auth.Authenticate()){
          if(localStorage.role === "PATIENT"){
                this.patient= true;
            }
            if(localStorage.role === "DOCTOR"){
                this.doctor= true;
            }
            if(localStorage.role === "ADMIN"){
                this.admin= true;
            }  
        }
    }
}
</script>

<style>
.bottom{
 bottom: 0;
 left:0;
}
</style>