<template>
    <!-- This is an example component -->
  <div>
      <div class="container py-3 mx-auto grid">
          <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-2">
              <div v-for="(tip,index) in tips" :key="index" class="flex items-center p-4 bg-white rounded-lg shadow-xs border border-l-8">
                <img src="@/assets/images/logo1.png" alt="Glass bottle with black plastic pour top and mesh insert." class="h-20 w-20 flex-none rounded-lg object-cover object-center">

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