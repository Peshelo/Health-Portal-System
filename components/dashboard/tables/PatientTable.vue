<template>
    <div class="rounded-md mt-2 bg-white p-10">
        
      <div class="flex justify-between  items-center mb-5">
      <div>
        <div class="sm:flex sm:items-center sm:justify-between">
        <div>
            <div class="flex items-center gap-x-3">
                <h2 class="text-2xl font-medium text-gray-800 dark:text-white">Patients</h2>

                <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">19 Records</span>
            </div>

            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">This is the list pf available doctors</p>
        </div>       
    </div>
      </div>
        <div class="w-fit">
         <div class="flex items-center mt-4 gap-x-3">
            <!-- <button class="flex items-center justify-center w-1/2 px-5 py-2 text-gray-700 transition-colors duration-200 bg-white border rounded-md gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
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
            </button> -->

            <button @click="Test()" class="flex items-center justify-center w-1/2 px-5 py-2 tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-md shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <span>Add New</span>
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
            <th @click="sortBy('address')" class="cursor-pointer p-2 border-t text-sm border-gray-100">
              Physical Address
              <span v-if="sortKey === 'address'">
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
          <tr class="w-fit" v-for="(patient ,index) in filteredPatients" :key="index">
            <td class="p-2 pt-3 text-sm border-t border-gray-100 text-gray-600">{{ index + 1 }}</td>
            <td class="p-2 pt-3 text-sm border-t border-gray-100 text-gray-600">{{ patient.firstname }}</td>
            <td class="p-2 pt-3 text-sm border-t border-gray-100 text-gray-600">{{ patient.lastname }}</td>
            <td class="p-2 pt-3 text-sm border-t border-gray-100 text-gray-600">{{ patient.address }}</td>
            <td class="p-2 w-fit pt-3 text-sm  border-t border-gray-100 text-gray-600">{{ patient.email }}</td>
            <td class="p-2 pt-3 text-sm  border-t border-gray-100 text-gray-600">{{ patient.mobile}}</td>
            <!-- <td class="p-2 pt-3 text-sm  border-t border-gray-100 text-yellow-500"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-filled" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor"></path>
</svg> {{ patient.rating }}</td> -->
            <td class="p-2 pt-3 text-sm border-t border-gray-100 text-gray-600"><label class="bg-green-200 text-sm rounded-3xl border w-fit h-fit text-green-500 px-2 py-1 state">{{ patient.status }} </label></td>
            <td class="border-t px-2 py-1 text-left">
                <button @click="Done()" class="btn text-lg bg-white text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots-vertical" width="19" height="19" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
   <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
   <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
</svg></button>
                <button @click="Delete()" class="btn text-lg bg-white text-red-500"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="19" height="19" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 7l16 0"></path>
   <path d="M10 11l0 6"></path>
   <path d="M14 11l0 6"></path>
   <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
   <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
</svg></button>
                <button @click="modal = true" class="btn text-lg bg-white text-blue-700"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-paperclip" width="19" height="19" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5"></path>
</svg></button>
              </td>
              <div v-if="modal" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
  <div class="fixed inset-0 bg-gray-500 bg-opacity-30 transition-opacity"></div>

  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
      <form @submit.prevent="uploadFile(patient.id)" class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex flex-col sm:items-start">
            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-paperclip" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5"></path>
</svg>
            </div>
            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Appointment Records</h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">The following details are recorded down for record keeping and medical reasons.</p>
              </div>
            </div>
            <div class="mt-3 flex flex-col gap-2 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <textarea v-model="recordDetails" class="py-2 px-4 border border-blue-300 rounded-md mb-2 w-full focus:outline-none focus:border-[var(--secondary)] " placeholder="Description"></textarea>
              <label>Attach file below:</label>
              <input @change="handleFileChange" type="file" name="file" id="" placeholder="Record File" class="py-2 px-4 border border-blue-300 rounded-md mb-2 w-full focus:outline-none focus:border-[var(--secondary)] ">
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="submit" class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto">Send</button>
          <button @click="modal = false" type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</div>
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
    data: {
      type: Array,
      required: false,
    },
    
  },
   data() {
  return {
    modal:false,
    file:[],
    recordDetails:'',
    patients: [
          { firstname: 'Jane Doe', lastname: 'Jane Doe',address: 'General', email: 'janedoe@example.com', mobile: '0771153553', status: 'inactive' },
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
  patient.address.toLowerCase().includes(this.search.toLowerCase())
  
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
    Delete(){
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
    Swal.fire(
      'Deleted!',
      'Patient has been deleted.',
      'success'
    )
  }
})
    },
//     async Test(){
//         const steps = ['1', '2', '3']
// const swalQueueStep = Swal.mixin({
//   confirmButtonText: 'Forward',
//   cancelButtonText: 'Back',
//   progressSteps: steps,
//   html: `<input type="date" class="w-full p-2 rounded border">`,
//   input: 'text',
//   inputAttributes: {
//     required: true
//   },
//   reverseButtons: true,
//   validationMessage: 'This field is required'
// })

// const values = []
// let currentStep

// for (currentStep = 0; currentStep < steps.length;) {
//   const result = await swalQueueStep.fire({
//     title: `Question ${steps[currentStep]}`,
//     inputValue: values[currentStep],
//     showCancelButton: currentStep > 0,
//     currentProgressStep: currentStep
//   })

//   if (result.value) {
//     values[currentStep] = result.value
//     currentStep++
//   } else if (result.dismiss === Swal.DismissReason.cancel) {
//     currentStep--
//   } else {
//     break
//   }
// }

// if (currentStep === steps.length) {
//   Swal.fire(JSON.stringify(values))
// }
//     },
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
  handleFileChange(event) {
      this.file = event.target.files[0]
      console.log(this.file)
    },
  async uploadFile(id){
            this.loading=true;
            this.errors = {};
            if(!this.recordDetails){
                this.errors.recordDetails = "Description is required";
                alert(this.errors.recordDetails)
            }
            if (Object.keys(this.errors).length === 0) {
              let formData = new FormData();
              formData.append('file', this.file);
       // Your code for handling the login form submission
       try{
        await axios.post('https://hit200-group8.azurewebsites.net/v1/records/upload?recordDetails='+this.recordDetails+'&patientId='+id,{
        formData
        },{
            headers: {
            'Content-Type': 'application/*',
            Authorization : 'Bearer ' + localStorage.token,
            'Accept' : '*/*',
            'Access-Control-Allow-Origin': '*'
          },
            credentials: 'include',
          }).then((response) =>{
          const data = response.data;
          console.log(data);
          alert(data);

        }).catch(error => {
        console.log(error)
        this.errored = true
        this.errors.ERR=error
        
      }).finally(() => this.loading = false);

}catch(err){
  this.errors.network = "Error: " + err.message;
  this.errors.ERR = err;
  alert(err)
console.log("Error:",err.message)

}
      }
        },
  },
  mounted(){
  this.patients = this.data;
  }
  };
  </script>
  
  <style>
  .cursor-pointer {
    cursor: pointer;
  }
  </style>
  