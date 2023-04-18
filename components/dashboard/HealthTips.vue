<template>
    <!-- This is an example component -->
  <div>
      <div class="container py-3 mx-auto grid">
          <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-2">
              <div v-for="(tip,index) in tips" :key="index" class="flex items-center p-4 bg-white rounded-lg shadow-xs border border-l-8">
                  <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler w-7 h-7 icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
     <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
     <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
     <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
     <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
  </svg>
                  </div>
                  <div>
                    <p class="text-md font-semibold text-gray-700">
                         {{ tip.author }}
                      </p>
                      <p class="mb-2 text-sm font-medium text-gray-600 text-justify">
                        {{ tip.content }}
                      </p>
                     
                  </div>
              </div>
          
          </div>
      </div>
      
  </div>
  </template>
  
  <script>
    import axios from 'axios';
  export default {
    data(){
        return{
            tips:null,
        }
    },
  methods:{

  async getTips(){
      // console.log("Fetching tips Data....");
      this.loading = true;
      const URL = "https://inshorts.deta.dev/news?category=science";
      // const token = localStorage.token;
      // console.log('Token is string: ' + isString(token))
      // console.log(token);
      await axios.get(URL).then((res) =>
       {
        this.tips = res.data.data;
        console.log(this.tips);
        console.log(typeof(this.tips))
        console.log("Fetching  tips Data Completed...");
      }) .catch(error => {
        console.log(error.code)
        this.error=error.code;
        this.errored = true

      }).finally(() => this.loading = false);
    },
  },
  mounted(){
    this.getTips();
  }
  }
  </script>
  
  <style>
  
  </style>