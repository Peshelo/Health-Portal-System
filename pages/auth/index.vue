<template>
  
    <div class="flex flex-col w-full h-full justify-center items-center gap-y-2">
      <h1 class="text-4xl mmedium text-gray-100">Choose an account</h1>
      <p class="text-xs w-1/2 text-center text-white">Hello there! Thank you for choosing us. Register an account and able to find what you are looking for.</p>
      <div class="flex flex-row max-sm:flex-col max-sm:gap-y-5 gap-x-10 mt-10">
        <div class="flex flex-col">
                <nuxt-link to="./doctorSignup" class="shadow-lg text-4xl p-10 rounded-md bg-white hover:border-green-600 duration-300 border-4 font-bold">Doctor account</nuxt-link>
                <p class="text-sm text-white mt-2">I want to manage and find patients on the platform</p>
        </div>
        <div class="flex flex-col">
                <nuxt-link to="./signup" class="shadow-lg text-4xl  p-10 rounded-md bg-white hover:border-green-600 duration-300 border-4 font-bold">Patient account</nuxt-link>
                <p class="text-sm text-white mt-2">I am manage my health and find book appointments</p>
        </div>
        <!-- <nuxt-link to="./agentSignup.vue" class="p-20 rounded-md border-2">Tenant account</nuxt-link> -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
  layout: "auth"
  }
  </script>
  
  <style>
  
  </style>