<template>
  <div class="flex flex-row max-md:flex-col gap-2">
    
    <div class="w-2/3 max-md:w-full">
      <Header title="Appointments" sub="Get your appointments list."/>
      <!-- <UpComming :upcomming="appointments[0]"/> -->
      <div>
	<div class="container py-3 mx-auto grid">
		<div class="grid gap-6 mb-8 md:grid-cols-3 xl:grid-cols-3">
			<div class="flex items-center p-4 bg-yellow-400 rounded-lg shadow-md border">
				<div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler w-7 h-7 icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
   <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
   <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
   <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
</svg>
				</div>
				<div class="">
					<p class="mb-2 text-sm font-medium text-gray-600">
						Make a doctor appointment
					</p>
				</div>
			</div>
			<div class="flex items-center p-4 bg-blue-400 rounded-lg shadow-lg border">
				<div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler w-7 h-7 icon-tabler-calendar-time" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"></path>
   <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
   <path d="M15 3v4"></path>
   <path d="M7 3v4"></path>
   <path d="M3 11h16"></path>
   <path d="M18 16.496v1.504l1 1"></path>
</svg>
				</div>
				<div>
					<p class="mb-2 text-sm font-medium text-gray-600">
						Request Home Visit
					</p>
				</div>
			</div>
			<div class="flex items-center p-4 bg-orange-500 rounded-lg shadow-xs border">
				<div class="p-3 mr-4 text-red-500 bg-red-100 rounded-full">
					<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler w-7 h-7 icon-tabler-microscope" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M5 21h14"></path>
   <path d="M6 18h2"></path>
   <path d="M7 18v3"></path>
   <path d="M9 11l3 3l6 -6l-3 -3z"></path>
   <path d="M10.5 12.5l-1.5 1.5"></path>
   <path d="M17 3l3 3"></path>
   <path d="M12 21a6 6 0 0 0 3.715 -10.712"></path>
</svg>
				</div>
				<div>
					<p class="mb-2 text-sm font-medium text-gray-600">
					Annual Checkup
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
<h2>Scheduled Appointments</h2>
<h1 v-if="loading">Loading Data...</h1>
      <div v-else class="grid grid-cols-2 my-5 max-md:grid-cols-1 gap-2">
        <div  v-for="(appoint,index) in appointments" :key="index" @click="loadAppointmentDetail(index)" class="border-t border-gray-200 w-full">
      <div v-if="appoint.status === 'SCHEDULED'" class="flex space-x-6 border-b p-5 bg-white border-t-4 border-blue-600  rounded-xl">
        <img src="@/assets/images/logo1.png" alt="Glass bottle with black plastic pour top and mesh insert." class="h-20 w-20 flex-none rounded-lg bg-blue-700 object-cover object-center">
        <div class="flex flex-col">
          <div>
            <h4 class="font-medium text-gray-900">
              <label class="text-bold text-lg">Dr. {{ appoint.doctor.firstname }} {{ appoint.doctor.lastname }}</label>
            </h4>
            <p class=" text-sm text-gray-400">Description: {{appoint.description}}</p>
          </div>
          <div class="flex flex-1 mt-2">
            <dl class="flex space-x-4 divide-x divide-gray-200 text-sm text-green-500 sm:space-x-6">
              <div class="flex rounded-md text-xs">
                <dt class="font-medium ">Start:</dt>
                <dd class="ml-2">{{ appoint.start.split('T')[1] }}</dd>
              </div>
              <div class="flex pl-4 sm:pl-6 text-xs">
                <dt class="font-medium ">End:</dt>
                <dd class="ml-2">{{ appoint.end.split('T')[1] }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
      </div>
     
      <div v-if="appointments.length<1" class="flex flex-row p-5 justify-between bg-white border items-center rounded my-5 hover:shadow-lg ">
        <p>No appointments to show</p>
        <AddApointment/>
      </div>
      <AppointmentsTable v-else :appointments="appointments"/>
    </div>
    <div v-if="!loading" class="w-1/3 max-md:w-full p-5 h-fit shadow-lg bg-white rounded-lg text-center">
      <h1 class="text-red-600">Appointment View</h1>
      <img src="@/assets/images/logo3.png" alt="" class="w-full h-60 rounded-xl object-contain p-2 text-center">
      <h1 class="text-xl font-bold">Dr. {{current.doctor.firstname}} {{current.doctor.laststname}}</h1>
      <p class="text-gray-500">{{current.doctor.specialisation}}</p>
      <div class="my-5">
        <p class="text-sm text-gray-500">Appointment created on: {{current.start.split('T')[0]}}</p>
        <p class="text-md">Description: {{current.description}} Note that this is the description you provided when you made the appointment.</p>
        <div v-if="current.status ==='SCHEDULED'" class="bg-blue-200 rounded-md w-full border-blue-700 p-4 text-center my-4">{{current.status}}</div>
        <div v-else-if="current.status='FINISHED'" class="bg-green-200 rounded-md w-full border-green-700 p-4 text-center my-4">{{current.status}}</div>
        <div v-else-if="current.status='CANCELED'" class="bg-gray-200 rounded-md w-full border-gray-700 p-4 text-center my-4">{{current.status}}</div>
        <div v-else class="bg-gray-200 rounded-md w-full border-gray-700 p-4 text-center my-4">{{current.status}}</div>
        <div class="grid grid-cols-2 my-2">
          <p class="w-full p-2 border-t text-start">Mobile</p>
          <p class="w-full p-2 border-t text-start">{{current.doctor.mobile}}</p>
          <p class="w-full p-2 border-t text-start">Amount Paid</p>
          <p class="w-full p-2 border-t text-start">50USD</p>
          <p class="w-full p-2 border-t text-start">Start</p>
          <p class="w-full p-2 border-t text-start"> {{current.start.split('T')[1]}}hrs</p>
          <p class="w-full p-2 border-t text-start">End</p>
          <p class="w-full p-2 border-t text-start">{{current.end.split('T')[1]}}hrs</p>
          
        </div>
        <button class="w-full p-3 mt-4 rounded-lg bg-red-600 text-md text-white">Cancel</button>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import axios from 'axios'
  import AddApointment from '@/components/dashboard/appointments/AddApointment.vue'
  import UpComming from '@/components/dashboard/appointments/UpComming.vue'
  import AppointmentsTable from '../../components/dashboard/AppointmentsTable.vue';
  import Header from '~/components/navigation/Header.vue';
  
export default {
  components:{Header,AppointmentsTable,UpComming,AddApointment},
  data(){
return{
  loading: true,
  appointments: [],
  current:[],
}
  },
  methods:{
    async fetchAppointments(){
      console.log("Fetching Patient Appointments Data....");
      this.loading = true;
      const URL = "http://localhost:8080/v1/appointments/get_appointments_for_patient";
      const token = localStorage.token;
      // console.log('Token is string: ' + isString(token))
      // console.log(token);
      await axios.get(URL,{
        headers: {'Content-Type': 'application/json',
            Authorization : 'Bearer ' + token,
            'Access-Control-Allow-Origin': '*'}
      }).then((res) =>
       {
        this.appointments = res.data;
        console.log(this.appointments);
        this.loadAppointmentDetail(0);
        console.log(typeof(this.appointments))
        console.log("Fetching  Doctors Data Completed...");

      }) .catch(error => {
        console.log(error.code)
        this.error=error.code;
        this.errored = true

      }).finally(() => this.loading = false);
    },
    loadAppointmentDetail(index){
      if(this.appointments.length < 1){
    // this.loading = true;
   }else{
    this.current = this.appointments[index];
    console.log(this.current)
    this.loading = false;
   }
    }
  },
  mounted(){
   this.fetchAppointments();
  }
  }
  </script>
  
  <style>
  
  </style>