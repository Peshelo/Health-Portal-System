<template>
    <div class="h-screen rounded-r-2xl flex flex-col justify-center items-center bg-blue-500 bg-gradient-to-t side">

      <nav class="">
         
      <!-- <h1 class="text-2xl text-center font-bold text-purple-300 pb-5 pt-5 max-md:hidden">HealthCare</h1> -->
      <!-- <h1 class="text-lg text-white pb-5 pt-5 max-md:hidden">Patient Portal</h1> -->
        <!-- <label class="text-yellow-300 py-3 px-2 text-sm">| General</label> -->
        <NuxtLink class="flex flex-col gap-2 items-center mt-2 p-2 rounded text-white font-medium text-sm hover:bg-blue-400 hover:text-white" to="/patient/" active-class="border-r-4 border-gray-50 rounded-none text-blue-700"><label class="text-xl mr-2">
         <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
   <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
   <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
   <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
</svg></label><label class="max-md:hidden text-xs">Dashboard</label></NuxtLink>
        <NuxtLink class="flex flex-col gap-2 items-center mt-2 py-3 px-5 rounded text-white font-medium text-sm hover:text-white" to="/patient/appointments" active-class="border-r-4 border-blue-300 rounded-none  text-blue-700"><label class="text-xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-time" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"></path>
   <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
   <path d="M15 3v4"></path>
   <path d="M7 3v4"></path>
   <path d="M3 11h16"></path>
   <path d="M18 16.496v1.504l1 1"></path>
</svg></label><label class="max-md:hidden text-xs">Appointments</label></NuxtLink>
        <NuxtLink class="flex flex-col text-center gap-2 items-center mt-2 py-3 px-5 mb-2 rounded text-white font-medium text-sm hover:bg-blue-400 hover:text-white"  to="/patient/medicalHistory" active-class="border-r-4 border-blue-300 rounded-none  text-blue-700"><label class="text-xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-report-medical" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
   <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
   <path d="M10 14l4 0"></path>
   <path d="M12 12l0 4"></path>
</svg></label><label class="max-md:hidden text-xs">Medical History</label></NuxtLink>
        <!-- <NuxtLink class="flex flex-col gap-2 items-center mt-2 py-3 px-5 mb-2 rounded text-white font-medium text-sm hover:bg-blue-400 hover:text-white" to="/patient/messages" active-class="border-r-4 border-blue-300 rounded-none  text-blue-700"><label class="text-xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
   <path d="M3 7l9 6l9 -6"></path>
</svg></label><label class="max-md:hidden text-xs">Messages</label></NuxtLink> -->
        <NuxtLink class="flex flex-col gap-2 items-center mt-2 py-3 px-5 mb-2 rounded text-white font-medium text-sm hover:bg-blue-400 hover:text-white" to="/patient/healthTips" active-class="border-r-4 border-blue-300 rounded-none  text-blue-700"><label class="text-xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hearts" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M14.017 18l-2.017 2l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8.153 5.784"></path>
   <path d="M15.99 20l4.197 -4.223a2.81 2.81 0 0 0 0 -3.948a2.747 2.747 0 0 0 -3.91 -.007l-.28 .282l-.279 -.283a2.747 2.747 0 0 0 -3.91 -.007a2.81 2.81 0 0 0 -.007 3.948l4.182 4.238z"></path>
</svg></label><label class="max-md:hidden text-xs">Health tips</label></NuxtLink>

        <NuxtLink class="flex flex-col text-center gap-2 items-center mt-2 py-3 px-5 rounded  text-white font-medium text-sm hover:bg-blue-400 hover:text-white" to="/patient/billing" active-class="border-r-4 border-blue-300 rounded-none  text-blue-700"><label class="text-xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-receipt-2" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"></path>
   <path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5"></path>
</svg></label><label class="max-md:hidden text-xs">Billing Information</label></NuxtLink>

        <NuxtLink class="flex flex-col gap-2 items-center mt-2 py-3 px-5 rounded text-white font-medium text-sm hover:bg-blue-400 hover:text-white" to="/patient/account" active-class="border-r-4 border-blue-300 rounded-none  text-blue-700"><label class="text-xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
   <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
</svg></label><label class="max-md:hidden text-xs">My Account</label></NuxtLink>
        <!-- <NuxtLink class="flex flex-col gap-2 items-center mt-2 py-3 px-5 rounded text-white font-medium text-sm hover:bg-blue-400 hover:text-white" to="/patient/settings" active-class="border-r-4 border-blue-300 rounded-none  text-blue-700"><label class="text-xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
   <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
</svg></label><label class="max-md:hidden text-xs">Settings</label></NuxtLink> -->
        <button @click="logout()" class="flex flex-col gap-2 items-center w-full mt-2 py-3 px-5 rounded  text-white font-medium text-sm hover:bg-blue-400 hover:text-white" to="/auth/login" active-class="border-r-4 border-blue-300 rounded-none  text-blue-700"><label class="text-xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
   <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
</svg></label><label class="max-md:hidden text-xs">Logout</label></button>

      </nav>
    </div>
    </template>
    <script>
   export default{
      methods:{
logout(){
   alert("logout")
   localStorage.token = "";
   this.$router.push("/");
localStorage.removeItem(token);

}
      }
   }
   </script>

    <style scoped>
    *{
      transition:100ms;
    }
    .side{
      position: sticky;
      position: -webkit-sticky;
      top: 0;
    }
    </style>

    
