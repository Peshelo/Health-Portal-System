<template>
    <div class="w-screen bg-blue-700 side">
      <nav class="flex flex-row justify-evenly">
      <h1 class="text-2xl font-bold text-white flex flex-row items-center pb-2 pt-2 max-md:hidden">                <img src="@/assets/images/logo1.png" alt="Glass bottle with black plastic pour top and mesh insert." class="h-20 w-20 flex-none rounded-lg object-cover object-center">
Doctor Portal</h1>
        <!-- <label class="text-yellow-300 py-3 px-2 text-sm">| General</label> -->
        <NuxtLink class="flex flew-row items-center mt-2 py-3 px-5 rounded-t text-white font-medium text-sm hover:bg-blue-400 hover:text-white" to="/doctor/" active-class="bg-blue-300 border-b-4 text-blue-700"><label class="text-xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
   <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
   <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
   <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
</svg></label><label class="max-md:hidden md:text-sm">Dashboard</label></NuxtLink>
        <NuxtLink class="flex flew-row items-center mt-2 py-3 px-5 rounded-t text-white font-medium text-sm hover:bg-blue-400 hover:text-white" to="/doctor/appointments" active-class="bg-blue-300 border-b-4 text-blue-700"><label class="text-xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-time" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"></path>
   <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
   <path d="M15 3v4"></path>
   <path d="M7 3v4"></path>
   <path d="M3 11h16"></path>
   <path d="M18 16.496v1.504l1 1"></path>
</svg></label><label class="max-md:hidden md:text-sm">Appointments</label></NuxtLink>
        <NuxtLink class="flex flew-row items-center mt-2 py-3 px-5 rounded-t text-white font-medium text-sm hover:bg-blue-400 hover:text-white"  to="/doctor/medicalHistory" active-class="bg-blue-300 border-b-4 text-blue-700"><label class="text-xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-report-medical" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
   <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
   <path d="M10 14l4 0"></path>
   <path d="M12 12l0 4"></path>
</svg></label><label class="max-md:hidden md:text-sm">Medical History</label></NuxtLink>
        <NuxtLink class="flex flew-row items-center mt-2 py-3 px-5 rounded-t text-white font-medium text-sm hover:bg-blue-400 hover:text-white" to="/doctor/patients" active-class="bg-blue-300 border-b-4 text-blue-700"><label class="text-xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
   <path d="M3 7l9 6l9 -6"></path>
</svg></label><label class="max-md:hidden md:text-sm">Patients</label></NuxtLink>
        <!-- <NuxtLink class="flex flew-row items-center mt-2 py-3 px-5 rounded-t  text-white font-medium text-sm hover:bg-blue-400 hover:text-white" to="/patient/billing" active-class="bg-blue-300 border-b-4 text-blue-700"><label class="text-xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-receipt-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"></path>
   <path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5"></path>
</svg></label><label class="max-md:hidden md:text-sm">Billing Information</label></NuxtLink> -->
        <NuxtLink class="flex flew-row items-center mt-2 py-3 px-5 rounded-t text-white font-medium text-sm hover:bg-blue-400 hover:text-white" to="/doctor/account" active-class="bg-blue-300 border-b-4 text-blue-700"><label class="text-xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
   <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
</svg></label><label class="max-md:hidden md:text-sm">My Account</label></NuxtLink>
        <NuxtLink class="flex flew-row items-center mt-2 py-3 px-5 rounded-t  text-white font-medium text-sm hover:bg-blue-400 hover:text-white" to="/auth/login" active-class="bg-blue-300 border-b-4 text-blue-700"><label class="text-xl mr-2"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
   <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
</svg></label><label class="max-md:hidden md:text-sm">Logout</label></NuxtLink>

      </nav>
    </div>
    </template>

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
