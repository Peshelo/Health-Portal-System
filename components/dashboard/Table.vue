<template>
    <div class="rounded-md mt-2">
        
      <div class="flex justify-between items-center mb-5">
      <div>
        <div class="sm:flex sm:items-center sm:justify-between">
        <div>
            <div class="flex items-center gap-x-3">
                <h2 class="text-2xl font-medium text-gray-800 dark:text-white">My Appointments</h2>

                <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">19 Records</span>
            </div>

            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">This is the list of appointments</p>
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
            <select class="p-2 bg-blue-500 text-white rounded-md" v-model="filter">
          <option value="all">All</option>
          <option value="done">done</option>
          <option value="pending">pending</option>
        </select>
           
            <input class="p-2 rounded-md focus:outline-none focus:border-blue-500 border border-gray-300" type="text" v-model="search" placeholder="Search patients..." />
       <button class="flex items-center justify-center w-1/2 px-5 py-2 tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-md shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <span>Add New</span>
            </button>
        </div>
           
        </div>
      </div>
      <table class="bg-white border p-10 rounded-md w-full text-left table-collapse">
        <thead class=" bg-gray-50">
          <tr class="text-gray-500 font-thin">
            <th @click="sortBy('name')" class="cursor-pointer p-2 border-t border-gray-100">
              Name
              <span v-if="sortKey === 'name'">
                <template v-if="reverse">&uarr;</template>
                <template v-else>&darr;</template>
              </span>
            </th>
            <th @click="sortBy('date')" class="cursor-pointer p-2 border-t border-gray-100">
              Date
              <span v-if="sortKey === 'date'">
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
            <th @click="sortBy('time')" class="cursor-pointer p-2 border-t  border-gray-100">
              Time
: 0         <span v-if="sortKey === 'time'">
: 0              <template v-if="reverse">&uarr;</template>
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
          <tr class="w-fit" v-for="patient in filteredPatients" :key="patient.id">
            <td class="p-2 pt-3 text-sm border-t border-gray-100 text-gray-600">{{ patient.name }}</td>
            <td class="p-2 w-fit pt-3 text-sm  border-t border-gray-100 text-gray-600">{{ patient.date }}</td>
            <td class="p-2 pt-3 text-sm  border-t border-gray-100 text-gray-600">{{ patient.mobile}}</td>
            <td class="p-2 pt-3 text-sm  border-t border-gray-100 text-gray-600">{{ patient.time }}</td>
            <td class="p-2 pt-3 text-sm border-t border-gray-100 text-gray-600"><label class="bg-green-200 text-sm rounded-3xl border w-fit h-fit text-green-500 px-2 py-1 state">{{ patient.status }} </label></td>
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
  export default {
   data() {
  return {
    patients: [
     { name: 'John Doe', date: '23/12/2023', mobile: '0771153553', time: '4:50', status: 'done' },
          { name: 'Jane Doe', date: '23/12/2023', mobile: '0771153553', time: '4:50', status: 'pending' },
          { name: 'Bob Smith', date: '23/12/2023', mobile: '0771153553', time: '4:50', status: 'cancelled' },
          { name: 'Alice Johnson', date: '23/12/2023', mobile: '0771153553', time: '4:50', status: 'pending' },
          { name: 'Charlie Brown', date: '23/12/2023', mobile: '0771153553', time: '4:50', status: 'done' },
          { name: 'Eve Adams', date: '23/12/2023', mobile: '0771153553', time: '4:50', status: 'pending' },
          { name: 'Frank Jones', date: '23/12/2023', mobile: '0771153553', time: '4:50', status: 'canclled' },
          { name: 'Gina Rodriguez', date: '23/12/2023', mobile: '0771153553', time: '4:50', status: 'pending' },
          { name: 'Harry Davis', date: '23/12/2023', mobile: '0771153553', time: '4:50', status: 'done' },
          { name: 'Isabelle Wilson', date: '23/12/2023', mobile: '0771153553', time: '4:50', status: 'pending' }
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
  patient.name.toLowerCase().includes(this.search.toLowerCase()) ||
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
  }
  }
  };
  </script>
  
  <style>
  .cursor-pointer {
    cursor: pointer;
  }
  </style>
  