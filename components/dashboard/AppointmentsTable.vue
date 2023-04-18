<template>
    <div class="rounded-md mt-2 bg-white p-5">
        
      <div class="flex justify-between items-center mb-5">
      <div>
        <div class="sm:flex sm:items-center sm:justify-between">
        <div>
            <div class="flex items-center gap-x-3">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white">Appointments</h2>
            </div>
        </div>       
    </div>
      </div>
        <div class="w-fit">
         <div class="flex items-center mt-4 gap-x-3">
            <button class="flex text-sm items-center justify-center w-1/2 px-5 py-2 text-gray-700 transition-colors duration-200 bg-white border rounded-md gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_3098_154395)">
                    <path d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_3098_154395">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>

                <span>pdf</span>
            </button>
            <select class="p-2 text-sm bg-blue-500 text-white rounded-md" v-model="filter">
          <option value="all">All</option>
          <option value="done">Scheduled</option>
          <option value="pending">Pending</option>
          <option value="pending">Canceled</option>
            </select>
           
            <input class="p-2 text-sm rounded-md focus:outline-none focus:border-blue-500 border border-gray-300" type="text" v-model="search" placeholder="Search appointments..." />
       <nuxt-link to="/patient/addAppointment" class="flex text-sm items-center justify-center w-1/2 px-5 py-2 tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-md shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <span>Add</span>
       </nuxt-link>
        </div>
           
        </div>
      </div>
      <div v-if="loading">
        <div class="border bg-white rounded-md p-4 w-full">
          <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
              <div class="h-2 bg-slate-200 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table v-else class="border p-10 rounded-lg w-full text-left table-collapse">
        <thead class="">
          <tr class="text-gray-700">
            <th class="cursor-pointer font-extrabold p-2 border-t border-gray-100">
              No.
            </th>
            <th @click="sortBy('name')" class="cursor-pointer font-extrabold p-2 border-t border-gray-100">
              Doctor
              <span v-if="sortKey === 'name'">
                <template v-if="reverse">&uarr;</template>
                <template v-else>&darr;</template>
              </span>
            </th>
            <th @click="sortBy('date')" class="cursor-pointer font-extrabold p-2 border-t border-gray-100">
              Date
              <span v-if="sortKey === 'date'">
                <template v-if="reverse">&uarr;</template>
                <template v-else>&darr;</template>
              </span>
            </th>
            <th @click="sortBy('mobile')" class="cursor-pointer font-extrabold p-2 border-t border-gray-100">
              Mobile
              <span v-if="sortKey === 'mobile'">
                <template v-if="reverse">&uarr;</template>
                <template v-else>&darr;</template>
              </span>
            </th>
            <th @click="sortBy('time')" class="cursor-pointer font-extrabold p-2 border-t  border-gray-100">
              Start Time
         <span v-if="sortKey === 'time'">
            <template v-if="reverse">&uarr;</template>
                <template v-else>&darr;</template>
              </span>
            </th>
            <th @click="sortBy('time')" class="cursor-pointer font-extrabold p-2 border-t  border-gray-100">
              End Time
         <span v-if="sortKey === 'time'">
              <template v-if="reverse">&uarr;</template>
                <template v-else>&darr;</template>
              </span>
            </th>
            <th @click="sortBy('status')" class="cursor-pointer font-extrabold p-2 border-t border-gray-100">
              Status
              <span v-if="sortKey === 'status'">
                <template v-if="reverse">&uarr;</template>
                <template v-else>&darr;</template>
              </span>
            </th>
            <th class="cursor-pointer font-extrabold p-2 border-t border-gray-100">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="w-fit p-4 font-thin" v-for="patient in filteredPatients" :key="patient.id">
            <td class="p-2 pt-3 text-sm border-y border-gray-100 text-gray-700">{{ patient.id }}</td>
            <td class="p-2 pt-3 text-sm border-y border-gray-100 text-gray-700 flex flex-row gap-2 items-center"><img width="30" height="30" class=" object-cover rounded-full" src="data:image/jpeg;base64,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" alt="" srcset="">{{ patient.doctor.firstname }} {{ patient.doctor.lastname }}</td>
            <td class="p-2 w-fit pt-3 text-sm  border-t border-gray-100 text-gray-700"><span>{{ patient.start }}</span></td>
            <td class="p-2 pt-3 text-sm  border-t border-gray-100 text-gray-700">{{ patient.doctor.mobile}}</td>
            <td class="p-2 pt-3 text-sm  border-y border-gray-100 text-gray-700"><span>{{ patient.start }}</span></td>
            <td class="p-2 pt-3 text-sm  border-y border-gray-100 text-gray-700"><span>{{ patient.end }}</span></td>
            <td class="p-2 pt-3 text-sm border-y border-gray-100 text-gray-700">
              <label v-if="patient.status==='FINISHED'" class="bg-green-200 text-xs rounded-3xl border w-fit h-fit text-green-500 px-2 py-1 state">{{ patient.status }} </label>
              <label v-if="patient.status==='SCHEDULED'" class="bg-blue-200 text-xs rounded-3xl border w-fit h-fit text-blue-500 px-2 py-1 state">{{ patient.status }} </label>
              <label v-if="patient.status==='PENDING'" class="bg-yellow-200 text-xs rounded-3xl border w-fit h-fit text-yellow-500 px-2 py-1 state">{{ patient.status }} </label>
            </td>
            <td class="border-y px-2 py-1 text-left">
                <button @click="Done(patient.id)" class="btn text-lg bg-white text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots-vertical" width="19" height="19" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
   <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
   <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
</svg></button>
                <button @click="Delete(patient.id)" class="btn text-lg bg-white text-red-500"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="19" height="19" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 7l16 0"></path>
   <path d="M10 11l0 6"></path>
   <path d="M14 11l0 6"></path>
   <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
   <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
</svg></button>
                <button class="btn text-lg bg-white text-blue-700"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="19" height="19" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path>
</svg></button>
              </td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-between items-center mt-5">
        <p class="text-sm">Showing {{ startIndex + 1 }} to {{ endIndex }} of {{ filteredPatients.length }} patients</p>
        <div>
          <button class="bg-blue-600 text-white rounded text-sm px-2 py-2 mr-2" @click="previousPage" :disabled="startIndex === 0">Previous</button>
          <button class="bg-blue-600 text-white rounded text-sm px-2 py-2" @click="nextPage" :disabled="endIndex === filteredPatients.length">Next</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
     import Swal from 'sweetalert2'
     import axios from 'axios';
  export default {
    props: {
    appointments: {
      type: Array,
      required: false,
    },
  },
  watch:{
    appointments(){
      this.patients = this.appointments;
    }
  },
   data() {
  return {
    loading: true,
    count:0,
    errors:[],
    patients: [
    {
        "id": 1,
        "start": [
            2023,
            3,
            8,
            9,
            0
        ],
        "end": [
            2023,
            3,
            8,
            9,
            30
        ],
        "canceledAt": null,
        "cancelerId": null,
        "status": "SCHEDULED",
        "patient": {
            "id": 4,
            "firstname": "string",
            "lastname": "string",
            "email": "ruramai@gmail.com",
            "mobile": "string",
            "address": "string"
        },
        "doctor": {
            "id": 3,
            "firstname": "Munashe",
            "lastname": "Nzira",
            "email": "peshel@gmail.com",
            "mobile": "string",
            "address": "string",
            "specialisation": "string",
            "rating": 0.0
        }
    }
],
  search: '',
  filter: 'all',
  sortKey: '',
  reverse:true,
  pageSize: 10,
  currentPage: 1
  };
  },
  computed: {
  filteredPatients() {
  let patients = this.patients;
  if (this.filter !== 'all') {
  patients = patients.filter(patient => patient.status === this.filter);
  }
  if (this.search) {
  patients = patients.filter(patient =>
  patient.firstname.toLowerCase().includes(this.search.toLowerCase()) ||
  patient.date.toLowerCase().includes(this.search.toLowerCase()) ||
  patient.mobile.toLowerCase().includes(this.search.toLowerCase()) ||
  patient.time.toLowerCase().includes(this.search.toLowerCase())
  );
  }
  if (this.sortKey) {
  patients = patients.sort((a, b) => {
  const sortA = a[this.sortKey];
  const sortB = b[this.sortKey];
  if (sortA < sortB) return this.reverse ? 1 : -1;
  if (sortA > sortB) return this.reverse ? -1 : 1;
  return 0;
  });
  }
  return patients;
  },
  startIndex() {
  return (this.currentPage - 1) * this.pageSize;
  },
  endIndex() {
  return Math.min(this.startIndex + this.pageSize, this.filteredPatients.length);
  }
  },
  methods: {
    Done(id){
        Swal.fire({
  title: 'Are you sure?',
  text: "Mark assignment as done",
  icon: 'information',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, mark it!'
}).then((result) => {
  if (result.isConfirmed) {
    this.markAsDone(id);
    Swal.fire(
      'Update!',
      'Appointment has been done',
      'success'
    )
  }
})
    },
    Delete(id){
        Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    this.DeleteRecord(id);
    Swal.fire(
      'Deleted!',
      'Patient has been deleted.',
      'success'
    )
    
  }
})
    },
  sortBy(key) {
  if (this.sortKey === key) {
  this.reverse = !this.reverse;
  } else {
  this.sortKey = key;
  this.reverse = false;
  }
  },
  nextPage() {
  this.currentPage++;
  },
  previousPage() {
  this.currentPage--;
  },
  async markAsDone(id){
    try{
        await axios.put('http://localhost:8080/v1/appointments/mark_done_appointment?id='+id,{
        },{
            headers: {'Content-Type': 'application/json',
            Authorization : 'Bearer ' + localStorage.token,
            'Access-Control-Allow-Origin': '*'
          },
            credentials: 'include',
          }).then((response) =>{
          const data = response.data;
          console.log(data);
        }).catch(error => {
        console.log(error)
        this.errored = true
        this.errors.ERR=error
        
      }).finally(() => this.loading = false);

}catch(err){
  this.errors.network = "Error: " + err.message;
  this.errors.ERR = err;
console.log("Error:",err.message)

}
  },
  async DeleteRecord(id){
    try{
        await axios.delete('http://localhost:8080/v1/appointments/delete/'+id,{
        id:id,
        },{
            headers: {'Content-Type': 'application/json',
            Authorization : 'Bear' + localStorage.token,
            'Access-Control-Allow-Origin': '*'
          },
            credentials: 'include',
          }).then((response) =>{
          const data = response.data;
          console.log(data);

          if(response.data == "User Not Found"){
            this.errors.failed = "Wrong Login details...";
          }else{
            this.success="";
            this.success = "Login Sucessful...";
            console.log("Login Successful..")
            // localStorage.removeItem(token);
            localStorage.token = response.data;
            // console.log(localStorage.token)
            this.$router.push('/patient')
          }
        }).catch(error => {
        console.log(error)
        this.errored = true
        this.errors.ERR=error
        
      }).finally(() => this.loading = false);

}catch(err){
  this.errors.network = "Error: " + err.message;
  this.errors.ERR = err;
console.log("Error:",err.message)

}
  },
  },
  mounted(){
    this.patients = this.appointments;
    this.loading=false;
    console.warn("Current Data:" + this.patients)
  }
  };
  </script>
  
  <style>
  .cursor-pointer font-extrabold {
    cursor: pointer;
  }
  </style>
  