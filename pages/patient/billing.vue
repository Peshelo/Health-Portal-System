<template>
  <div>
      <BillingTable/>
  </div>
</template>

<script>
import BillingTable from '../../components/dashboard/billing/BillingTable.vue'
export default {
  components: { BillingTable },
methods:{
  async fetchPayments(){
      console.log("Fetching Patient Appointments Data....");
      this.loading = true;
      const URL = "https://hit200-group8.azurewebsites.net/v1/appointments/get_appointments_for_patient";
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
        console.log(typeof(this.appointments))
        console.log("Fetching  Doctors Data Completed...");
      }) .catch(error => {
        console.log(error.code)
        this.error=error.code;
        this.errored = true

      }).finally(() => this.loading = false);
    },
}
}
</script>

<style>

</style>