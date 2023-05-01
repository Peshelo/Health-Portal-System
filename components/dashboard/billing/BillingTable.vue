<template>
    <div>
      <!-- <Header title="Billings Information" sub="Track your payments from here"/> -->
      <div class="bg-white">
  <div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8 lg:pb-24">
    <div class="max-w-xl">
      <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Payment history</h1>
      <p class="mt-2 text-sm text-gray-500">Check all your payments, manage and download invoices.</p>
    </div>

    <div class="mt-5">
      <h2 class="sr-only">History</h2>

      <div class="space-y-20">
        <div class="border-dotted">
          <h3 class="sr-only">Payment made on <time datetime="2021-01-22">January 22, 2023</time></h3>

          <div class="rounded-lg bg-gray-50 py-6 px-4 sm:flex sm:items-center sm:justify-between sm:space-x-6 sm:px-6 lg:space-x-8">
            <dl class="flex-auto space-y-6 divide-y divide-gray-200 text-sm text-gray-600 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:space-y-0 sm:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8">
              <div class="flex justify-between sm:block">
                <dt class="font-medium text-gray-900">Date placed</dt>
                <dd class="sm:mt-1">
                  <time datetime="2021-01-22">January 22, 2021</time>
                </dd>
              </div>
              <div class="flex justify-between pt-6 sm:block sm:pt-0">
                <dt class="font-medium text-gray-900">Transcation Id Number</dt>
                <dd class="sm:mt-1">WU88191111</dd>
              </div>
              <div class="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
                <dt>Total amount</dt>
                <dd class="sm:mt-1">$10.00</dd>
              </div>
            </dl>
            <a href="#" class="mt-6 flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto">
              View Invoice
              <span class="sr-only">for payment WU88191111</span>
            </a>
          </div>

          <table class="mt-4 w-full text-gray-500 sm:mt-6">
            <caption class="sr-only">
              Details
            </caption>
            <thead class="sr-only text-left text-sm text-gray-500 sm:not-sr-only">
              <tr>
                <th scope="col" class="py-3 pr-8 font-normal sm:w-2/5 lg:w-1/3">Transaction Id</th>
                <th scope="col" class="py-3 pr-8 font-normal sm:w-2/5 lg:w-1/3">Date</th>
                <th scope="col" class="hidden w-1/5 py-3 pr-8 font-normal sm:table-cell">Amount(USD)</th>
                <th scope="col" class="hidden py-3 pr-8 font-normal sm:table-cell">Purpose</th>
                <th scope="col" class="hidden py-3 pr-8 font-normal sm:table-cell">Method</th>
                <!-- <th scope="col" class="w-0 py-3 text-right font-normal">Info</th> -->
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t">
                <tr>
                <td class="py-2">
                  <div class="flex items-center">
                    RGG35553F
                  </div>
                </td>
                <td class="py-2">
                  <div class="flex items-center">
                    22 January 2023
                  </div>
                </td>
                <td class="hidden py-2 sm:table-cell">10</td>
                <td class="hidden py-2 sm:table-cell">For appointment</td>
                <td class="hidden py-2 sm:table-cell">Paypal</td>

                <td class="whitespace-nowrap py-2 text-right font-medium">
                  <a href="#" class="text-indigo-600">View</a>
                </td>
              </tr>
              <tr>
                <td class="py-2">
                  <div class="flex items-center">
                    RGG35553F
                  </div>
                </td>
                <td class="py-2">
                  <div class="flex items-center">
                    22 January 2023
                  </div>
                </td>
                <td class="hidden py-2 sm:table-cell">10</td>
                <td class="hidden py-2 sm:table-cell">For appointment</td>
                <td class="hidden py-2 sm:table-cell">Paypal</td>

                <td class="whitespace-nowrap py-2 text-right font-medium">
                  <a href="#" class="text-indigo-600">View</a>
                </td>
              </tr>
              <tr>
                <td class="py-2">
                  <div class="flex items-center">
                    RGG35553F
                  </div>
                </td>
                <td class="py-2">
                  <div class="flex items-center">
                    22 January 2023
                  </div>
                </td>
                <td class="hidden py-2 sm:table-cell">10</td>
                <td class="hidden py-2 sm:table-cell">For appointment</td>
                <td class="hidden py-2 sm:table-cell">Paypal</td>

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
  </template>
  
  <script>
  import Header from '~/components/navigation/Header.vue';
  
  export default {
  components:{Header},
  data(){
    return{
        payment:{
            paymentId: "RERER$#%#",
            price: "50",
            currency: "USD",
            email: "lesy@gmail.com",
            method: "paypal"
        }
    }
  }
  }
  </script>
  
  <style>
  
  </style>