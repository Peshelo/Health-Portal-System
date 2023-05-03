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
        <img src="data:image/jpeg;base64,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" alt="Glass bottle with black plastic pour top and mesh insert." class="h-20 w-20 flex-none rounded-lg bg-gray-100 object-cover object-center">
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
      <img src="https://th.bing.com/th/id/R.77f5fa04e7b5d8312ca224d569c7ae45?rik=8aD2rVG5C%2bIdSA&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f2348088%2fimages%2fo-DOCTOR-facebook.jpg&ehk=XuwCSSQqaGsNGdXL8pTOU0TrJZjsG19T3pf80cONGP8%3d&risl=&pid=ImgRaw&r=0" alt="" class="w-full h-60 rounded-xl object-cover p-2 text-center">
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