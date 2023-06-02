<template>
    <div class="bg-white p-10 rounded-lg mt-10">
        
      <div class="flex justify-between items-center mb-5">
      <div>
        <div class="sm:flex sm:items-center sm:justify-between">
        <div>
            <div class="flex items-center gap-x-3">
                <h2 class="text-2xl font-medium text-gray-800 dark:text-white">Doctors</h2>

                <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">{{ doctors.length }} Records</span>
            </div>

            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">This is the list pf available doctors</p>
        </div>       
    </div>
      </div>
        <div class="w-fit">
         <div class="flex items-center mt-4 gap-x-3">
            <button class="flex items-center justify-center w-1/2 px-5 py-2 text-gray-700 transition-colors duration-200 bg-white border rounded-md gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
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

                <span>Export</span>
            </button>

       
            <input class="p-2 rounded-md focus:outline-none focus:border-blue-500 border border-gray-300" type="text" v-model="search" placeholder="Search patients..." />
        <select class="p-2 bg-blue-500 text-white rounded-md" v-model="filter">
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        </div>
           
        </div>
      </div>
      <table class="bg-white border p-10 rounded-md w-full text-left table-collapse">
        <thead class=" bg-gray-50">
          <tr class="text-gray-500 font-thin">
            <th class="cursor-pointer p-2 border-t border-gray-100">
              ID
            </th>
            <th @click="sortBy('firstname')" class="cursor-pointer p-2 border-t border-gray-100">
              Firstname
              <span v-if="sortKey === 'firstname'">
                <template v-if="reverse">&uarr;</template>
                <template v-else>&darr;</template>
              </span>
            </th>
            <th @click="sortBy('lastname')" class="cursor-pointer p-2 border-t border-gray-100">
              Lastname
              <span v-if="sortKey === 'lastname'">
                <template v-if="reverse">&uarr;</template>
                <template v-else>&darr;</template>
              </span>
            </th>
            <th @click="sortBy('specialisation')" class="cursor-pointer p-2 border-t border-gray-100">
              Speciality
              <span v-if="sortKey === 'specialisation'">
                <template v-if="reverse">&uarr;</template>
                <template v-else>&darr;</template>
              </span>
            </th>
            <th @click="sortBy('email')" class="cursor-pointer p-2 border-t border-gray-100">
              Email
              <span v-if="sortKey === 'email'">
                <template v-if="reverse">&uarr;</template>
                <template v-else>&darr;</template>
              </span>
            </th>
            <th @click="sortBy('mobile')" class="cursor-pointer p-2 border-t border-gray-100">
              Mobile
              <span v-if="sortKey === 'mobile'">
                <template v-if="reverse">&uarr;</template>
                <template v-else>&darr;</template>
              </span>
            </th>
            <th @click="sortBy('rating')" class="cursor-pointer p-2 border-t  border-gray-100">
              Rating
              <span v-if="sortKey === 'rating'">
                <template v-if="reverse">&uarr;</template>
                <template v-else>&darr;</template>
              </span>
            </th>
            <th @click="sortBy('status')" class="cursor-pointer p-2 border-t border-gray-100">
              Status
              <span v-if="sortKey === 'status'">
                <template v-if="reverse">&uarr;</template>
                <template v-else>&darr;</template>
              </span>
            </th>
            <th class="cursor-pointer p-2 border-t border-gray-100">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="w-fit hover:bg-gray-300" v-for="(patient ,index) in filteredPatients" :key="index">
            <td class="p-2 pt-3 text-sm border-t border-gray-100 text-gray-600">{{ index + 1 }}</td>
            <td class="p-2 pt-3 text-sm border-t border-gray-100 text-gray-600">{{ patient.firstname }}</td>
            <td class="p-2 pt-3 text-sm border-t border-gray-100 text-gray-600">{{ patient.lastname }}</td>
            <td class="p-2 pt-3 text-sm border-t border-gray-100 text-gray-600">{{ patient.specialisation }}</td>
            <td class="p-2 w-fit pt-3 text-sm  border-t border-gray-100 text-gray-600">{{ patient.email }}</td>
            <td class="p-2 pt-3 text-sm  border-t border-gray-100 text-gray-600">{{ patient.mobile}}</td>
            <td class="p-2 pt-3 text-sm  border-t border-gray-100 text-yellow-500"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-filled" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor"></path>
</svg> {{ patient.rating }}</td>
            <td class="p-2 pt-3 text-sm border-t border-gray-100 text-gray-600"><label class="bg-green-200 text-sm rounded-3xl border w-fit h-fit text-green-500 px-2 py-1 state">Active</label></td>
            <td class="border-t px-2 py-1 text-left">
                <button class="btn text-lg bg-white text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots-vertical" width="19" height="19" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
   <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
   <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
</svg></button>
                <button class="btn text-lg bg-white text-red-500"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="19" height="19" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
   import axios from 'axios';
  export default {
    props: {
    doctors: {
      type: Array,
      required: false,
    },
     setup(props) {
    // setup() receives props as the first argument.
    console.log("Props")
  },
    
  },
   data() {
  return {
    patients: [
          { firstname: 'Jane Doe', lastname: 'Jane Doe',specialisation: 'General', email: 'janedoe@example.com', mobile: '0771153553', rating: '4.5', status: 'inactive' },
          { firstname: 'Jane Doe', lastname: 'Jane Doe',specialisation: 'General', email: 'janedoe@example.com', mobile: '0771153553', rating: '4.5', status: 'inactive' },
          { firstname: 'Jane Doe', lastname: 'Jane Doe',specialisation: 'General', email: 'janedoe@example.com', mobile: '0771153553', rating: '4.5', status: 'inactive' },
          { firstname: 'Jane Doe', lastname: 'Jane Doe',specialisation: 'General', email: 'janedoe@example.com', mobile: '0771153553', rating: '4.5', status: 'inactive' },
         
  ],
  search: '',
  filter: 'all',
  sortKey: '',
  reverse: false,
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
  patient.lastname.toLowerCase().includes(this.search.toLowerCase())||
  patient.email.toLowerCase().includes(this.search.toLowerCase()) ||
  patient.mobile.toLowerCase().includes(this.search.toLowerCase()) ||
  patient.specialisation.toLowerCase().includes(this.search.toLowerCase())||
  patient.rating.toLowerCase().includes(this.search.toLowerCase())
  
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
    async fetchDoctors(){
      console.log("Fetching Doctors from Datatables....");
      const URL = "http://localhost:8080/v1/doctors/all";
      const token = localStorage.token;
      // console.log('Token is string: ' + isString(token))
      console.log(token);
      await axios.get(URL,{
        headers: {'Content-Type': 'application/json',
            Authorization : 'Bearer ' + token,
            'Access-Control-Allow-Origin': '*',
            'Accept': '*/*'},
            credentials:true,
      }).then((res) =>
       {
        this.doctors = res.data;
        console.log(this.doctors);
        console.log(typeof(this.doctors))
        console.log("Fetching  Doctors Data Completed...");
      }) .catch(error => {
        console.log(error.code)
        this.error=error.code;
        this.errored = true

      }).finally(() => this.loading = false);
    },
  },
  mounted(){
  // this.fetchDoctors();
  this.patients = this.doctors;
  },
  };
  </script>
  
  <style>
  .cursor-pointer {
    cursor: pointer;
  }
  </style>
  