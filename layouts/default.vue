<template>
    <div class="flex flex-row w-full bg-gray-100">

        <!-- If user is Doctor -->
        <div v-if="doctor" class="flex flex-col w-full">
        <SideNavDoctor class="w-full"/>
       <Nuxt class="w-screen bg-gray-100 p-10 max-md:p-5"/>
       </div>

       <!-- If user is Patient -->
       <div v-if="patient" class="flex flex-row w-full">
        <SideNav class="w-1/6"/>
       <Nuxt class="w-5/6 bg-gray-100 p-10 max-md:p-5"/>
       </div>

       <!-- if user is Admin -->
       <div v-if="admin" class="flex flex-row w-full">
        <SideNavAdmin class="w-1/6"/>
        <Nuxt class="w-5/6 bg-gray-100 p-10 max-md:p-5"/>
       </div>
    </div>
  
</template>

<script>

import SideNav from '../components/navigation/SideNav.vue';
import auth from '@/assets/js/authenticated';
import SideNavDoctor from '../components/navigation/SideNavDoctor.vue';
import SideNavAdmin from '../components/navigation/SideNavAdmin.vue';

export default {
components:{SideNav,SideNavDoctor,SideNavAdmin},
data(){
    return{
        doctor: false,
        patient: false,
        admin:false,
    }
},
mounted(){
        if(!auth.Authenticate()){
            this.$router.push('/auth/login');
        }else{
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

</style>