<template>
  <div>
    <h1 v-if="paymentRecords.length < 1">Payment History...</h1>
      <!-- <BillingTable v-else :paymentRecords="paymentRecords"/> -->
      <div v-else>
      <!-- <Header title="Billings Information" sub="Track your payments from here"/> -->
      <div class="bg-white">
  <div  class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8 lg:pb-24">
    <div class="max-w-xl">
      <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Payment history</h1>
      <p class="mt-2 text-sm text-gray-500">Check all your payments, manage and download invoices.</p>
      <div class=" text-black font-medium w-full border p-5 my-5">
        <h1 class="text-md ">Payer Details</h1>
      <p>PAYER EMAIL: {{paymentRecords[0].email}}</p>
      <p>USER ID: 2345</p>
      </div>
      
    </div>

    <div class="mt-5">
      <h2 class="sr-only">History</h2>

      <div class="space-y-20">
        <div class="border-dotted">
          <h3 class="sr-only">Payment made on <time datetime="2021-01-22">January 22, 2023</time></h3>

          <div class="rounded-sm bg-blue-500 py-6 px-4 sm:flex sm:items-center sm:justify-between sm:space-x-6 sm:px-6 lg:space-x-8">
            <dl class="flex-auto space-y-6 divide-y divide-gray-200 text-sm text-gray-600 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:space-y-0 sm:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8">
              <div class="flex justify-between sm:block">
                <dt class="font-medium text-gray-50">Date</dt>
                <dd class="sm:mt-1">
                  <time datetime="2021-01-22">January 22, 2021</time>
                </dd>
              </div>
              <div :key="index" class="flex justify-between pt-6 sm:block sm:pt-0">
                <dt class="font-medium text-gray-50">Transcation Id Number</dt>
                <dd class="sm:mt-1">{{paymentRecords[0].email}}</dd>
              </div>
              <div  class="flex justify-between pt-6 font-medium text-gray-50 sm:block sm:pt-0">
                <dt>Total amount spend</dt>
                <dd class="sm:mt-1">${{total}}</dd>
              </div>
            </dl>
            <a href="#" class="mt-6 flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto">
              PAYMENTS
            </a>
          </div>

          <table class="mt-4 w-full text-gray-500 sm:mt-6">
            <caption class="sr-only">
              Details
            </caption>
            <thead class="sr-only text-left text-sm text-gray-500 sm:not-sr-only">
              <tr>
                <th scope="col" class="py-3 pr-8 font-normal sm:w-2/5 lg:w-1/3">Transaction Id</th>
                <th scope="col" class="py-3 pr-8 w-fit font-normal sm:w-1/5 lg:w-1/3">Payer Name</th>
                <th scope="col" class="hidden w-fit py-3 pr-8 font-normal sm:table-cell">Amount(USD)</th>
                <th scope="col" class="hidden py-3 pr-8 font-normal sm:table-cell">Purpose</th>
                <th scope="col" class="hidden py-3 pr-8 font-normal sm:table-cell">Method</th>
                <!-- <th scope="col" class="w-0 py-3 text-right font-normal">Info</th> -->
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t">
                <tr v-for="(record,index) in paymentRecords" :key="index">
                <td class="py-2">
                  <div class="flex items-center">
                   {{record.paymentId}}
                  </div>
                </td>
                <td class="py-2">
                  <div class="flex items-center">
                    {{record.firstName}}  {{record.lastName}}
                  </div>
                </td>
                <td class="hidden py-2 sm:table-cell">{{record.price}}</td>
                <td class="hidden py-2 sm:table-cell">{{record.intent}}For appointment</td>
                <td class="hidden py-2 sm:table-cell">{{record.paymentMethod}}</td>

                <td class="whitespace-nowrap py-2 text-right font-medium">
                  <a href="#" class="text-indigo-600">View</a>
                </td>
              </tr>


              <!-- More products... -->
            </tbody>
          </table>
        </div>

        <!-- More orders... -->
      </div>
    </div>
  </div>
</div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BillingTable from '../../components/dashboard/billing/BillingTable.vue'
export default {
  components: { BillingTable },
  data(){
      return{
        paymentRecords: [],
        total:0,
      }
  },
methods:{
  async fetchPayments(){
      console.log("Fetching Patient paymentRecords Data....");
      this.loading = true;
      const URL = "http://localhost:8080/v1/payment_information";
      const token = localStorage.token;
      // console.log('Token is string: ' + isString(token))
      // console.log(token);
      await axios.get(URL,{
        headers: {'Content-Type': 'application/json',
            Authorization : 'Bearer ' + token,
            'Access-Control-Allow-Origin': '*'}
      }).then((res) =>
       {
        this.paymentRecords = res.data;
        this.Total();
        console.log(this.paymentRecords);
        console.log(typeof(this.paymentRecords))
        console.log("Fetching Payment Data Completed...");
      }) .catch(error => {
        console.log(error.code)
        this.error=error.code;
        this.errored = true

      }).finally(() => this.loading = false);
    },
    Total(){
      this.paymentRecords.forEach(record => {
        this.total += record.price; 
      });
    }
},
mounted(){
  console.log("Loading...")
  this.fetchPayments();
}
}
</script>

<style>

</style>