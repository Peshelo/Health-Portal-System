<template>
  <div class="h-screen bg-gradient-to-t from-cyan-500 to-blue-500 w-screen flex flex-col justify-between items-center text-lg">
     <div class="flex flex-row w-full h-full">
        <Nuxt class="h-full"/>
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