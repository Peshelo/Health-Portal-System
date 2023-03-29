<template>
    <div>
      <form @submit.prevent="submitForm">
        <label for="doctorId">Doctor ID:</label>
        <input id="doctorId" v-model="doctorId" />
  
        <label for="start">Start:</label>
        <input id="start" v-model="start" type="datetime-local" />
  
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        doctorId: '',
        start: '',
      }
    },
  
    methods: {
      async submitForm() {
        const response = await this.$createAppointment(this.doctorId, this.start)
  
        // Handle the response here
      },
    },
  }
  </script>