<template>
  <div class="h-screen w-screen flex flex-col justify-between items-center bg-gray-100 text-lg">
     <div></div>
      <Nuxt/>
      <div class="bottom bg-[var(--primary)] flex flex-row justify-center gap-1 items-center text-white text-sm w-full p-3"><a>About </a> .<a>Terms and Conditions</a> .<a>FAQ</a> .<a>Copyright 2023 Group 8</a></div>
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